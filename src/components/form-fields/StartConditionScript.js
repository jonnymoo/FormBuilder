import MonacoEditor from 'vue-monaco'

export default {
  name: 'StartCondition',
  props: ['formField', 'editor'],
  components: {
    MonacoEditor
  },
  computed: {
    formElement: function () {
      // Returns the html required for a text input control

      return `<template v-if='FieldCondition_${this.formField.key}()'>`
    },
    fieldsJS: function () {
      return this.editor.fieldsJsonDefault;
    }
  },
  watch: {
    formElement: {
      immediate: true,
      handler (val) {
        // Put the control html onto the formField
        this.formField.formElement = val
      }
    },
    fieldsJS: {
      handler (val) {
        if(window.civica_monacofileDispose) {
          window.civica_monacofileDispose.dispose()
        }
        window.civica_monacofileDispose = window.monaco.languages.typescript.javascriptDefaults
        .addExtraLib('var fields = ' + this.editor.fieldsJsonDefault,
        'filename/facts.d.ts');
      }
    }
  },
  data () {
    return {
      fileDispose: null
    }
  },
  methods: {
    monacoMounted: function (editor){
      if(window.civica_monacofileDispose) {
        window.civica_monacofileDispose.dispose()
      }
      window.civica_monacofileDispose = window.monaco.languages.typescript.javascriptDefaults
        .addExtraLib('var fields = ' + this.editor.fieldsJsonDefault,
        'filename/facts.d.ts');
    }
  }
}
