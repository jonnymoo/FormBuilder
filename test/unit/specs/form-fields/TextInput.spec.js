import Vue from 'vue'
import TextInput from '@/components/form-fields/TextInput'
import {mount, shallow} from 'vue-test-utils'

describe('TextInput', () => {
 
  it('populates the label value', () => {
      var formField = {}
      const wrapper = shallow(TextInput, {
      propsData: { formField }
      })

      const input = wrapper.find("input");
      input.element.value = "test label";
      input.trigger("input");
      
      expect(formField.label).toEqual("test label");
  })

  test("when I enter a name I expect it to be html escaped", () => {
      // Given a text input
      var formField = {}
      const wrapper = shallow(TextInput, {
        propsData: { formField }
      })
          
      const input = wrapper.find("input");
      input.element.value = "test < label";
      input.trigger("input");
      
      expect(formField.formElement).toContain("test &lt; label");
  });

  test("I expect it to have a text input", () => {
    // Given a text input
    var formField = {}
    const wrapper = shallow(TextInput, {
      propsData: { formField }
    })
        
    expect(formField.formElement).toContain('<input type="text"');
  });

  test("When it is required I expect it to have a required flag", () => {
    // Given a text input when it is required
    var formField = {
      required: true
    }
    const wrapper = shallow(TextInput, {
      propsData: { formField }
    })
        
    // I expect the required flag
    expect(formField.formElement).toContain('required');
  });

  test("When it is has a pattern I expect it have the pattern attribute", () => {
    // Given a text input when it has a pattern
    var formField = {
      validationPattern: "[A-Za-z]{3}"
    }
    const wrapper = shallow(TextInput, {
      propsData: { formField }
    })
    
    // Expect the pattern attribute
    expect(formField.formElement).toContain('pattern="[A-Za-z]{3}"');
  });

  test("When it is has a validation message I expect it have the title attribute", () => {
    // Given a text input when it has a validation message
    var formField = {
      validationMessage: "WTF"
    }
    const wrapper = shallow(TextInput, {
      propsData: { formField }
    })
    
    // I expect a title attribute
    expect(formField.formElement).toContain('title="WTF"');
  });

  test("I expect it to have a readonly flag bound to a vue field", () => {
    // Given a text input when it is required
    var formField = {
      readonly: true
    }
    const wrapper = shallow(TextInput, {
      propsData: { formField }
    })
    
    // I expect the required flag
    expect(formField.formElement).toContain('v-model="form.readOnly"');
  });
})
