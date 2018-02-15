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
import TextInputScript from '@/components/form-fields/TextInputScript'
export default TextInputScript
</script>
