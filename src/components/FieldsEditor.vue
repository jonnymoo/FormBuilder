<template>
<form>
  <draggable v-model="editor.formFields">
    <div v-for="field in editor.formFields" :key="field.key" v-bind:class="{ selected: field.selected }" tabindex="0" v-on:focus="editor.clearSelected(); field.selected = true" v-html="field.formElement">
    </div>
  </draggable>
</form>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  name: 'FieldsEditor',
  props: ['editor'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
