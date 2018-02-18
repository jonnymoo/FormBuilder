import Vue from 'vue'
import MarkDown from '@/components/form-fields/MarkDown'
import {mount, shallow} from 'vue-test-utils'

describe('TextInput', () => {
 
  it('populates the label value', () => {
      var formField = {}
      const wrapper = shallow(MarkDown, {
      propsData: { formField }
      })

      const input = wrapper.find("textarea");
      input.element.value = "# Hello";
      input.trigger("input");
      
      expect(formField.formElement).toContain("<h1");
      expect(formField.formElement).toContain("Hello");
  })
})
