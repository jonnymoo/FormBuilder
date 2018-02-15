import FieldProperties from '@/components/FieldProperties'
import FieldsEditor from '@/components/FieldsEditor'
import FormPreview from '@/components/FormPreview'

export default {
  name: 'Editor',
  components: {
    FieldProperties,
    FieldsEditor,
    FormPreview
  },
  data () {
    return {
      formFields: []
    }
  },
  methods: {
    clearSelected: function () {
      var i = 0
      // clear selected
      for (i = 0; i < this.formFields.length; i++) {
        this.formFields[i].selected = false
      }
    },

    addFormItem: (function () {
      // Private vars
      var formFieldsIndex = 0

      // Add form field to the list
      return function (type, event) {
        this.clearSelected()
        this.formFields.push({
          key: formFieldsIndex++,
          type: type,
          label: 'test label',
          content: null,
          formElement: null,
          selected: true
        })
      }
    })()
  }
}
