<template>
<form>
    <div v-for="field in editor.formFields" :key="field.key" v-bind:class="{ selected: field.selected }" tabindex="0" v-on:focus="editor.clearSelected(); field.selected = true" v-html="field.formElement">
    </div>
</form>
</template>

<script>

export default {
  components: {
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
