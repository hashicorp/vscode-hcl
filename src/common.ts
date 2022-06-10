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
}

export function deactivateExtension() {
  reporter.sendTelemetryEvent('stopExtension');
  outputChannel.appendLine(`Stopped: HCL ${vscode.env.appHost}`);
}
