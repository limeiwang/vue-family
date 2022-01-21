<template>
    <el-aside :style="{width:collpaseWidth}" border-r border-gray-300>
        <!--左侧导航栏-->
        <el-menu :collapse="isCollapse" router>
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
            <!-- <el-menu-item index="isCollapse" @click="isCollapse = !isCollapse">
                        <el-icon>
                            <i-ant-design:menu-unfold-outlined v-if="isCollapse" />
                            <i-ant-design:menu-fold-outlined v-else />
                        </el-icon>
                        <template #title>{{ isCollapse ? '展开' : '收起' }}</template>
                    </el-menu-item> -->
        </el-menu>
    </el-aside>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

const isCollapse = reactive(true) // 决定左侧导航栏是否展开

const collpaseWidth = computed(() => (isCollapse ? '65px' : '200px'))

</script>

<style>
.el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
}
</style>
