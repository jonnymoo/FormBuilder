<!-- The properties form for a start element -->
<template>
  <form>
    <div class="form-group">
      <label class="control-label">Header Label</label>
      <input class="form-control" type="text" v-model="formField.label"/>
    </div>
    <div class="form-group">
      <label class="control-label">Repeating Section Name</label>
      <input class="form-control" type="text" v-model="formField.name"/>
    </div>
    <div class="form-group">
      <label class="control-label">Add Text</label>
      <input class="form-control" type="text" v-model="formField.addButtonText"/>
    </div>
    <div class="form-group">
      <label class="control-label">Remove Text</label>
      <input class="form-control" type="text" v-model="formField.removeButtonText"/>
    </div>
  </form>
</template>

<script>
import RepeatingSectionScript from '@/components/form-fields/RepeatingSectionScript'
export default RepeatingSectionScript
</script>
