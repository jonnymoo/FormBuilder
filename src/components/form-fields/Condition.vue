<!-- The properties form for a condition -->
<template>
  <form>
    <div class="form-group">
      <label class="control-label">JavaScript Condition</label>
      <monaco-editor
        ref="editor"
        class="editor"
        v-model="formField.condition"
        language="javascript"
        placeholder="Loading - please wait"
        :aria-describedby="this.formField.key+'_help'"
        v-on:focus="monacoFocus">
      </monaco-editor>
      <small :id="this.formField.key+'_help'" class="form-text text-muted">
        Examples <br/>
        fields.MyField === "test" <br/>
        address.postCode.startsWith("LS28") <br/>
        The last one assumes you are in a repeating section called "address"
      </small>
    </div>
  </form>
</template>

<script src="monaco-editor/min/vs/loader.js"></script>
<script>
import ConditionScript from '@/components/form-fields/ConditionScript'
export default ConditionScript
</script>
