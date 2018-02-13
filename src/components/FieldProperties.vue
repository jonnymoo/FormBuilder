<template>
<ul>
    <li v-for="field in formFields" :key="field.key">
    {{ field.key }} - {{ field.type }}
    </li>
</ul>
</template>

<script>
export default {
  name: 'FieldProperties',
  props: ['formFields'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
