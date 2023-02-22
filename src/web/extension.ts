/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as vscode from 'vscode';
import { activateExtension, deactivateExtension } from '../common';

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  activateExtension(context);
}

export async function deactivate(): Promise<void> {
  deactivateExtension();
}
