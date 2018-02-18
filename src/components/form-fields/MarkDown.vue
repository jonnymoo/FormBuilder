<!-- The properties form for a text input -->
<template>
  <form>
    <div class="form-group">
      <label class="control-label">Content</label>
      <textarea class="form-control" rows="80" v-model="formField.content"></textarea>
    </div>
  </form>
</template>

<script>
import MarkDownScript from '@/components/form-fields/MarkDownScript'
export default MarkDownScript
</script>
