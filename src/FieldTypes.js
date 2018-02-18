// FieldType factory methods
export default [
  {
    type: 'TextInput',
    desc: 'Text Input'
  },
  {
    type: 'TextArea',
    desc: 'Text Area'
  },
  {
    type: 'MarkDown',
    desc: 'MarkDown'
  }
]

export function CreateInstance (type) {
  var field = {
    key: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0
      var v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    }),
    type: type,
    name: null,
    label: null,
    placeHolder: null,
    content: null,
    formElement: null,
    selected: false,
    cols: null,
    rows: null,
    required: false,
    validationPattern: null,
    validationMessage: null
  }

  // Set the specific defaults per field type - this need to be moved into the view components as an export somehow
  if (type === 'TextArea') {
    field.cols = 40
    field.rows = 5
  }

  return field
}
