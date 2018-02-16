<template>
  <draggable v-model="editor.formFields">
    <div v-for="(field, index) in editor.formFields" 
        :key="field.key" 
        v-bind:class="{ selected: field.selected }" 
        tabindex="0" 
        class="editor-field"
        v-on:focus="editor.clearSelected(); field.selected = true">
      <div class="editor-buttons">
        <span class="btn btn-sm" role="button"><i class="fas fa-arrows-alt"></i></span>
        <span v-on:click="moveUp(index)" class="btn btn-sm" role="button" aria-label="remove"><i class="fas fa-arrow-up"></i></span>
        <span v-on:click="moveDown(index)" class="btn btn-sm" role="button" aria-label="remove"><i class="fas fa-arrow-down"></i></span>
        <span v-on:click="deleteItem(index)" class="btn btn-sm" role="button" aria-label="remove"><i class="fas fa-times"></i></span>
      </div>
      <div class="editor-form-element" v-html="field.formElement"></div>
    </div>
  </draggable>
</template>

<script>
// Moved the script bit into it's own FieldsEditorScript.js - just so the debugger will attach
import FieldsEditorScript from '@/components/FieldsEditorScript'
export default FieldsEditorScript
</script>
