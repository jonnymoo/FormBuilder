import Vue from 'vue'
import Editor from '@/components/Editor'
import {mount, shallow} from 'vue-test-utils'

describe('Editor.vue', () => {
  
  test("when the add text input is clicked I expect a text input to be added to the form", () => {
    // Given an editor
    const editor = shallow(Editor);
    
    // When the addtext input is clicked
    const button = editor.findAll('button').wrappers.filter( x => x.text() === "Text Input")[0]
  
    button.element.click();
    // Expect a text input to be added to the form

    expect(editor.vm.formFields.length).toEqual(1);
    expect(editor.vm.formFields[0].type).toEqual("TextInput");
  });

  test("when the add text area is clicked I expect a text area to be added to the form", () => {
    // Given an editor
    const editor = shallow(Editor);
    
    // When the addtext input is clicked
    const button = editor.findAll('button').wrappers.filter( x => x.text() === "Text Area")[0]
  
    button.element.click();
    // Expect a text input to be added to the form

    expect(editor.vm.formFields.length).toEqual(1);
    expect(editor.vm.formFields[0].type).toEqual("TextArea");
  });

  test("when I add a row I expect it to be selected", () => {
    // Given an editor
    const editor = shallow(Editor);
    
    // When the addtext input is clicked
    const button = editor.findAll('button').wrappers.filter( x => x.text() === "Text Area")[0]
  
    button.element.click();
    // Expect a text input to be added to the form

    expect(editor.vm.formFields.length).toEqual(1);
    expect(editor.vm.formFields[0].selected).toEqual(true);
  });

  test("when I add two rows I expect the last one to be selected", () => {
    // Given an editor
    const editor = shallow(Editor);
    
    // When the addtext input is clicked twice
    const button = editor.findAll('button').wrappers.filter( x => x.text() === "Text Area")[0]
  
    button.element.click();
    button.element.click();
    // Expect last text input to be selected
    expect(editor.vm.formFields.length).toEqual(2);
    expect(editor.vm.formFields[0].selected).toEqual(false);
    expect(editor.vm.formFields[1].selected).toEqual(true);
  });
  
  test("when I select the first I expect it to be selected", () => {
    // Given an editor
    const editor = shallow(Editor);
    
    // When the addtext input is clicked twice and an item selected
    const button = editor.findAll('button').wrappers.filter( x => x.text() === "Text Area")[0]
  
    button.element.click();
    button.element.click();
    editor.vm.selectField(editor.vm.formFields[0].key);

    // Expect the first selected

    expect(editor.vm.formFields.length).toEqual(2);
    expect(editor.vm.formFields[0].selected).toEqual(true);
    expect(editor.vm.formFields[1].selected).toEqual(false);
  });

  test("when I add an field with sub fields, the next time I add a field I expect it to be added to the sub fields", () => {
    // Given an editor
    const editor = shallow(Editor);
    
    // When the addtext input is clicked twice and an item selected
    var button = editor.findAll('button').wrappers.filter( x => x.text() === "Condition")[0]
  
    button.element.click();
    editor.vm.selectField(editor.vm.formFields[0].key);

    var button = editor.findAll('button').wrappers.filter( x => x.text() === "Text Input")[0]
    button.element.click();

    // Expect the first selected
    expect(editor.vm.formFields.length).toEqual(1);
    expect(editor.vm.formFields[0].formFields.length).toEqual(1);
  });

  test("when I have no list selected I expect the selected list to be null", () => {
    // Given an editor
    const editor = shallow(Editor);

    // When I have no list selected
    editor.vm.formFields = [
      {
        selected: false,
        formFields: null
      }
    ]

    var list = editor.vm.getCurrentList()

    // expected selected list to be null (there isn't one)
    expect(list).toEqual(null);
  });

  test("when I have a top level field selected I expect the selected list the top level", () => {
    // Given an editor
    const editor = shallow(Editor);

    // When I have no list selected
    editor.vm.formFields = [
      {
        selected: true,
        formFields: null
      }
    ]

    var list = editor.vm.getCurrentList()

    // expected selected list to be the top level
    expect(list.length).toEqual(1);
  });

  test("when I have a top level field selected with sub fields I expect the selected list the second level", () => {
    // Given an editor
    const editor = shallow(Editor);

    // When I have no list selected
    editor.vm.formFields = [
      {
        selected: true,
        formFields: []
      }
    ]

    var list = editor.vm.getCurrentList()

    // expected selected list to be the second level (zero count)
    expect(list.length).toEqual(0);
  });

  test("when I have a second level field selected I expect the selected list the second level", () => {
    // Given an editor
    const editor = shallow(Editor);

    // When I have no list selected
    editor.vm.formFields = [
      {
        selected: false,
        formFields: [{
          selected: true,
          formFields: []
        }]
      }
    ]

    var list = editor.vm.getCurrentList()

    // expected selected list to be the second level (zero count)
    expect(list.length).toEqual(0);
  });

  test("when I have a second level field not selected I expect the selected list to be null", () => {
    // Given an editor
    const editor = shallow(Editor);

    // When I have no list selected
    editor.vm.formFields = [
      {
        selected: false,
        formFields: [{
          selected: false,
          formFields: []
        }]
      }
    ]

    var list = editor.vm.getCurrentList()

    // expected selected list be null (there isn't one)
    expect(list).toEqual(null);
  });

  test("I expect my form html to be my fields form elements concatonated", () => {
    // Given an editor
    const editor = shallow(Editor);

    // with fields
    editor.vm.formFields = [
      {
        formElement: "a"
      },
      {
        formElement: "b"
      }
    ]

    var formHtml = editor.vm.formHtml(editor.vm.formFields)

    // expected selected list to be the second level (zero count)
    expect(formHtml).toEqual("ab");
  });

  test("I expect my the fields json to be the contatentated default json for each field", () => {
    // Given an editor
    const editor = shallow(Editor);

    // with fields
    editor.vm.formFields = [
      {
        jsonDefault: "a"
      },
      {
        jsonDefault: "b"
      }
    ]

    var json = editor.vm.fieldsJson(editor.vm.formFields)

    // expected selected list to be the second level (zero count)
    expect(json).toEqual("a,b");
  });

  test("I expect my the fields json to be the contatentated default json for each field with jsonDefault (ignore otherwise)", () => {
    // Given an editor
    const editor = shallow(Editor);

    // with fields
    editor.vm.formFields = [
      {
      },
      {
        jsonDefault: "b"
      }
    ]

    var json = editor.vm.fieldsJson(editor.vm.formFields)

    // expected selected list to be the second level (zero count)
    expect(json).toEqual("b");
  });

  test("when I select a field I expect the properties tab to be shown", () => {
    // Given an editor
    const editor = shallow(Editor);
    
    // When the addtext input is clicked twice and an item selected
    const button = editor.findAll('button').wrappers.filter( x => x.text() === "Text Area")[0]

    expect(editor.vm.propertiesTabActive).toEqual(false);

    button.element.click();
    button.element.click();
    editor.vm.selectField(editor.vm.formFields[0].key);

    // Expect the properties tab to be active
    expect(editor.vm.propertiesTabActive).toEqual(true);
  });

  test("when I activate the form tab I expect the properties to be deactivated", () => {
    // Given an editor
    const editor = shallow(Editor);

    // When I active form tab
    editor.vm.formTabActive = false;
    editor.vm.propertiesTabActive = true;
    editor.vm.activateTab("form");

    // Expect the form tab to be active
    expect(editor.vm.formTabActive).toEqual(true);
    expect(editor.vm.propertiesTabActive).toEqual(false);
  });

  test("when I activate the property tab I expect the form to be deactivated", () => {
    // Given an editor
    const editor = shallow(Editor);

    // When I active properties tab
    editor.vm.formTabActive = true;
    editor.vm.propertiesTabActive = false;
    editor.vm.activateTab("properties");

    // Expect the properties tab to be active
    expect(editor.vm.formTabActive).toEqual(false);
    expect(editor.vm.propertiesTabActive).toEqual(true);
  });

  test("when I activate the fields tab I expect the preview to be deactivated", () => {
    // Given an editor
    const editor = shallow(Editor);

    // When I active fields tab
    editor.vm.fieldsTabActive = false;
    editor.vm.previewTabActive = true;
    editor.vm.activateTab("fields");

    // Expect the fields tab to be active
    expect(editor.vm.fieldsTabActive).toEqual(true);
    expect(editor.vm.previewTabActive).toEqual(false);
  });

  test("when I activate the preview tab I expect the fields to be deactivated", () => {
    // Given an editor
    const editor = shallow(Editor);

    // When I active preivew tab
    editor.vm.fieldsTabActive = true;
    editor.vm.previewTabActive = false;
    editor.vm.activateTab("preview");

    // Expect the preview tab to be active
    expect(editor.vm.fieldsTabActive).toEqual(false);
    expect(editor.vm.previewTabActive).toEqual(true);
  });

  test('When I have json default on a field they are built into the default json for the form', () => {
    // Given a editor, when I have named fields
    const editor = shallow(Editor)
    
      editor.vm.formFields =  [
          {
            jsonDefault: '"test": "test"'
          },
          {
            jsonDefault: '"test2": "test2"'
          }
        ]

    // I expect it to be in the default json
    expect(editor.vm.fieldsJsonDefault).toContain('"test": "test"')
    expect(editor.vm.fieldsJsonDefault).toContain('"test2": "test2"')
  });


})