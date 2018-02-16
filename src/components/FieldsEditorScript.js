import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  name: 'FieldsEditor',
  props: ['editor'],
  data () {
    return {
    }
  },
  methods: {
    // Delete item at the given index    
    deleteItem: function (index) {
      this.editor.formFields.splice(index, 1)
    },
    // Move an item up the form one place
    moveUp: function (index) {
      var item = this.editor.formFields[index]
      this.editor.formFields.splice(index, 1)
      this.editor.formFields.splice(index - 1, 0, item)
    },
    // Move an item down the form one place
    moveDown: function (index) {
      var item = this.editor.formFields[index]
      this.editor.formFields.splice(index, 1)
      this.editor.formFields.splice(index + 1, 0, item)
    }
  }
}
