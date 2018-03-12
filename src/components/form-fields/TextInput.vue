<!-- The properties form for a text input -->
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
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" v-model="formField.required"/>
      <label class="form-check-label" for="exampleCheck1">Required</label>
    </div>
    <div class="form-group">
      <label class="control-label">Validation pattern</label>
      <input class="form-control" type="text" v-model="formField.validationPattern"/>
    </div>
    <div class="form-group">
      <label class="control-label">Validation message</label>
      <input class="form-control" type="text" v-model="formField.validationMessage"/>
    </div>
    <div class="form-group">
      <label class="control-label">Help text</label>
      <input class="form-control" type="text" v-model="formField.help"/>
    </div>
    <div class="form-group">
      <label class="control-label">Prepend text</label>
      <input class="form-control" type="text" v-model="formField.prepend"/>
    </div>
    <div class="form-group">
      <label class="control-label">Append text</label>
      <input class="form-control" type="text" v-model="formField.append"/>
    </div>
  </form>
</template>

<script>
import TextInputScript from '@/components/form-fields/TextInputScript'
export default TextInputScript
</script>
