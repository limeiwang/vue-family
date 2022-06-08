<template>
    <el-aside :style="{width:collpaseWidth}" border-r border-gray-300>
        <!--左侧导航栏-->
        <el-menu :collapse="menu.isCollapse" router :collapse-transition="false">
            <el-menu-item index="/dashboard">
                <el-icon><i-dashicons:dashboard /></el-icon>
                <template #title>仪表盘</template>
            </el-menu-item>
            <el-menu-item index="1">
                <el-icon><i-ic:baseline-sell /></el-icon>
                <template #title>one</template>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon><i-ic:outline-sell /></el-icon>
                <template #title>tow</template>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon><i-bx:bxl-play-store /></el-icon>
                <template #title>three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon><i-ant-design:setting-outlined /></el-icon>
                <template #title>four</template>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMenuStore } from '/@/stores/menu'

const menu = useMenuStore()

const collpaseWidth = computed(() => (menu.isCollapse ? '65px' : '200px'))

</script>

<style>
.el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
}

.el-aside {
    background: $primary-color;
    transition: width .15s;
    -webkit-transition: width .15s;
    -moz-transition: width .15s;
    -o-transition: width .15s;
}
</style>
