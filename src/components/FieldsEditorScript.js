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
    deleteItem: function (index) {
      this.editor.formFields.splice(index,1)
    },
    moveUp: function (index) {
      var item = this.editor.formFields[index]
      this.editor.formFields.splice(index, 1)
      this.editor.formFields.splice(index - 1,0,item)
    },
    moveDown: function (index) {
      var item = this.editor.formFields[index]  
      this.editor.formFields.splice(index, 1)
      this.editor.formFields.splice(index + 1, 0, item)
    }
  }
}
