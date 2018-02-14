<template>
<form>
    <div v-for="field in formFields" :key="field.key" v-bind:class="{ selected: field.selected }" tabindex="0" @focus="field.selected = true">
       {{ field.formElement }}
    </div>
</form>
</template>

<script>

export default {
  components: {
  },
  name: 'FieldsEditor',
  props: ['formFields'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
