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

export function clone (field) {
  // Clone
  var newField = {}
  var i

  // Set a new key
  newField.key = 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })

  // copy / set defaults
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

  if (!field.formFields) {
    newField.formFields = null
  } else {
    newField.formFields = []
    for (i = 0; i < field.formFields.length; i++) {
      newField.formFields.push(clone(field.formFields[i]))
    }
  }

  return newField
}
