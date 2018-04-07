export default {
  addFieldsVar: function (fieldsJson, model, modelJson) {
    if (window.civica_monacofileDispose) {
      window.civica_monacofileDispose.dispose()
    }
    /* if (window.civica_monacoCompletionDispose) {
      window.civica_monacoCompletionDispose.dispose()
    }
    */
    window.civica_monacofileDispose = window.monaco.languages.typescript.javascriptDefaults
      .addExtraLib(`var fields = ${fieldsJson}
      var ${model} = ${modelJson}`, 'filename/fields.d.ts')
    /* window.civica_monacoCompletionDispose = window.monaco.languages.registerCompletionItemProvider("handlebars", {
        triggerCharacters: [ "{" ],
        provideCompletionItems: function(model, position) {
          var textUntilPosition = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column});
            let suggestions = [
                {
                    label: "foo",
                    kind: monaco.languages.CompletionItemKind.Class,
                    insertText: `{
                      test1: "",
                      test2: ""
                    }`
                }
            ];
            return suggestions;
        }
    })
    */
  }
}
