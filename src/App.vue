<template>
  <router-view></router-view>
</template>


<script setup lang="ts">
import { useTheme } from './hooks/useTheme'
// 初始化主题配置
const { initTheme } = useTheme()
initTheme()
console.log('%c 完成初始化','color:#f00')
</script>