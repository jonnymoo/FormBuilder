// FieldType factory methods
export default [
  {
    type: 'TextInput',
    desc: 'Text Input',
    formFields: null
  },
  {
    type: 'TextArea',
    desc: 'Text Area',
    formFields: null
  },
  {
    type: 'MarkDown',
    desc: 'MarkDown',
    formFields: null
  },
  {
    type: 'Condition',
    desc: 'Condition',
    formFields: []
  },
  {
    type: 'RepeatingSection',
    desc: 'Repeating Section',
    formFields: []
  }
]

// Clones a list of fields from src to dest at index - this an async operation.
// fieldAddedCallback is called every time a field is added (with the field and a success method)
// Callback will be called at the end
export function clone (src, dest, index, fieldAddedCallback, callback) {
  // Recursive clone item function
  function cloneitem (i) {
    // No more items?
    if (i === src.length) {
      callback()
    } else {
      var newField = {}
      var field = src[i]

      // copy / set defaults
      newField.key = field.key === undefined ? null : field.key
      newField.type = field.type === undefined ? null : field.type
      newField.desc = field.desc === undefined ? null : field.desc
      newField.name = field.name === undefined ? null : field.name
      newField.jsonDefault = field.jsonDefault === undefined ? null : field.jsonDefault
      newField.label = field.label === undefined ? null : field.label
      newField.placeHolder = field.placeHolder === undefined ? null : field.placeHolder
      newField.content = field.content === undefined ? null : field.content
      newField.condition = field.condition === undefined ? '' : field.condition
      newField.formElement = field.formElement === undefined ? null : field.formElement
      newField.selected = field.selected === undefined ? false : field.selected
      newField.cols = field.cols === undefined ? 40 : field.cols
      newField.rows = field.rows === undefined ? 5 : field.rows
      newField.required = field.required === undefined ? false : field.required
      newField.validationPattern = field.validationPattern === undefined ? null : field.validationPattern
      newField.validationMessage = field.validationMessage === undefined ? null : field.validationMessage
      newField.addButtonText = field.addButtonText === undefined ? null : field.addButtonText
      newField.removeButtonText = field.removeButtonText === undefined ? null : field.removeButtonText
      newField.help = field.help === undefined ? null : field.help
      newField.prepend = field.prepend === undefined ? null : field.prepend
      newField.append = field.append === undefined ? null : field.append
      newField.formFields = field.formFields ? [] : null

      dest.splice(index + i, 0, newField)

      fieldAddedCallback(newField, () => {
        // recurse down
        clone(field.formFields, newField.formFields, 0, fieldAddedCallback, () => {
          // Move onto next item
          cloneitem(i + 1)
        })
      })
    }
  }

  // Nothing passed = return back with null
  if (!src) {
    callback()
  } else {
    // Clone list
    cloneitem(0)
  }
}

// Create a new key
export function newKey () {
  return 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
