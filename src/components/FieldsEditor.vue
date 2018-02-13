<template>
<ul>
    <li v-for="field in formFields" :key="field.key">
       {{ field.key }}
    </li>
</ul>
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
