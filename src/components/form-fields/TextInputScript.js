import htmlEncode from '@/util/HtmlEncode'

export default {
  name: 'TextInput',
  props: ['formField', 'editor'],
  computed: {
    formElement: function () {
      // Returns the html required for a text input control
      return `<div class="form-group">
        <label for="${htmlEncode(this.formField.name)}">${htmlEncode(this.formField.label)}</label> 
        <input type="text" id="${htmlEncode(this.formField.name)}" 
               name="${htmlEncode(this.formField.name)}" 
               placeholder="${htmlEncode(this.formField.placeHolder)}" 
               class="form-control"` +
               (this.formField.required ? ' required' : '') +
               (this.formField.pattern ? ` pattern="${htmlEncode(this.formField.pattern)}"` : '') +
               (this.formField.title ? ` title="${htmlEncode(this.formField.title)}"` : '') +
               `/> 
      </div>`
    }
  },
  watch: {
    formElement: {
      immediate: true,
      handler (val) {
        // Put the control html onto the formField
        this.formField.formElement = val
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
