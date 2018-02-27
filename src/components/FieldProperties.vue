<!-- Field properties view - add new ones in here and put a vue file into components / form-fields -->
<template>
<div>
    <div v-for="field in formFields" :key="field.key" v-if="field.selected">
      <TextInput v-if="field.type==='TextInput'" :formField="field" :editor="editor"></TextInput>
      <TextArea v-if="field.type==='TextArea'" :formField="field" :editor="editor"></TextArea>
      <MarkDown v-if="field.type==='MarkDown'" :formField="field" :editor="editor"></MarkDown>
      <StartCondition v-if="field.type==='StartCondition'" :formField="field" :editor="editor"></StartCondition>
      <EndCondition v-if="field.type==='EndCondition'" :formField="field" :editor="editor"></EndCondition>
    </div>
</div>
</template>

<script>
import TextInput from '@/components/form-fields/TextInput'
import TextArea from '@/components/form-fields/TextArea'
import MarkDown from '@/components/form-fields/MarkDown'
import StartCondition from '@/components/form-fields/StartCondition'
import EndCondition from '@/components/form-fields/EndCondition'

export default {
  components: {
    TextInput,
    TextArea,
    MarkDown,
    StartCondition,
    EndCondition
  },
  name: 'FieldProperties',
  props: ['formFields', 'editor'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
