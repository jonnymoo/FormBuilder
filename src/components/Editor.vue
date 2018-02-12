<template>
<div>
  <h1>Form Editor</h1>
  <button v-on:click="textInput">Text Input</button>
  <button :click="textArea">Text Area</button>
</div>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    textInput: function() {
      alert(this.msg)
    }
  }
}
</script>
