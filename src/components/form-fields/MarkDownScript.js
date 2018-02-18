import marked from 'marked'

export default {
  name: 'TextInput',
  props: ['formField', 'editor'],
  computed: {
    formElement: function () {
      // Returns the html required for a text input control
      return marked(this.formField.content || '')
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
