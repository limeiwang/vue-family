<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div>{{ count }}</div>
    <div
        w:bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        w:text="sm white"
        w:font="mono light"
        w:p="y-2 x-4"
        w:border="2 rounded blue-200"
        @click="count++"
    >
        dianji
    </div>
</template>

<style>
</style>
