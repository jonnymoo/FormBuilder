<!-- Preview the form - this doesn't work in IE (or edge ... yet) - because of srcdoc - see https://caniuse.com/#feat=iframe-srcdoc -->
<template>
<iframe :srcdoc="preview">
</iframe>
</template>

<script>
// Moved the script bit into it's own FormPreviewScript.js - just so the debugger will attach
import FormPreviewScript from '@/components/FormPreviewScript'
export default FormPreviewScript
</script>
