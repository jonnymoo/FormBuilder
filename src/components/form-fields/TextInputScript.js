import htmlEncode from '@/util/HtmlEncode'

export default {
  name: 'TextInput',
  props: ['formField', 'editor'],
  computed: {
    formElement: function () {
      return `<div class="form-group">
        <label for="${htmlEncode(this.formField.name)}">${htmlEncode(this.formField.label)}</label> 
        <input type="text" id="${htmlEncode(this.formField.name)}" 
               name="${htmlEncode(this.formField.name)}" 
               placeholder="${htmlEncode(this.formField.placeHolder)}" 
               class="form-control" /> 
      </div>`
    }
  },
  watch: {
    formElement: {
      immediate: true,
      handler (val) {
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
