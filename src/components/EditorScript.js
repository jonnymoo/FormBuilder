import FieldProperties from '@/components/FieldProperties'
import FieldsEditor from '@/components/FieldsEditor'
import FormPreview from '@/components/FormPreview'
import FieldTypesList, * as FieldTypes from '@/FieldTypes'
import MonacoEditor from 'vue-monaco'

export default {
  name: 'Editor',
  components: {
    FieldProperties,
    FieldsEditor,
    FormPreview,
    MonacoEditor
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
    },
    formJson: function () {
      return `{
        "submitText": ${JSON.stringify(this.submitText)},
        "formFields": ${JSON.stringify(this.formFields)}
      }`
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
        if (fields[i].formFields) {
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
      var editor = this
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

      FieldTypes.clone([fieldType], formFields, i + 1, (field, success) => {
        field.key = FieldTypes.newKey()
        editor.selectField(field.key)
        success()
      }, () => {})
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
      var pasteIndex = 0
      var pasteDest = null
      var editor = this
      // Use form fields if list not passed in
      if (fields === undefined) {
        fields = this.formFields
      }
      for (i = 0; i < fields.length; i++) {
        if (fields[i].key === field.key) {
          // found it - clone the clipboard
          // if we have children - put it there
          if (fields[i].formFields) {
            pasteDest = fields[i].formFields
            pasteIndex = 0
          } else {
            // Stick if after this one
            pasteDest = fields
            pasteIndex = i + 1
          }

          FieldTypes.clone([this.clipboard.field], pasteDest, pasteIndex, (field, success) => {
            field.key = FieldTypes.newKey()
            editor.selectField(field.key)
            editor.$nextTick(() => {
              success()
            })
          }, () => {})

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
    },
    load: function (jsonData) {
      var data = JSON.parse(jsonData)
      this.submitText = data.submitText
      this.formFields = []
      var editor = this

      FieldTypes.clone(data.formFields, this.formFields, 0, (field, success) => {
        editor.selectField(field.key)
        editor.$nextTick(() => {
          success()
        })
      }, () => {})
    },
    /* These need changing to overall load and save */
    handleFiles: function (files) {
      var editor = this
      if (files.length > 0) {
        var reader = new FileReader()
        reader.onload = function (evt) {
          editor.load(evt.target.result)
        }
        reader.readAsText(files[0])
      }
    },
    download: function (filename) {
      var data = JSON.stringify(JSON.parse(this.formJson), undefined, 2)
      if (window.navigator.msSaveBlob) {
        var blob = new Blob([data], {type: 'text/plain;charset=utf-8;'})
        navigator.msSaveBlob(blob, filename)
      } else {
        var element = document.createElement('a')
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data))
        element.setAttribute('download', filename)

        element.style.display = 'none'
        document.body.appendChild(element)

        element.click()

        document.body.removeChild(element)
      }
    }
  }
}
