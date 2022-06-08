<template>
    <el-container
        v-if="state.showMenu"
        class="h-full !flex !flex-col"
    >
        <Header />
        <el-main class="h-full !flex !flex-row">
            <Menu />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-main>
    </el-container>
    <router-view v-else></router-view>
</template>

<script setup lang="ts">
import { onUnmounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Header from '/@/components/Header.vue'
import Menu from '/@/components/Menu.vue'
// import { localGet } from '/@/utils'

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
})

onUnmounted(() => {
    unwatch()
})
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}

.el-header,
.el-main {
    padding: 0;
}

.el-menu {
    border: none;

    /* height: 100%;
    width: 100% !important; */
}
</style>
