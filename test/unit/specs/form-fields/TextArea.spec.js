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

  test("When it is required I expect it to a required flag", () => {
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
      pattern: "[A-Za-z]{3}"
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
      title: "WTF"
    }
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
    
    // I expect a title attribute
    expect(formField.formElement).toContain('title="WTF"');
  });
})
