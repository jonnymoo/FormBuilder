import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('should contain the view app', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.id)
      .toEqual("app")
  })
})
