import MonacoEditor from 'vue-monaco'
import monaco from '../monaco'

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
      return this.editor.fieldsJsonDefault
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
    }
  },
  data () {
    return {
      fileDispose: null
    }
  },
  methods: {
    monacoMounted: function (editor) {
      monaco.addFieldsVar(this.editor.fieldsJsonDefault)
    }
  }
}
