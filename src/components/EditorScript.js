import FieldProperties from '@/components/FieldProperties'
import FieldsEditor from '@/components/FieldsEditor'
import FormPreview from '@/components/FormPreview'
import FieldTypesList, * as FieldTypes from '@/FieldTypes'

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
      previewTabActive: false,
      // Field types
      fieldTypes: FieldTypesList,
      // submit text
      submitText: 'Submit'
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
    addFormItem: function (type) {
      // Add the field to the list of fields
      var field = FieldTypes.CreateInstance(type)
      field.selected = true
      this.formFields.push(field)
      this.selectField(this.formFields.length - 1)
    }
  }
}
