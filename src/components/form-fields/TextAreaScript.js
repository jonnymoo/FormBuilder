import htmlEncode from '@/util/HtmlEncode'

export default {
  name: 'TextArea',
  props: ['formField', 'editor'],
  computed: {
    formElement: function () {
      // Returns the html required for a text area control
      return `<div class="form-group">
      <label for="${htmlEncode(this.formField.name)}">${htmlEncode(this.formField.label)}</label>
      <textarea id="${htmlEncode(this.formField.name)}" 
                name="${htmlEncode(this.formField.name)}" 
                placeholder="${htmlEncode(this.formField.placeHolder)}"
                cols="${htmlEncode(this.formField.cols)}"
                rows="${htmlEncode(this.formField.rows)}"
                class="form-control"></textarea> 
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
