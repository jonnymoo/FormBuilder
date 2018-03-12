import Vue from 'vue'
import RepeatingSection from '@/components/form-fields/RepeatingSection'
import Editor from '@/components/Editor'
import {mount, shallow} from 'vue-test-utils'
import monaco from '@/components/monaco'

jest.mock('@/components/monaco', () => ({
  addFieldsVar: jest.fn()
}));

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
    expect(formField.formElement).toContain('<div id="accordion');
  });

  test("When the monaco editor is mounted I expect it to update the field var for the monaco intellisense", () => {
    
    // Given a start condition
    var formField = {
      name: "testrepeatedfield",
      formFields:  []
    }
    
    const wrapper = shallow(RepeatingSection, {
      propsData: { 
        formField: formField, 
        editor: {
          fieldsJsonDefault: '{"test": ""}',
          fieldsJson: () => { return '"field": ""'},
          formHtml: () => {}
        },
        modelName: "modelName",
        model: '{"test2": ""}' 
      }
    })
   
    // When the monaco edior is mounted
    wrapper.vm.monacoFocus()

    expect(monaco.addFieldsVar).toBeCalledWith('{"test": ""}', "testrepeatedfield", '{"field": ""}');
  });
})
