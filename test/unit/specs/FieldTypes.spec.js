import FieldTypesList, * as FieldTypes from '@/FieldTypes'

describe('Given FieldTypes', () => {
  test('when I ask for a new field I expect it be populated with defaults', () => {
    const fieldType = FieldTypes.CreateInstance({type: "TextInput", desc: "Test", show: true})

    expect(fieldType.key).toBeDefined()
    expect(fieldType.type).toEqual("TextInput")
    expect(fieldType.desc).toEqual("Test")
    expect(fieldType.show).toEqual(true)
    expect(fieldType.name).toEqual(null)
    expect(fieldType.label).toEqual(null)
    expect(fieldType.placeHolder).toEqual(null)
    expect(fieldType.content).toEqual(null)
    expect(fieldType.formElement).toEqual(null)
    expect(fieldType.selected).toEqual(false)
    expect(fieldType.cols).toEqual(null)
    expect(fieldType.rows).toEqual(null)
    expect(fieldType.required).toEqual(false)
    expect(fieldType.validationPattern).toEqual(null)
    expect(fieldType.validationMessage).toEqual(null)
  });

  test('when I ask for a TextArea I expect it be populated with its own defaults', () => {
    const fieldType = FieldTypes.CreateInstance({type: "TextArea", desc: '', show: false})

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