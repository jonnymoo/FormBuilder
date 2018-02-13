<template>
<div>
  <h1>Form Editor</h1>
  <div class="buttons">
    <button v-on:click="addFormItem('TextInput')">Text Input</button>
    <button v-on:click="addFormItem('TextArea')">Text Area</button>
  </div>
  <div class="fieldProperties">
    <FieldProperties :formFields="formFields"></FieldProperties>
  </div>
  <div class="formPreview">

  </div>

</div>
</template>

<script>
import FieldProperties from '@/components/FieldProperties'

export default {
  name: 'Editor',
  components: {
    FieldProperties
  },
  data () {
    return {
      formFields: []
    }
  },
  methods: {
    addFormItem: (function () {
      // Private vars
      var formFieldsIndex = 0

      // Add form field to the list
      return function (type, event) {
        this.formFields.push({
          key: formFieldsIndex++,
          type: type
        })
      }
    })()
  }
}
</script>
