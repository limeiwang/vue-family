<template>
    <div flex>
        <input
            v-model="value"
            placeholder="请输入"
            w-80
            h-8
            rounded
            text-indent-3
            text-gray-700
            border
        >
        <div
            flex
            items-center
            p-2
            class="svg-btn"
            @click="sumbit"
        >
            <i-dashicons:yes />
        </div>
        <div
            flex
            items-center
            p-2
            class="svg-btn"
            @click="cancel"
        >
            <i-dashicons:no-alt />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('hello input.')

const emit = defineEmits<{
  (e: 'sumbit', value: string): void
  (e: 'cancel'): void
}>()

const sumbit = event => {
    emit('sumbit', value)
}
const cancel = event => {
    emit('cancel')
}
</script>