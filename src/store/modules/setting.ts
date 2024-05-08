
import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";
import { NavState } from "./types/setting";
import { DEFAULT_PRIMARY } from '@/config/config'
export const useSettingStore = defineStore(
  "settingStore",
  () => {
    const state: NavState = reactive({
        collapse: false,
        refresh: false,
        themeConfig: {
          primary: DEFAULT_PRIMARY,
          isDark: false,
        },
    });
    return {
      ...toRefs(state),
    };
  },
  {
    persist: true, //持久化
  }
);


