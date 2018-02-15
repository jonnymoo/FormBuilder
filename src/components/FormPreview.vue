<template>
<iframe :srcdoc="preview">
</iframe>
</template>

<script>
// Moved the script bit into it's own FormPreviewScript.js - just so the debugger will attach
import FormPreviewScript from '@/components/FormPreviewScript'
export default FormPreviewScript
</script>
