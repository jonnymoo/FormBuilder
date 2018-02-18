import htmlEncode from '@/util/HtmlEncode'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'

export default {
  components: {
    codemirror
  },
  name: 'FormPreview',
  props: ['editor'],
  data () {
    return {
      readOnly: false,
      settingsVisible: false,
      previewVisible: true,
      HTMLSourceVisible: false,
      fieldsJson: '{\r\n}',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'application/json',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
      }
    }
  },
  computed: {
    fieldsJsonDefault: function () {
      var json = '{\r\n'
      var i = 0
      for (i = 0; i < this.editor.formFields.length; i++) {
        if (this.editor.formFields[i].name) {
          json = json + `\t"${this.editor.formFields[i].name}": ''`
          if (i !== this.editor.formFields.length - 1) {
            json = json + ','
          }
          json = json + '\r\n'
        }
      }
      json = json + '}'
      return json
    },
    // Returns the html for the form
    preview: function () {
      var i = 0
      var html = `<!doctype html>
      <html lang="en">
        <head>
          <!-- Required meta tags -->
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
          <!-- Bootstrap CSS -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
          
          <!-- Font awesome -->
          <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

          <title>Form Builder</title>
        </head>
        <body>
          <div id="app">
            <div class="container-fluid">`
      if (this.editor !== undefined) {
        for (i = 0; i < this.editor.formFields.length; i++) {
          html = html + '<div class="row"><div class="col-md-12">' + this.editor.formFields[i].formElement + '</div></div>'
        }
        if (!this.readOnly) {
          html = html + `<div class="row"><div class="col-md-12"><div class="form-group"><button class="btn btn-primary" v-on:click="submit">${htmlEncode(this.editor.submitText)}</button/></div></div></div>`
        }
        html = html + '</div>'
      }
      html = html + `</div></div>
          <!-- Optional JavaScript -->
          <!-- jQuery first, then Popper.js, then Bootstrap JS -->
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

          <!-- Vue -->
          <script src="https://cdn.jsdelivr.net/npm/vue"></script>
          <script>
            new Vue({
              el: '#app',
              data: {
                form: {
                  readOnly: ${this.readOnly}
                },
                fields: ${this.fieldsJson}
              },
              methods: {
                submit: function () {
                  alert(JSON.stringify(this.fields))
                }
              }
            })
          </script>
        </body>
      </html>`
      return html
    }
  },
  methods: {
    setDefault: function () {
      this.fieldsJson = this.fieldsJsonDefault
    }
  }
}
