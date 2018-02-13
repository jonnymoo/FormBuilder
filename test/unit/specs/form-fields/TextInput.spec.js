import Vue from 'vue'
import TextInput from '@/components/form-fields/TextInput'
import {mount, shallow} from 'vue-test-utils'

describe('TextInput', () => {
  it('should contain a properties form', () => {
    const Constructor = Vue.extend(TextInput)
    const vm = new Constructor().$mount()
    expect(vm.$el.nodeName)
      .toEqual("FORM")
  });

})
