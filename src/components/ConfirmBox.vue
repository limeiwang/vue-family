<template>
    <ConfirmInput @sumbit="sumbit" @cancel="cancel"></ConfirmInput>
    <div pl-10>{{ value }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

import ConfirmInput from '../toolkits/ConfirmInput.vue'

let value = ref('hello input.')

const sumbit = event => {
    value.value = event.value
}
const cancel = () => {
    value.value = 'For man is man and master of his fate.'
}
</script>
