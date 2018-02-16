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
      formFields: [],
      formTabActive: true,
      propertiesTabActive: false,
      fieldsTabActive: true,
      previewTabActive: false
    }
  },
  methods: {
    selectField: function (index) {
      var i = 0
      // clear selected
      for (i = 0; i < this.formFields.length; i++) {
        this.formFields[i].selected = (i === index)
      }
      this.activateTab('properties')
    },
    activateTab: function (tab) {
      if (tab === 'form' || tab === 'properties') {
        this.formTabActive = (tab === 'form')
        this.propertiesTabActive = (tab !== 'form')
      } else {
        this.fieldsTabActive = (tab === 'fields')
        this.previewTabActive = (tab !== 'fields')
      }
    },
    addFormItem: (function () {
      // Private vars
      var formFieldsIndex = 0

      // Add form field to the list
      return function (type, event) {
        this.formFields.push({
          key: formFieldsIndex++,
          type: type,
          content: null,
          formElement: null,
          selected: true
        })
        this.selectField(this.formFields.length - 1)
      }
    })()
  }
}
