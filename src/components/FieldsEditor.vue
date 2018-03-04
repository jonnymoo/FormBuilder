<!-- Fields editor - draggable ordering and removing fields done here -->
<template>
  <draggable v-model="form.formFields" class="dragArea" :options="{group:'formFields'}">
    <div v-for="(field, index) in form.formFields"
        :key="field.key"
        v-bind:class="{ selected: field.selected }"
        tabindex="0"
        class="editor-field"
        v-on:focus="editor.selectField(field.key)">
      <div class="editor-buttons">
        <span class="btn btn-sm" role="button"><i class="fas fa-arrows-alt"></i></span>
        <span v-on:click="moveUp(index)" class="btn btn-sm" role="button" aria-label="move up"><i class="fas fa-arrow-up"></i></span>
        <span v-on:click="moveDown(index)" class="btn btn-sm" role="button" aria-label="move down"><i class="fas fa-arrow-down"></i></span>
        <span v-on:click="deleteItem(index)" class="btn btn-sm" role="button" aria-label="remove"><i class="fas fa-times"></i></span>
      </div>
      <div v-if="field.formFields === null" class="editor-form-element" v-html="field.formElement"></div>
      <div v-else class="editor-form-element">
          <input type="text" class="form-control" aria-label="field description" v-model="field.desc" />
          <FieldsEditor :editor="editor" :form="field"></FieldsEditor>
      </div>
    </div>
  </draggable>
</template>

<script>
// Moved the script bit into it's own FieldsEditorScript.js - just so the debugger will attach
import FieldsEditorScript from '@/components/FieldsEditorScript'
export default FieldsEditorScript
</script>
