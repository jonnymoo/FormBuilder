<!-- Preview the form - this doesn't work in IE (or edge ... yet) - because of srcdoc - see https://caniuse.com/#feat=iframe-srcdoc -->
<template>
  <div class="container-fluid">
    <div role="tablist" aria-multiselectable="true">
      <div class="card">
        <div class="card-header" role="tab" id="HeadingPreview">
          <h5 class="mb-0">
            <a v-bind:class="{ collapsed: !previewVisible }"
              href="javascript:void(0)"
              v-bind:aria-expanded="previewVisible"
              aria-controls="collapseTwo"
              v-on:click="previewVisible = !previewVisible">
              Preview
            </a>
          </h5>
        </div>
        <div id="Preview"
            v-bind:class="{ show: previewVisible }"
            class="collapse"
            role="tabpanel"
            aria-labelledby="HeadingPreview">
          <div class="card-block">
            <iframe :srcdoc="preview">
            </iframe>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="HeadingPreviewSettings">
          <h5 class="mb-0">
            <a v-bind:class="{ collapsed: !settingsVisible }"
               href="javascript:void(0)"
               v-bind:aria-expanded="settingsVisible"
               aria-controls="PreviewSettings"
               v-on:click="settingsVisible = !settingsVisible">
              Preview settings
            </a>
          </h5>
        </div>
        <div id="PreviewSettings"
            v-bind:class="{ show: settingsVisible }"
            class="collapse"
            role="tabpanel"
            aria-labelledby="PreviewSettings">
          <div class="card-block">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" v-model="readOnly"/>
                    <label class="form-check-label" for="exampleCheck1">Read Only</label>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Input JSON</label>
                    <a v-on:click="setDefault" href="javascript:void(0)">Set default</a>
                    <codemirror v-model="fieldsJson" v-bind:options="cmOptions"></codemirror >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="HeadingHTMLSource">
          <h5 class="mb-0">
            <a v-bind:class="{ collapsed: !HTMLSourceVisible }"
              href="javascript:void(0)"
              v-bind:aria-expanded="HTMLSourceVisible"
              aria-controls="HTMLSource"
              v-on:click="HTMLSourceVisible = !HTMLSourceVisible">
              HTML Source
            </a>
          </h5>
        </div>
        <div id="HTMLSource"
            v-bind:class="{ show: HTMLSourceVisible }"
            class="collapse"
            role="tabpanel"
            aria-labelledby="HeadingHTMLSource">
          <codemirror v-model="preview" v-bind:options="cmOptionshtml"></codemirror>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Moved the script bit into it's own FormPreviewScript.js - just so the debugger will attach
import FormPreviewScript from '@/components/FormPreviewScript'
export default FormPreviewScript
</script>
