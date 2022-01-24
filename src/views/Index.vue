<template>
    <div>
        <img class="w-16 h-16" :src="logo" alt="Vue Logo" />
        <div index="isCollapse" @click="menu.isCollapse = !menu.isCollapse">
            <i-ant-design:menu-unfold-outlined v-if="menu.isCollapse" />
            <i-ant-design:menu-fold-outlined v-else />
            <span>{{ menu.isCollapse ? '展开' : '收起' }}</span>
        </div>
        <div class="i-ph-anchor-simple-thin" />
        <button class="i-carbon-sun dark:i-carbon-moon" />
        <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
        <ConfirmBox />
    </div>
</template>

<script setup lang="ts">
import logo from '../assets/logo.png'
import { useMenuStore } from '@/stores/menu'
import ConfirmBox from '@/components/ConfirmBox.vue'

const menu = useMenuStore()

</script>
