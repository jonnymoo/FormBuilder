<template>
  <form>
    <div class="form-group">
      <label class="control-label">Label</label>
      <input class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label">Name</label>
      <input class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label">Placeholder</label>
      <input type="text" class="form-control"/>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TextArea',
  props: ['formField'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
