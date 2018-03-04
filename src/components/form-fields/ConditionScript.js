import MonacoEditor from 'vue-monaco'
import monaco from '../monaco'

export default {
  name: 'Condition',
  props: ['formField', 'editor'],
  components: {
    MonacoEditor
  },
  computed: {
    formElement: function () {
      // Returns the html required for a text input control
      var ret = `<template v-if='FieldCondition_${this.formField.key}()'>`
      ret += this.editor.formHtml(this.formField.formFields)
      ret += '</template>'
      return ret
    },
    fieldsJS: function () {
      return this.editor.fieldsJsonDefault
    },
    // The json for a condition is the json for all the fields under the condition
    jsonDefault: function () {
      return this.editor.fieldsJson(this.formField.formFields)
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
        monaco.addFieldsVar(val)
      }
    },
    jsonDefault: {
      immediate: true,
      handler (val) {
        this.formField.jsonDefault = val
      }
    }
  },
  methods: {
    monacoMounted: function (editor) {
      monaco.addFieldsVar(this.editor.fieldsJsonDefault)
    }
  }
}
