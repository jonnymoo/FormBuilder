<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-4">
      <ul class="nav nav-tabs" id="editorTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="fields-tab" data-toggle="tab" href="#fields" role="tab" aria-controls="fields" aria-selected="true">Fields</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="properties-tab" data-toggle="tab" href="#properties" role="tab" aria-controls="properties" aria-selected="false">Properties</a>
        </li>
      </ul>
      <div class="tab-content" id="editorTabContent">
        <div class="tab-pane fade show active" id="fields" role="tabpanel" aria-labelledby="fields-tab">
          <button id="text-input" class="btn" v-on:click="addFormItem('TextInput')">Text Input</button>
          <button id="text-area" class="btn" v-on:click="addFormItem('TextArea')">Text Area</button>
        </div>
        <div class="tab-pane fade" id="properties" role="tabpanel" aria-labelledby="properties-tab">
          <FieldProperties :formFields="formFields" :editor="this"></FieldProperties>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <ul class="nav nav-tabs" id="previewTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="fields-editor-tab" data-toggle="tab" href="#fields-editor" role="tab" aria-controls="fields-editor" aria-selected="true">Editor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="preview-tab" data-toggle="tab" href="#preview" role="tab" aria-controls="preview" aria-selected="false">Preview</a>
        </li>
      </ul>
      <div class="tab-content" id="previewTabContent">
        <div class="tab-pane fade show active" id="fields-editor" role="tabpanel" aria-labelledby="fields-editor-tab">
          <FieldsEditor :editor="this"></FieldsEditor>
        </div>
        <div class="tab-pane fade" id="preview" role="tabpanel" aria-labelledby="preview-tab">
          <FormPreview :editor="this"></FormPreview>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// Moved the script bit into it's own EditorScript.js - just so the debugger will attach
import EditorScript from '@/components/EditorScript'
export default EditorScript
</script>
