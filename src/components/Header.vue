<template>
    <header
        w-full
        h-16
        flex
        justify-center
        items-center
        bg-gradient-to-r
        from-green-400
        to-blue-500
    >
        <h1>
            Hello Vite, Vue-next, Unocss, {{ customName }}
        </h1>
    </header>
</template>

<script setup>
import { useUserStore } from '/@/stores/user'

const user = useUserStore()

const customName = 'Now!'

console.log(user.name)

</script>
