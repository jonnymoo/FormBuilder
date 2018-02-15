import Vue from 'vue'
import TextArea from '@/components/form-fields/TextArea'
import {mount, shallow} from 'vue-test-utils'

describe('TextInput', () => {
  it('should contain a properties form', () => {
    const Constructor = Vue.extend(TextArea)
    const vm = new Constructor().$mount()
    expect(vm.$el.nodeName)
      .toEqual("FORM")
  });

  test("I expect it to have a text area", () => {
    // Given a text input
    var formField = {}
    const wrapper = shallow(TextArea, {
      propsData: { formField }
    })
   
    expect(formField.formElement).toContain('<textarea');
  });


})
