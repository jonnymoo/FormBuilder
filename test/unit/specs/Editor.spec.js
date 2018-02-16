import Vue from 'vue'
import Editor from '@/components/Editor'
import {mount, shallow} from 'vue-test-utils'

describe('Editor.vue', () => {
  it('should contain form add buttons', () => {
    const Constructor = Vue.extend(Editor)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('button').textContent)
      .toEqual('Text Input')
  });

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
    editor.vm.selectField(0);

    // Expect the first selected

    expect(editor.vm.formFields.length).toEqual(2);
    expect(editor.vm.formFields[0].selected).toEqual(true);
    expect(editor.vm.formFields[1].selected).toEqual(false);
  });

  test("when I select a field I expect the properties tab to be shown", () => {
    // Given an editor
    const editor = shallow(Editor);
    
    // When the addtext input is clicked twice and an item selected
    const button = editor.findAll('button').wrappers.filter( x => x.text() === "Text Area")[0]

    expect(editor.vm.propertiesTabActive).toEqual(false);

    button.element.click();
    button.element.click();
    editor.vm.selectField(0);

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

})