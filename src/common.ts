import TelemetryReporter from '@vscode/extension-telemetry';
import * as vscode from 'vscode';

const brand = `HashiCorp HCL`;
const outputChannel = vscode.window.createOutputChannel(brand);

let reporter: TelemetryReporter;

export function activateExtension(context: vscode.ExtensionContext) {
  const manifest = context.extension.packageJSON;
  reporter = new TelemetryReporter(context.extension.id, manifest.version, manifest.appInsightsKey);
  context.subscriptions.push(reporter);
  context.subscriptions.push(outputChannel);

  reporter.sendTelemetryEvent('startExtension');
  outputChannel.appendLine(`Started: HCL ${vscode.env.appHost}`);

  vscode.workspace.onDidOpenTextDocument((document) => {
    if (document === undefined) {
      return;
    }

    if (document.isUntitled) {
      // Untitled files are files which haven't been saved yet,
      // so we don't know if they are hcl so we return
      return;
    }

    const product = detectProduct(document);
    if (product === undefined) {
      return;
    }

    reporter.sendTelemetryEvent('textDocument/didOpen', {
      type: product,
    });
  });
}

export function deactivateExtension() {
  reporter.sendTelemetryEvent('stopExtension');
  outputChannel.appendLine(`Stopped: HCL ${vscode.env.appHost}`);
}

function detectProduct(doc: vscode.TextDocument) {
  if (doc.fileName === 'waypoint.hcl') {
    return 'waypoint';
  }
  if (doc.fileName === 'sentinel.hcl') {
    return 'sentinel';
  }
  if (doc.fileName.endsWith('.pkr.hcl')) {
    return 'packer';
  }
  if (doc.fileName.endsWith('.pkrvars.hcl')) {
    return 'packer-vars'
  }
  if (doc.fileName.endsWith('.tf')) {
    return 'terraform';
  }
  if (doc.fileName.endsWith('.tfvars')) {
    return 'terraform-vars'
  }
  if (doc.fileName === '.terraform.lock.hcl') {
    return 'terraform-lock';
  }
  if (doc.fileName === 'terragrunt.hcl') {
    return 'terragrunt'
  }
  if (doc.fileName.endsWith('.nomad')) {
    return 'nomad';
  }
  if (doc.fileName.endsWith('.hcl')) {
    return 'hcl';
  }

  return undefined;
}
