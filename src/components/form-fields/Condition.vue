<!-- The properties form for a condition -->
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
import ConditionScript from '@/components/form-fields/ConditionScript'
export default ConditionScript
</script>
