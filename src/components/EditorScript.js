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
      // The fields on the form
      formFields: [],
      // Specifies whether the form tab is active
      formTabActive: true,
      // Specifies whether the properties tab is active
      propertiesTabActive: false,
      // Specifies whether the fields tab is active
      fieldsTabActive: true,
      // Specifies whether the preview tab is active
      previewTabActive: false
    }
  },
  methods: {
    // Select a field at a given index
    selectField: function (index) {
      var i = 0

      // clear selected
      for (i = 0; i < this.formFields.length; i++) {
        this.formFields[i].selected = (i === index)
      }

      // Activate the properties
      this.activateTab('properties')
    },
    // Activate a tab (two lots - properties / form and fields / preview)
    activateTab: function (tab) {
      if (tab === 'form' || tab === 'properties') {
        this.formTabActive = (tab === 'form')
        this.propertiesTabActive = (tab !== 'form')
      } else {
        this.fieldsTabActive = (tab === 'fields')
        this.previewTabActive = (tab !== 'fields')
      }
    },
    // Add a new form field item
    addFormItem: (function () {
      // Private index variable
      var formFieldsIndex = 0

      // Add form field to the list - you need to specify all the properties here so they get bound properly
      return function (type, event) {
        var field = {
          key: formFieldsIndex++,
          type: type,
          name: null,
          label: null,
          placeHolder: null,
          content: null,
          formElement: null,
          selected: true,
          cols: null,
          rows: null
        }

        // Set the specific defaults per field type - this need to be moved into the view components as an export somehow
        if (type === 'TextArea') {
          field.cols = 40
          field.rows = 5
        }

        // Add the field to the list of fields
        this.formFields.push(field)
        this.selectField(this.formFields.length - 1)
      }
    })()
  }
}
