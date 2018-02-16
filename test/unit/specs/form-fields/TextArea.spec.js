import Vue from 'vue'
import TextArea from '@/components/form-fields/TextArea'
import {mount, shallow} from 'vue-test-utils'

describe('Given a TextInput', () => {
  test("I expect it to have a text area", () => {
    // Given a text input
    var formField = {}
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
   
    expect(formField.formElement).toContain('<textarea');
  });
})
