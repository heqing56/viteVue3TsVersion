import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import pinia from './store/index'
import router from './router'
import '@/router/guardRouter'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
// 字体样式
import '@/assets/fonts/font.scss'
// 解决谷歌浏览器warning: Added non-passive event listener to a scroll-blocking ‘touchmove’ event. Consider marking event handler as ‘passive’ to make the page more responsive.
import 'default-passive-events' 

const app= createApp(App)
/** 导入全部Element-icon */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  
app.use(ElementPlus, {
    locale: zhCn,
  })
app.use(pinia)
app.use(router)
app.mount('#app')
