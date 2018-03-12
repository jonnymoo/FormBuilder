import Vue from 'vue'
import Condition from '@/components/form-fields/Condition'
import Editor from '@/components/Editor'
import {mount, shallow} from 'vue-test-utils'
import monaco from '@/components/monaco'

jest.mock('@/components/monaco', () => ({
  addFieldsVar: jest.fn()
}));


describe('Given a condition', () => {
  test("I expect it to have a if template", () => {
    // Given a start condition
    var formField = {}
    var editor = {
      fieldJsonDefault: "test",
      formHtml: () => {},
      fieldsJson: () => {}
    }

    const wrapper = shallow(Condition, {
      propsData: { formField, editor }
    })
   
    // I expect it to have an if statement on a template
    expect(formField.formElement).toContain('<template v-if');
  });


  test("When the monaco editor is mounted I expect it to update the field var for the monaco intellisense", () => {
    
    // Given a start condition
    var formField = {
      formFields:  []
    }
    
    const wrapper = shallow(Condition, {
      propsData: { 
        formField: formField, 
        editor: {
          fieldsJsonDefault: '{"test": ""}',
          fieldsJson: () => {},
          formHtml: () => {}
        },
        modelName: "modelName",
        model: '{"test2": ""}' 
      }
    })
   
    // When the monaco edior is mounted
    wrapper.vm.monacoFocus()

    expect(monaco.addFieldsVar).toBeCalledWith('{"test": ""}', "modelName", '{"test2": ""}');
  });
})
