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


})
