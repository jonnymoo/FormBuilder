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
  
  test("when I clear selected I expect nothing to be selected", () => {
    // Given an editor
    const editor = shallow(Editor);
    
    // When the addtext input is clicked twice and clear selected
    const button = editor.findAll('button').wrappers.filter( x => x.text() === "Text Area")[0]
  
    button.element.click();
    button.element.click();
    editor.vm.clearSelected();

    // Expect none to be selected

    expect(editor.vm.formFields.length).toEqual(2);
    expect(editor.vm.formFields[0].selected).toEqual(false);
    expect(editor.vm.formFields[1].selected).toEqual(false);
  });

})
