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
      submitText: 'Submit',
      // Clipboard
      clipboard: {
        field: null
      }
    }
  },
  computed: {
    fieldsJsonDefault: function () {
      var json = '{' + this.fieldsJson(this.formFields) + '}'
      return json
    }
  },
  methods: {
    // Select a field at a given index
    selectField: function (key, fields) {
      var i = 0

      if (fields === undefined) {
        fields = this.formFields
      }

      // clear selected
      for (i = 0; i < fields.length; i++) {
        fields[i].selected = (fields[i].key === key)

        // recurse
        if (fields[i].formFields !== null) {
          this.selectField(key, fields[i].formFields)
        }
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
    addFormItem: function (fieldType) {
      var i = 0
      var field = FieldTypes.clone(fieldType)
      // Add the field in the current list
      var formFields = this.getCurrentList()
      // No current list?  Use top level
      if (formFields === null) {
        formFields = this.formFields
      }

      // Add it after the currently selected item
      for (i = 0; i < formFields.length; i++) {
        if (formFields[i].selected) {
          break
        }
      }
      
      formFields.splice(i + 1, 0, field)
      this.selectField(field.key)
    },
    // Get the form field list that is current (i.e. if a condition or repeated section is selected - then get the sub form fields)
    getCurrentList (fields) {
      var i = 0
      // Use top level list if nothing passed in
      if (fields === undefined) {
        fields = this.formFields
      }
      // Loop fields to find selected
      for (i = 0; i < fields.length; i++) {
        if (fields[i].selected) {
          // If we have sub fields - return these
          if (fields[i].formFields !== null) {
            return fields[i].formFields
          } else {
            return fields
          }
        }
        // recurse on sub fields
        if (fields[i].formFields !== null) {
          var list = this.getCurrentList(fields[i].formFields)
          if (list !== null) {
            return list
          }
        }
      }
      // Not found a current list
      return null
    },
    // Create the html for a set of fields
    formHtml: function (formFields) {
      var ret = ''
      var i = 0
      for (i = 0; i < formFields.length; i++) {
        ret = ret + formFields[i].formElement
      }
      return ret
    },
    // Create the Json for a set of fields
    fieldsJson: function (formFields) {
      var json = ''
      var fieldJson = null
      var firstField = true
      var i = 0
      for (i = 0; i < formFields.length; i++) {
        fieldJson = formFields[i].jsonDefault
        if (fieldJson) {
          if (firstField) {
            firstField = false
          } else {
            json = json + ','
          }
          json = json + fieldJson
        }
      }
      return json
    },
    // Put a clone of the field into the clipboard
    copy: function (field) {
      this.clipboard.field = field
    },
    // Put the field into the clipboard and remove from any list
    cut: function (field) {
      this.clipboard.field = field
      this.remove(field)
    },
    // Paste the clip board next to the field
    paste: function (field, fields) {
      var i = 0
      // Use form fields if list not passed in
      if (fields === undefined) {
        fields = this.formFields
      }
      for (i = 0; i < fields.length; i++) {
        if (fields[i].key === field.key) {
          // found it - clone the clipboard
          // if we have children - put it there
          if (fields[i].formFields) {
            fields[i].formFields.splice(0, 0, FieldTypes.clone(this.clipboard.field))
          } else {
            // Stick if after this one
            fields.splice(i + 1, 0, FieldTypes.clone(this.clipboard.field))
          }
          return true
        }
        if (fields[i].formFields) {
          // Recurse
          if (this.paste(field, fields[i].formFields)) {
            return true
          }
        }
      }
      // Not found
      return false
    },
    // Remove an item from a list - returns true if removed
    remove: function (field, fields) {
      var i = 0
      if (fields === undefined) {
        fields = this.formFields
      }
      for (i = 0; i < fields.length; i++) {
        if (fields[i].key === field.key) {
          // Found - remove
          fields.splice(i, 1)
          return true
        }
        // Recurse
        if (fields[i].formFields) {
          if (this.remove(field, fields[i].formFields)) {
            return true
          }
        }
      }
      return false
    }
  }
}
