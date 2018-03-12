<!-- The properties form for a start element -->
<template>
  <form>
    <div class="form-group">
      <label class="control-label"> Templated Header Label</label>
      <monaco-editor
        ref="editor"
        class="editor"
        style="min-height: 100px"
        v-model="formField.label"
        language="handlebars"
        placeholder="Loading - please wait"
        :aria-describedby="this.formField.key+'_help'"
        v-on:focus="monacoFocus">
      </monaco-editor>
      <small :id="this.formField.key+'_help'" class="form-text text-muted">
        See <a href="https://vuejs.org/v2/guide/syntax.html">"Mustache" syntax </a><br/>
        Use the repeating section name to access fields. E.g. <span v-pre>Beneficiary - {{ beneficiary.name }}</span>
      </small>
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
