export default {
  name: 'RepeatingSection',
  props: ['formField', 'editor'],
  computed: {
    formElement: function () {
      // Returns the html required for a repeating section
      var ret = `<div id="accordion">
      </div>`
      return ret
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
  }
}
