export default {
  addFieldsVar: function (fieldsJson, model, modelJson) {
    if (window.civica_monacofileDispose) {
      window.civica_monacofileDispose.dispose()
    }
/*
    if (window.civica_monacoCompletionDispose) {
      window.civica_monacoCompletionDispose.dispose()
    }
*/
    window.civica_monacofileDispose = window.monaco.languages.typescript.javascriptDefaults
      .addExtraLib(`var fields = ${fieldsJson}
      var ${model} = ${modelJson}`, 'filename/fields.d.ts')
/*
    window.civica_monacoCompletionDispose = window.monaco.languages.registerCompletionItemProvider("handlebars", {
        triggerCharacters: [ "{" ],
        provideCompletionItems: function(model, position) {
            let suggestions = [
                {
                    label: "foo",
                    kind: monaco.languages.CompletionItemKind.Variable,
                    insertText: "foo"
                }
            ];
            
            return suggestions;
        }
    })
*/
  }
}
