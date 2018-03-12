import htmlEncode from '@/util/HtmlEncode'

export default {
  name: 'TextArea',
  props: ['formField', 'editor', 'modelName', 'model'],
  computed: {
    formElement: function () {
      // Returns the html required for a text area control
      var ret = `<div class="form-group">
      <label for="${htmlEncode(this.formField.name)}">${htmlEncode(this.formField.label)}</label>
      <div class="input-group">`
      if (this.formField.prepend) {
        ret = ret + `
        <div class="input-group-prepend"><span class="input-group-text">${htmlEncode(this.formField.prepend)}</span></div>`
      }
      ret = ret + `
          <textarea id="${htmlEncode(this.formField.name)}" 
                name="${htmlEncode(this.formField.name)}" 
                placeholder="${htmlEncode(this.formField.placeHolder)}"
                cols="${htmlEncode(this.formField.cols)}"
                rows="${htmlEncode(this.formField.rows)}"
                class="form-control" ` +
               (this.formField.name ? ` v-model="${this.modelName}.${htmlEncode(this.formField.name)}" ` : '') +
               `v-bind:readonly="form.readOnly"` +
                (this.formField.required ? ' required' : '') +
                (this.formField.help ? ` aria-describedby="${htmlEncode(this.formField.key)}_help"` : '') +
                `></textarea>`
      if (this.formField.append) {
        ret = ret + `
          <div class="input-group-append"><span class="input-group-text">${htmlEncode(this.formField.append)}</span></div>`
      }
      ret = ret + `
        </div>`
      if (this.formField.help) {
        ret = ret + `
        <small id="${htmlEncode(this.formField.key)}_help" class="form-text text-muted">${htmlEncode(this.formField.help)}</small>`
      }
      ret = ret + `
      </div>`
      return ret
    },
    jsonDefault: function () {
      return `"${this.formField.name}": ""`
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
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
