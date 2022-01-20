<template>
    <div>
        <img class="w-16 h-16" :src="logo" alt="Vue Logo" />
        this is dashboard page
        <ri-article-line />
        <div class="i-ph-anchor-simple-thin" />
        <button class="i-carbon-sun dark:i-carbon-moon" />
        <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    </div>
</template>

<script setup lang="ts">
import logo from '../assets/logo.png'
</script>
