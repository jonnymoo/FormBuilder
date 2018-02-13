<template>
  <form>
    <div class="form-group">
      <label class="control-label">Label</label>
      <input class="form-control" type="text" v-bind="label"/>
    </div>
    <div class="form-group">
      <label class="control-label">Name</label>
      <input class="form-control" type="text" v-bind="name"/>
    </div>
    <div class="form-group">
      <label class="control-label">Placeholder</label>
      <input class="form-control" type="text" v-bind="placeHolder"/>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['formField'],
  data () {
    return {
      label: null,
      name: null,
      placeHolder: null
    }
  },
  methods: {
  }
}
</script>
