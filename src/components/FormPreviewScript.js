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
      fieldsJson: '',
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
      <form onsubmit="return submitForm(event)" class="container needs-validation">`
      html = html + this.editor.formHtml(this.editor.formFields)
      if (!this.readOnly) {
        html = html + `
        <div class="form-group">
          <input type="submit" class="btn btn-primary" value="${htmlEncode(this.editor.submitText)}" />
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
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.14/dist/vue.js"></script>
    <script>
      var fields = `
      html = html + (this.fieldsJson ? this.fieldsJson : ('{' + this.editor.fieldsJson(this.editor.formFields) + '}'))
      html = html + `
      new Vue({
        el: '#app',
        data: {
          form: {
            readOnly: ${this.readOnly}
          },
          FormFields: fields
        },
        methods: {
          ${this.methodsJson().join(',\r\n')}
        }
      })
      function submitForm(e) {
        e.preventDefault()
        alert(JSON.stringify(fields))
        return false
      }

      // Bootstrap validation
      (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
    </script>
    <style>
      .btn-link {
        white-space: inherit;
      }
    </style>
  </body>
</html>`
      return html
    }
  },
  methods: {
    setDefault: function () {
      var json = '{' + this.editor.fieldsJson(this.editor.formFields) + '}'
      this.fieldsJson = JSON.stringify(JSON.parse(json), undefined, 2)
    },
    // Returns the a list of methods for the view (e.g. conditions)
    methodsJson: function (formFields, modelName) {
      if (formFields === undefined) {
        formFields = this.editor.formFields
      }

      if (modelName === undefined) {
        modelName = 'FormFields'
      }

      var i = 0
      var ret = []
      for (i = 0; i < formFields.length; i++) {
        var field = formFields[i]
        // Conditions methods - takes fields and a model object as parameters
        ret.push(`        'FieldCondition_${field.key}': function (fields, ${modelName}) {
          return ( ${field.condition === '' ? 'true' : field.condition} )
        }`)
        // Add buttons (repeating fields)
        if (field.addButtonText) {
          ret.push(`        'Add_${field.key}': function (e, items) {
            var i = 0
            e.preventDefault()
            for (i = 0; i < items.length; i++) {
              items[i].show = false
            }

            var item = {
              ${this.editor.fieldsJson(field.formFields)}
            }
            item.show = true
            items.push(item)
            return false
          }`)
        }
        // Remove buttons (repeating fields)
        if (field.removeButtonText) {
          ret.push(`        'Remove_${field.key}': function (e, items,index) {
            e.preventDefault()
            items.splice(index, 1)
            return false
          }`)
        }

        if (field.formFields) {
          ret = ret.concat(this.methodsJson(field.formFields, field.name ? field.name : modelName))
        }
      }
      return ret
    }
  }
}
