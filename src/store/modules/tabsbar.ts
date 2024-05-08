import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";
import { TabsState } from "./types/tabsbar";
export const useTabsBarStore = defineStore(
  "tabsBarStore",
  () => {
    const state: TabsState = reactive({
        activeTabsValue:'/index',
        cachedViews:[],
        visitedViews: [],
        // 处理之后侧边栏菜单列表
      authMenuList:[],
    });
    return {
      ...toRefs(state),
    };
  },
  {
    persist: true, //持久化
  }
);


