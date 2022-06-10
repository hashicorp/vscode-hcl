import * as vscode from 'vscode';
import { activateExtension, deactivateExtension } from './common';

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  activateExtension(context);
}

export async function deactivate(): Promise<void> {
  deactivateExtension();
}
