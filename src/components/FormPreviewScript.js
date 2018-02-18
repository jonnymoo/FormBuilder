import htmlEncode from '@/util/HtmlEncode'

export default {
  components: {
  },
  name: 'FormPreview',
  props: ['editor'],
  computed: {
    // Returns the html for the form
    preview: function () {
      var i = 0
      var html = `<!doctype html>
      <html lang="en">
        <head>
          <!-- Required meta tags -->
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      
          <!-- Bootstrap CSS -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
          <link rel="stylesheet" href="/static/styles.css">
          
          <!-- Font awesome -->
          <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

          <title>Form Builder</title>
        </head>
        <body>
          <header>
            <h1>Form Tester</h1>
          </header>
          <div id="app">
            <form><div class="container-fluid">`
      if (this.editor !== undefined) {
        for (i = 0; i < this.editor.formFields.length; i++) {
          html = html + '<div class="row"><div class="col-md-12">' + this.editor.formFields[i].formElement + '</div></div>'
        }
        html = html + '<div class="row"><div class="col-md-12"><div class="form-group"><input type="submit" class="btn btn-primary" value="' + htmlEncode(this.editor.submitText) + '"/></div></div></div>'
        html = html + '</div>'
      }
      html = html + `</form></div></div>
          <!-- Optional JavaScript -->
          <!-- jQuery first, then Popper.js, then Bootstrap JS -->
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </body>
      </html>`
      return html
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
