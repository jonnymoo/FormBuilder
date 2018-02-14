<template>
<ul>
    <li v-for="field in formFields" :key="field.key">
        <TextInput v-if="field.type==='TextInput'" :formField="field"></TextInput>
        <TextArea v-if="field.type==='TextArea'" :formField="field"></TextArea>
    </li>
</ul>
</template>

<script>
import TextInput from '@/components/form-fields/TextInput'
import TextArea from '@/components/form-fields/TextArea'

export default {
  components: {
    TextInput,
    TextArea
  },
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
