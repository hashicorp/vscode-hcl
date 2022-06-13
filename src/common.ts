import * as path from 'path';
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
  let product = undefined;

  if (doc.fileName === 'waypoint.hcl') {
    product = 'waypoint';
  } else if (doc.fileName.endsWith('pkr.hcl') || doc.fileName.endsWith('pkrvars.hcl')) {
    product = 'packer';
  } else if (doc.fileName.endsWith('nomad')) {
    product = 'nomad';
  } else if (doc.fileName.endsWith('hcl')) {
    product = 'hcl';
  } else {
    product = undefined;
  }

  return product;
}
