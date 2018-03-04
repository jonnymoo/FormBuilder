import Vue from 'vue'
import RepeatingSection from '@/components/form-fields/RepeatingSection'
import Editor from '@/components/Editor'
import {mount, shallow} from 'vue-test-utils'

describe('Given a repeating section', () => {
  test("I expect it to have an accordion", () => {
    // Given a start condition
    var formField = {}
    var editor = {
      fieldJsonDefault: "test",
      formHtml: () => {},
      fieldsJson: () => {}
    }

    const wrapper = shallow(RepeatingSection, {
      propsData: { formField, editor }
    })
   
    // I expect it to have an if statement on a template
    expect(formField.formElement).toContain('<div id="accordion">');
  });
})
