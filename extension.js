const vscode = require('vscode');
const { getNextLineNumberMode } = require('./lineNumbers');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const command = vscode.commands.registerCommand(
    'toggleLineNumbers.toggle',
    async () => {
      const editorConfiguration = vscode.workspace.getConfiguration('editor');
      const currentMode = editorConfiguration.get('lineNumbers', 'on');
      const nextMode = getNextLineNumberMode(currentMode);

      await editorConfiguration.update(
        'lineNumbers',
        nextMode,
        vscode.ConfigurationTarget.Global
      );

      const label = nextMode === 'relative' ? 'Relative' : 'Absolute';
      void vscode.window.setStatusBarMessage(`Line numbers: ${label}`, 2000);
    }
  );

  context.subscriptions.push(command);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
