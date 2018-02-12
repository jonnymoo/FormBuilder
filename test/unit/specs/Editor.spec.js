import Vue from 'vue'
import Editor from '@/components/Editor'

describe('Editor.vue', () => {
  it('should contain form add buttons', () => {
    const Constructor = Vue.extend(Editor)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('button').textContent)
      .toEqual('Text Input')
  })
})
