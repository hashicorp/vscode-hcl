import TelemetryReporter from '@vscode/extension-telemetry';
import * as vscode from 'vscode';

const brand = `HashiCorp HCL`;
const outputChannel = vscode.window.createOutputChannel(brand);

let reporter: TelemetryReporter;

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  const manifest = context.extension.packageJSON;
  reporter = new TelemetryReporter(context.extension.id, manifest.version, manifest.appInsightsKey);
  context.subscriptions.push(reporter);
  context.subscriptions.push(outputChannel);

  outputChannel.appendLine('Started');
  reporter.sendTelemetryEvent('startExtension');
}

export async function deactivate(): Promise<void> {
  outputChannel.appendLine('Stopped');
  reporter.sendTelemetryEvent('stopExtension');
}
