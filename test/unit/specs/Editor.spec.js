import Vue from 'vue'
import Editor from '@/components/Editor'
import {mount, shallow} from 'vue-test-utils'

describe('Editor.vue', () => {
  it('should contain form add buttons', () => {
    const Constructor = Vue.extend(Editor)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('button').textContent)
      .toEqual('Text Input')
  });

  test("when the add text input is clicked I expect a text input to be added to the form", () => {
    // Given an editor
    const vm = shallow(Editor);
    
    // When the addtext input is clicked
    const button = vm.find('button', button => {
      button.text() === "Text Input"
    });
  
    button.element.click();
    // Expect a text input to be added to the form

    expect(1).toEqual(2);
  });
})
