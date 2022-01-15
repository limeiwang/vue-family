<script setup lang="ts">
// import { ref } from 'vue'
import { Location, Menu, Document } from '@element-plus/icons-vue'

// const isCollapse = ref(true)
// const handleOpen = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
</script>

<template>
    <el-container>
        <el-header class="flex items-center">
            <div class="flex">
                <img src="" alt="image">
                <span>vue3 family</span>
            </div>
            <div class="flex-auto text-right">
                <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
            </div>
        </el-header>
        <el-container>
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><Location /></el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group>
                        <template #title><span>Group One</span></template>
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title><span>item four</span></template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><Menu /></el-icon>
                    <template #title>Navigator Two</template>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon><Document /></el-icon>
                    <template #title>Navigator Three</template>
                </el-menu-item>
            </el-menu>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<style>
html,
body,
#app {
    width: 100%;
    height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
