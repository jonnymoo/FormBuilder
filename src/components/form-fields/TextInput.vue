<template>
  <form>
    <div class="form-group">
      <label class="control-label">Label</label>
      <input class="form-control" type="text" v-model="formField.label"/>
    </div>
    <div class="form-group">
      <label class="control-label">Name</label>
      <input class="form-control" type="text" v-model="formField.name"/>
    </div>
    <div class="form-group">
      <label class="control-label">Placeholder</label>
      <input class="form-control" type="text" v-model="formField.placeHolder"/>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['formField'],
  computed: {
    formElement: function () {
      return 'label' + this.formField.label
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
</script>
