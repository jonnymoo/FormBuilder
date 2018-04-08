<!-- The main page that contains the whole form builder editor -->
<template>
<div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Form Builder</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <div>
        <input type="file" id="input" v-on:change="load( $event.target.files.length > 0 ? $event.target.files[0] : null)">
      </div>
      <div>
        <button class="btn btn-outline-success" v-on:click="save('download.txt')" type="submit">Download</button>
      </div>
    </div>
  </nav>
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
          <FieldProperties :formFields="formFields" :editor="this" :modelName="'FormFields'" :model="fieldsJson"></FieldProperties>
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
  <!-- A monaco editor needs to have chance to load before we load anything else, otherwise you'll find you load json stuff doesn't initialise all
       the condition editors properly -->
  <div class="row">
    <div class="col">
      <monaco-editor
        ref="editor"
        class="invisible"
        language="javascript"
        placeholder="Loading please wait">
      </monaco-editor>
    </div>
  </div>
</div>
</template>

<script>
// Moved the script bit into it's own EditorScript.js - just so the debugger will attach
import EditorScript from '@/components/EditorScript'
export default EditorScript
</script>
