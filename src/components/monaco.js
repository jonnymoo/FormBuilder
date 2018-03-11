export default {
  addFieldsVar: function (fieldsJson, model, modelJson) {
    if (window.civica_monacofileDispose) {
      window.civica_monacofileDispose.dispose()
    }
    window.civica_monacofileDispose = window.monaco.languages.typescript.javascriptDefaults
      .addExtraLib(`var fields = ${fieldsJson}
      var ${model} = ${modelJson}`, 'filename/fields.d.ts')
  }
}
