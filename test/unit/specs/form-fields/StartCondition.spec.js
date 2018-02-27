import Vue from 'vue'
import StartCondition from '@/components/form-fields/StartCondition'
import Editor from '@/components/Editor'
import {mount, shallow} from 'vue-test-utils'
import monaco from '@/components/monaco'

jest.mock('@/components/monaco', () => ({
  addFieldsVar: jest.fn()
}));

describe('Given a start condition', () => {
  test("I expect it to have a if template", () => {
    // Given a start condition
    var formField = {}
    var editor = {
      fieldJsonDefault: "test"
    }

    const wrapper = shallow(StartCondition, {
      propsData: { formField, editor }
    })
   
    // I expect it to have an if statement on a template
    expect(formField.formElement).toContain('<template v-if');
  });

  test("When I change the fields json I expect it to update the field var for the monaco intellisense", () => {
    // Given a start condition
    var formField = {}
    var editor = shallow(Editor)

    editor.fieldsJsonDefault = 'test'

    const wrapper = shallow(StartCondition, {
      propsData: { formField, editor }
    })

    editor.fieldsJsonDefault = "test2"

    // Because the update is done on a watch in vue this needs to be async - hence $nextTick
    expect.assertions(1);
    //wrapper.vm.fieldsJS = "test2"
    //I expect it to update the field var for the monaco intellisense
    wrapper.vm.$nextTick(() => {
      expect(monaco.addFieldsVar).toBeCalledWith('test2');
    })
  });

  test("When the monaco editor is mounted I expect it to update the field var for the monaco intellisense", () => {
    // Given a start condition
    var formField = {}
    var editor = shallow(Editor)
    editor.fieldsJsonDefault = 'test'
  
    const wrapper = shallow(StartCondition, {
      propsData: { formField, editor }
    })
   
    // When the monaco edior is mounted
    wrapper.vm.monacoMounted(editor)
    
    //I expect it to update the field var for the monaco intellisense
    expect(monaco.addFieldsVar).toBeCalledWith('test');
  });


  
})
