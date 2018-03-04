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

export function CreateInstance (fieldType) {
  var field = {
    key: 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0
      var v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    }),
    type: fieldType.type,
    desc: fieldType.desc,
    formFields: fieldType.formFields,
    name: null,
    jsonDefault: null,
    label: null,
    placeHolder: null,
    content: null,
    condition: '',
    formElement: null,
    selected: false,
    cols: null,
    rows: null,
    required: false,
    validationPattern: null,
    validationMessage: null,
    addButtonText: null,
    removeButtonText: null
  }

  // Set the specific defaults per field type - this need to be moved into the view components as an export somehow
  if (fieldType.type === 'TextArea') {
    field.cols = 40
    field.rows = 5
  }

  return field
}
