import FieldTypesList, * as FieldTypes from '@/FieldTypes'

describe('Given FieldTypes', () => {
  test('when I clone a new field I expect it be populated with defaults', () => {
    const fieldType = FieldTypes.clone({})

    expect(fieldType.key).toBeDefined()
    expect(fieldType.type).toEqual(null)
    expect(fieldType.desc).toEqual(null)
    expect(fieldType.formFields).toEqual(null)
    expect(fieldType.name).toEqual(null)
    expect(fieldType.label).toEqual(null)
    expect(fieldType.jsonDefault).toEqual(null)
    expect(fieldType.placeHolder).toEqual(null)
    expect(fieldType.content).toEqual(null)
    expect(fieldType.condition).toEqual('')
    expect(fieldType.formElement).toEqual(null)
    expect(fieldType.selected).toEqual(false)
    expect(fieldType.cols).toEqual(40)
    expect(fieldType.rows).toEqual(5)
    expect(fieldType.required).toEqual(false)
    expect(fieldType.validationPattern).toEqual(null)
    expect(fieldType.validationMessage).toEqual(null)
    expect(fieldType.addButtonText).toEqual(null)
    expect(fieldType.removeButtonText).toEqual(null)
  });

  test('when I clone a new field I from an existing object expect it be populated with copies from the original', () => {
    const fieldType = FieldTypes.clone({
      key: 'a',
      type: 'TextInput',
      desc: 'desc',
      formFields: [{}],
      name: 'name',
      label: 'label',
      placeHolder: 'placeHolder',
      content: 'content',
      condition: 'condition',
      formElement: 'formElement',
      selected: false,
      cols: 1,
      rows: 2,
      required: false,
      validationPattern: 'validationPattern',
      validationMessage: 'validationMessage',
      jsonDefault: 'jsonDefault',
      addButtonText: 'addbutton',
      removeButtonText: 'removebutton'

    })

    expect(fieldType.key).toBeDefined()
    expect(fieldType.key).not.toEqual('a')
    expect(fieldType.type).toEqual("TextInput")
    expect(fieldType.desc).toEqual('desc')
    expect(fieldType.jsonDefault).toEqual('jsonDefault')
    expect(fieldType.formFields.length).toEqual(1)
    expect(fieldType.name).toEqual('name')
    expect(fieldType.label).toEqual('label')
    expect(fieldType.placeHolder).toEqual('placeHolder')
    expect(fieldType.content).toEqual('content')
    expect(fieldType.condition).toEqual('condition')
    expect(fieldType.formElement).toEqual('formElement')
    expect(fieldType.selected).toEqual(false)
    expect(fieldType.cols).toEqual(1)
    expect(fieldType.rows).toEqual(2)
    expect(fieldType.required).toEqual(false)
    expect(fieldType.validationPattern).toEqual('validationPattern')
    expect(fieldType.validationMessage).toEqual('validationMessage')
    expect(fieldType.addButtonText).toEqual('addbutton')
    expect(fieldType.removeButtonText).toEqual('removebutton')
  });

  test('when I clone a TextArea I expect it be populated with its own defaults', () => {
    const fieldType = FieldTypes.clone({type: "TextArea", desc: '', formFields: null})

    expect(fieldType.type).toEqual("TextArea")
    expect(fieldType.cols).toEqual(40)
    expect(fieldType.rows).toEqual(5)
  });

  test('I expect a textinput textarea and markdown in the list', () => {
    const fieldType = FieldTypesList

    expect(FieldTypesList[0].type).toEqual("TextInput")
    expect(FieldTypesList[0].desc).toEqual("Text Input")
    expect(FieldTypesList[1].type).toEqual("TextArea")
    expect(FieldTypesList[1].desc).toEqual("Text Area")
    expect(FieldTypesList[2].type).toEqual("MarkDown")
    expect(FieldTypesList[2].desc).toEqual("MarkDown")
 });
})