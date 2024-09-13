/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import TelemetryReporter from '@vscode/extension-telemetry';
import path = require('path');
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
  // Extract the filename since doc.fileName
  // is actually full path, not the file *name*
  const fileName = path.basename(doc.uri.fsPath);

  if (fileName === 'waypoint.hcl') {
    return 'waypoint';
  }
  if (fileName === 'sentinel.hcl') {
    return 'sentinel';
  }
  if (fileName.endsWith('.pkr.hcl')) {
    return 'packer';
  }
  if (fileName.endsWith('.pkrvars.hcl')) {
    return 'packer-vars';
  }
  if (fileName.endsWith('.tf')) {
    return 'terraform';
  }
  if (fileName.endsWith('.tfvars')) {
    return 'terraform-vars';
  }
  if (fileName === '.terraform.lock.hcl') {
    return 'terraform-lock';
  }
  if (fileName.endsWith('.tfstack.hcl')) {
    return 'terraform-stack';
  }
  if (fileName.endsWith('.tfdeploy.hcl')) {
    return 'terraform-deploy';
  }
  if (fileName.endsWith('.tftest.hcl')) {
    return 'terraform-test';
  }
  if (fileName.endsWith('.tfmock.hcl')) {
    return 'terraform-mock';
  }
  if (fileName === 'terragrunt.hcl') {
    return 'terragrunt';
  }
  if (fileName === '.tflint.hcl') {
    return 'tflint';
  }
  if (fileName.endsWith('.nomad') || fileName.endsWith('.nomad.hcl')) {
    return 'nomad';
  }
  if (fileName.endsWith('.hcl')) {
    return 'hcl';
  }

  return undefined;
}
