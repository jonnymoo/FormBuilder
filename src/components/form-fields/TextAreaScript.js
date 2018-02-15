import htmlEncode from '@/util/HtmlEncode'
import defaultValue from '@/util/DefaultValue'

export default {
  name: 'TextArea',
  props: ['formField', 'editor'],
  computed: {
    formElement: function () {
      if (this.formField !== undefined){
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
    }
  },
  watch: {
    formElement: {
      immediate: true,
      handler (val) {
        if (this.formField !== undefined) {
          // Defaults
          this.formField.cols = defaultValue(this.formField.cols, 40)
          this.formField.rows = defaultValue(this.formField.rows, 5)

          // Required for return of form element
          this.formField.formElement = val
        }
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
