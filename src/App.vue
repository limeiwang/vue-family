<template>
    <main v-if="state.showMenu" h-full>
        <Header />
        <el-container h-full>
            <el-menu collapse router>
                <el-menu-item index="/dashboard">
                    <el-icon><dashicons:dashboard /></el-icon>
                    <template #title>仪表盘</template>
                </el-menu-item>
                <el-menu-item index="1">
                    <el-icon><ri-article-line /></el-icon>
                    <template #title>one</template>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon><setting /></el-icon>
                    <template #title>tow</template>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon><setting /></el-icon>
                    <template #title>three</template>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <template #title>four</template>
                </el-menu-item>
                <el-menu-item index="5">
                    <el-icon><setting /></el-icon>
                    <template #title>admin</template>
                </el-menu-item>
            </el-menu>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </main>
    <main v-else>
        <router-view></router-view>
    </main>
</template>

<script setup lang="ts">
import { onUnmounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Setting, Edit } from '@element-plus/icons-vue'
import Header from '@/components/Header.vue'
// import { localGet } from '@/utils'

const noMenu = ['/login']
const router = useRouter()
const state = reactive({
    showMenu: true,
    currentPath: '/dashboard',
})

const unwatch = router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        // 如果路径是 /login 则正常执行
        next()
    } else {
        // 如果不是 /login，判断是否有 token
        // eslint-disable-next-line no-lonely-if
        // if (!localGet('token')) {
        //     // 如果没有，则跳至登录页面
        //     next({ path: '/login' })
        // } else {
        //     // 否则继续执行
        next()
        // }
    }
    state.showMenu = !noMenu.includes(to.path)
    state.currentPath = to.path

    onUnmounted(() => {
        unwatch()
    })
})
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
