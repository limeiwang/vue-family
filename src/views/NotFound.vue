<template>
    <div>
        <h1 class="text-5xl font-600 text-center mt-20">Page 404 Not Found</h1>
        <div class="mt-10 flex justify-center">
            <el-button>
                刷新页面
            </el-button>
            <el-button 
                @click="$router.go(-1)"
            >
                返回首页
            </el-button>
        </div>
    </div>
</template>