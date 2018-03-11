<!-- Field properties view - add new ones in here and put a vue file into components / form-fields -->
<template>
<div >
    <div v-for="field in formFields" :key="field.key" v-show="field.selected" class="fieldProperty">
      <TextInput v-if="field.type==='TextInput'" :formField="field" :editor="editor" :modelName="modelName" :model="model"></TextInput>
      <TextArea v-if="field.type==='TextArea'" :formField="field" :editor="editor" :modelName="modelName" :model="model"></TextArea>
      <MarkDown v-if="field.type==='MarkDown'" :formField="field" :editor="editor" :modelName="modelName" :model="model"></MarkDown>
      <Condition v-if="field.type==='Condition'" :formField="field" :editor="editor" :modelName="modelName" :model="model"></Condition>
      <RepeatingSection v-if="field.type==='RepeatingSection'" :formField="field" :editor="editor" :modelName="modelName" :model="model"></RepeatingSection>
    </div>
    <FieldProperties v-for="field in formFields" :key="'field-'+field.key" v-if="field.formFields !== null" :formFields="field.formFields" :editor="editor" :modelName="field.name ? field.name : modelName" :model="'{'+editor.fieldsJson(field.formFields)+'}'"></FieldProperties>
</div>
</template>

<script>
import TextInput from '@/components/form-fields/TextInput'
import TextArea from '@/components/form-fields/TextArea'
import MarkDown from '@/components/form-fields/MarkDown'
import Condition from '@/components/form-fields/Condition'
import RepeatingSection from '@/components/form-fields/RepeatingSection'

export default {
  components: {
    TextInput,
    TextArea,
    MarkDown,
    Condition,
    RepeatingSection
  },
  name: 'FieldProperties',
  props: ['formFields', 'editor', 'modelName', 'model'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
