export default {
  addFieldsVar: function (fieldsJson) {
    if (window.civica_monacofileDispose) {
      window.civica_monacofileDispose.dispose()
    }
    window.civica_monacofileDispose = window.monaco.languages.typescript.javascriptDefaults
      .addExtraLib('var fields = ' + fieldsJson, 'filename/fields.d.ts')
  }
}
