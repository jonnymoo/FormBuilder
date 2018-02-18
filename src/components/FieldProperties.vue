<!-- Field properties view - add new ones in here and put a vue file into components / form-fields -->
<template>
<div>
    <div v-for="field in formFields" :key="field.key" v-if="field.selected">
        <TextInput v-if="field.type==='TextInput'" :formField="field"></TextInput>
        <TextArea v-if="field.type==='TextArea'" :formField="field"></TextArea>
        <MarkDown v-if="field.type==='MarkDown'" :formField="field"></MarkDown>
    </div>
</div>
</template>

<script>
import TextInput from '@/components/form-fields/TextInput'
import TextArea from '@/components/form-fields/TextArea'
import MarkDown from '@/components/form-fields/MarkDown'

export default {
  components: {
    TextInput,
    TextArea,
    MarkDown
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
