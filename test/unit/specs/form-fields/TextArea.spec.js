import Vue from 'vue'
import TextArea from '@/components/form-fields/TextArea'
import {mount, shallow} from 'vue-test-utils'

describe('Given a TextArea', () => {
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

  test("When it is has help I expect it have the aria-describedby attribute", () => {
    // Given a text area when it has help
    var formField = {
      help: "some help",
      key: 'abc'
    }
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
    
    // I expect an aria-describedby  attribute
    expect(formField.formElement).toContain('aria-describedby="abc_help"');
  });

  test("When it is has help I expect it associated help", () => {
    // Given a text area when it has help
    var formField = {
      help: "some help",
      key: 'abc'
    }
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
    
    // I expect the help as a 'small' element
    expect(formField.formElement).toContain('<small id="abc_help" class="form-text text-muted">some help</small>');
  });

  test("When it is has prepend text I expect it have a prenend element in the input group", () => {
    // Given a text area when it has prepend text
    var formField = {
      prepend: "prepend text"
    }
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
    
    // I expect the help as a prepend element
    expect(formField.formElement).toContain('<div class="input-group-prepend"><span class="input-group-text">prepend text</span></div>');
  });

  test("When it is has append text I expect it have a append element in the input group", () => {
    // Given a text area when it has append text
    var formField = {
      append: "append text"
    }
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
    
    // I expect the help as a prepend element
    expect(formField.formElement).toContain('<div class="input-group-append"><span class="input-group-text">append text</span></div>');
  });

})
