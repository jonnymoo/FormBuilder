<!-- The properties form for a text area -->
<template>
  <form v-if="formField">
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
    <div class="form-group">
      <label class="control-label">Rows</label>
      <input class="form-control" type="number" v-model="formField.rows"/>
    </div>
    <div class="form-group">
      <label class="control-label">Columns</label>
      <input class="form-control" type="number" v-model="formField.cols"/>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" v-model="formField.required"/>
      <label class="form-check-label" for="exampleCheck1">Required</label>
    </div>
    <div class="form-group">
      <label class="control-label">Validation pattern</label>
      <input class="form-control" type="text" v-model="formField.pattern"/>
    </div>
    <div class="form-group">
      <label class="control-label">Validation message</label>
      <input class="form-control" type="text" v-model="formField.title"/>
    </div>
  </form>
</template>

<script>
import TextAreaScript from '@/components/form-fields/TextAreaScript'
export default TextAreaScript
</script>
