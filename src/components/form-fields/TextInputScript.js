import htmlEncode from '@/util/HtmlEncode'

export default {
  name: 'TextInput',
  props: ['formField', 'editor'],
  computed: {
    formElement: function () {
      return `<div class="form-group">
      <label>${htmlEncode(this.formField.label)} 
      <input id="text" name="${htmlEncode(this.formField.name)}" placeholder="${htmlEncode(this.formField.placeHolder)}" type="text" class="form-control"> 
      </label>
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
