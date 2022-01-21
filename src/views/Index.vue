<template>
    <div>
        <img class="w-16 h-16" :src="logo" alt="Vue Logo" />
        <div index="isCollapse" @click="menu.isCollapse = !menu.isCollapse">
            <el-icon>
                <i-ant-design:menu-unfold-outlined v-if="menu.isCollapse" />
                <i-ant-design:menu-fold-outlined v-else />
            </el-icon>
            <span>{{ menu.isCollapse ? '展开' : '收起' }}</span>
        </div>
        <div class="i-ph-anchor-simple-thin" />
        <button class="i-carbon-sun dark:i-carbon-moon" />
        <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
        <div>
            {{ randomName }}
        </div>
        <div>
            {{ randomEmail }}
        </div>
        <div>
            {{ randomCard }}
        </div>
    </div>
</template>

<script setup lang="ts">
import logo from '../assets/logo.png'
import faker from '@faker-js/faker'

import { useMenuStore } from '@/stores/menu'

const menu = useMenuStore()

const randomName = faker.name.findName() // Rowan Nikolaus
const randomEmail = faker.internet.email() // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard() // An object representing a random contact card containing many properties

</script>
