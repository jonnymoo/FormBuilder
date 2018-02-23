<!-- The properties form for a start element -->
<template>
  <form>
    <div class="form-group">
      <label class="control-label">Condition</label>
      <monaco-editor
        ref="editor"
        class="editor"
        v-model="formField.condition"
        language="javascript"
        placeholder="Loading - please wait"
        v-on:editorMount="monacoMounted">
      </monaco-editor>
    </div>
  </form>
</template>

<script src="monaco-editor/min/vs/loader.js"></script>
<script>
import StartConditionScript from '@/components/form-fields/StartConditionScript'
export default StartConditionScript
</script>
