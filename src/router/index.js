import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: Editor,
      props: {
        // Very basic repository to allow us to save and load a form - expect this to
        // be replaced by a proper service which will save and load to the correct place
        // in a cosmodb service
        repository: {
          save: function (uri, data) {
            if (window.navigator.msSaveBlob) {
              var blob = new Blob([data], {type: 'text/plain;charset=utf-8;'})
              navigator.msSaveBlob(blob, uri)
            } else {
              var element = document.createElement('a')
              element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data))
              element.setAttribute('download', uri)
              element.style.display = 'none'
              document.body.appendChild(element)
              element.click()
              document.body.removeChild(element)
            }
          },
          load: function (uri, callback) {
            var reader = new FileReader()
            reader.onload = function (evt) {
              callback(evt.target.result)
            }
            reader.readAsText(uri)
          }
        }
      }
    }
  ]
})
