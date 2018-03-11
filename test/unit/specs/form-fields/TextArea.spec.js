import Vue from 'vue'
import TextArea from '@/components/form-fields/TextArea'
import {mount, shallow} from 'vue-test-utils'

describe('Given a TextInput', () => {
  test("I expect it to have a text area", () => {
    // Given a text area
    var formField = {}
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
   
    // I expect it to have a text area
    expect(formField.formElement).toContain('<textarea');
  });

  test("When it is required I expect it to have a required flag", () => {
    // Given a text area when it is required
    var formField = {
      required: true
    }
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
    
    // I expect the required flag
    expect(formField.formElement).toContain('required');
  });

  test("When it is has a pattern I expect it have the pattern attribute", () => {
    // Given a text area when it has a pattern
    var formField = {
      validationPattern: "[A-Za-z]{3}"
    }
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
    
    // Expect the pattern attribute
    expect(formField.formElement).toContain('pattern="[A-Za-z]{3}"');
  });

  test("When it is has a validation message I expect it have the title attribute", () => {
    // Given a text area when it has a validation message
    var formField = {
      validationMessage: "WTF"
    }
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
    
    // I expect a title attribute
    expect(formField.formElement).toContain('title="WTF"');
  });

  test("I expect it to have a readonly flag bound to a vue field", () => {
    // Given a text area when it is required
    var formField = {
      readonly: true
    }
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
    
    // I expect the required flag
    expect(formField.formElement).toContain('v-bind:readonly="form.readOnly"');
  });

  test("When I have a name I expect it to be bound to the model", () => {
    // Given a text area when it is has a name
    var formField = {
      name: "test"
    }
    const wrapper = shallow(TextArea, {
      propsData: { 
        formField: formField, 
        editor: null, 
        modelName: "modelName", 
        model: null 
      }
    })
    
    // I expect the v-model flag
    expect(formField.formElement).toContain('v-model="modelName.test"');
  });
})
