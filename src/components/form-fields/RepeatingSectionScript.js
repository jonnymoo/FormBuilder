import htmlEncode from '@/util/HtmlEncode'

export default {
  name: 'RepeatingSection',
  props: ['formField', 'editor', 'modelName', 'model'],
  computed: {
    formElement: function () {
      // Returns the html required for a repeating section
      var ret = `
      <div class="form-group">
        <div id="accordion_${this.formField.key}">
          <div class="card" v-for="(${htmlEncode(this.formField.name)}, index) in ${this.modelName}.${htmlEncode(this.formField.name)}_items">
            <div class="card-header container-fluid" :id="'heading_${this.formField.key}_' + index">
              <div class="row">
                <div class="col col-9">
                  <button type="button" class="btn btn-link" data-toggle="collapse" :data-target="'#collapse_${this.formField.key}_' + index" aria-expanded="true" aria-controls="collapseOne">
                    ${htmlEncode(this.formField.label)}
                  </button>
                </div>
                <div class="col col-3 text-right">
                  <button type="button" class="btn btn-link" v-on:click='Remove_${this.formField.key}($event, ${this.modelName}.${htmlEncode(this.formField.name)}_items, index)'>
                    ${htmlEncode(this.formField.removeButtonText)}
                  </button>
                </div>
              </div>
            </div>
            <div :id="'collapse_${this.formField.key}_' + index" class="collapse" v-bind:class="{ show: ${htmlEncode(this.formField.name)}.show }" :aria-labelledby="'heading_${this.formField.key}_' + index" data-parent="#accordion_${this.formField.key}">
              <div class="card-body">`
      ret += this.editor.formHtml(this.formField.formFields)
      ret += `
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn" type="button" v-on:click='Add_${this.formField.key}($event, ${this.modelName}.${htmlEncode(this.formField.name)}_items)'>${htmlEncode(this.formField.addButtonText)}</button>
      </div>
      `
      return ret
    },
    jsonDefault: function () {
      return `"${this.formField.name}_items": []`
    }
  },
  watch: {
    formElement: {
      immediate: true,
      handler (val) {
        // Put the control html onto the formField
        this.formField.formElement = val
      }
    },
    jsonDefault: {
      immediate: true,
      handler (val) {
        this.formField.jsonDefault = val
      }
    }
  }
}
