<!-- The main page that contains the whole form builder editor -->
<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-4">
      <ul class="nav nav-tabs" id="editorTab" role="tablist">
        <li class="nav-item">
          <a v-bind:class="{ active: formTabActive }"
            v-on:click="activateTab('form')"
            class="nav-link"
            id="form-tab"
            data-toggle="tab"
            href="javascript:void(0)"
            role="tab"
            aria-controls="form"
            v-bind:aria-selected="formTabActive">Form</a>
        </li>
        <li class="nav-item">
          <a v-bind:class="{ active: propertiesTabActive }"
          v-on:click="activateTab('properties')"
          class="nav-link"
          id="properties-tab"
          data-toggle="tab"
          href="javascript:void(0)"
          role="tab"
          aria-controls="properties"
          v-bind:aria-selected="propertiesTabActive">Properties</a>
        </li>
      </ul>
      <div class="tab-content" id="editorTabContent">
        <div v-bind:class="{ active: formTabActive, show: formTabActive }"
            class="tab-pane fade container-fluid"
            id="form"
            role="tabpanel"
            aria-labelledby="fields-tab">
          <div class="row"><div class="col-md-12">
            <div class="form-group field-type-buttons">
              <template v-for="fieldType in fieldTypes">
                <button v-if="fieldType.type"
                    v-bind:key="fieldType.type"
                    v-bind:id="fieldType.type"
                    class="btn"
                    v-on:click="addFormItem(fieldType)">{{fieldType.desc}}</button>
                <br v-else v-bind:key="fieldType.type"/>
              </template>
            </div>
          </div></div>
          <div class="row"><div class="col-md-12">
            <div class="form-group">
              <label for="submit-text">Submit button</label>
              <input class="form-control" id="submit-text" name="submit-text" v-model="submitText" />
            </div>
          </div></div>
        </div>
        <div v-bind:class="{ active: propertiesTabActive, show: propertiesTabActive }"
            class="tab-pane fade"
            id="properties"
            role="tabpanel"
            aria-labelledby="properties-tab">
          <FieldProperties :formFields="formFields" :editor="this"></FieldProperties>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <ul class="nav nav-tabs" id="previewTab" role="tablist">
        <li class="nav-item">
          <a v-bind:class="{ active: fieldsTabActive }"
            v-on:click="activateTab('fields')"
            class="nav-link"
            id="fields-editor-tab"
            data-toggle="tab"
            href="javascript:void(0)"
            role="tab"
            aria-controls="fields-editor"
            v-bind:aria-selected="fieldsTabActive">Editor</a>
        </li>
        <li class="nav-item">
          <a v-bind:class="{ active: previewTabActive }"
            v-on:click="activateTab('preview')"
            class="nav-link"
            id="preview-tab"
            data-toggle="tab"
            href="javascript:void(0)"
            role="tab"
            aria-controls="preview"
            v-bind:aria-selected="previewTabActive">Preview</a>
        </li>
      </ul>
      <div class="tab-content" id="previewTabContent">
        <div v-bind:class="{ active: fieldsTabActive, show: fieldsTabActive }"
            class="tab-pane fade"
            id="fields-editor"
            role="tabpanel"
            aria-labelledby="fields-editor-tab">
          <FieldsEditor :editor="this" :form="this"></FieldsEditor>
        </div>
        <div v-bind:class="{ active: previewTabActive, show: previewTabActive }"
            class="tab-pane fade"
            id="preview"
            role="tabpanel"
            aria-labelledby="preview-tab">
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
