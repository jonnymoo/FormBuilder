import htmlEncode from '@/util/HtmlEncode'
export default {
  name: 'EndCondition',
  props: ['formField', 'editor'],
  computed: {
    formElement: function () {
      // Returns the html required for a text input control
      return `</template>`
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
