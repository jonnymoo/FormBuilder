import htmlEncode from '@/util/HtmlEncode'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/addon/display/autorefresh.js'

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
        lineNumbers: true,
        line: true,
        autoRefresh: true
      },
      cmOptionshtml: {
        // codemirror options
        tabSize: 4,
        mode: 'text/html',
        lineNumbers: true,
        line: true,
        autoRefresh: true,
        readOnly: true
      }
    }
  },
  computed: {
    // Gets the computed stuff (conditions etc) needed for the view
    methodsJson: function () {
      var i = 0
      var ret = '{\n'
      for (i = 0; i < this.editor.formFields.length; i++) {
        var field = this.editor.formFields[i]
        ret = ret + `        'FieldCondition_${field.key}': function () {
          return ( ${field.condition === '' ? 'true' : field.condition} )
        }`

        if (i !== this.editor.formFields.length - 1) {
          ret = ret + ','
        }

        ret = ret + '\n'
      }
      ret = ret + '}\n'

      return ret
    },
    // Returns the html for the form
    preview: function () {
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
      <form onsubmit="return submitForm(event)" class="container-fluid">`
      html = html + this.editor.formHtml(this.editor.formFields)
      if (!this.readOnly) {
        html = html + `
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="${htmlEncode(this.editor.submitText)}" />
          </div>
        </div>
      </div>`
      }
      html = html + `
      </form>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <!-- Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script>
      var fields = ${this.fieldsJson}

      new Vue({
        el: '#app',
        data: {
          form: {
            readOnly: ${this.readOnly}
          },
          fields: fields
        },
        methods: ${this.methodsJson}
      })
      function submitForm(e) {
        e.preventDefault()
        alert(JSON.stringify(fields))
        return false
      }
    </script>
  </body>
</html>`
      return html
    }
  },
  methods: {
    setDefault: function () {
      var json = '{' + this.editor.fieldsJson(this.editor.formFields) + '}'
      console.log(json)
      this.fieldsJson = JSON.stringify(JSON.parse(json), undefined, 2)
    }
  }
}
