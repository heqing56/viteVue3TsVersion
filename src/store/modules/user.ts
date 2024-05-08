
import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";
import { LoginState, tokenState, userState } from "./types/user";

export const useLoginStore = defineStore(
  "loginStore",
  () => {
    const state: LoginState = reactive({
      userName: '',
      password: '',
    });
    return {
      ...toRefs(state),
    };
  },
  {
    persist: true, //持久化
  }
);

export const useTokenStore = defineStore(
  "tokenStore",
  () => {
    const state: tokenState = reactive({
      token: '',
    });
    return {
      ...toRefs(state),
    };
  },
  {
    persist: true, //持久化
  }
);

export const useUsertore = defineStore(
  "userStore",
  () => {
    const state: userState = reactive({
      userId: "",
      name: "",
      avatar: "",
      btns:[]
    });
    return {
      ...toRefs(state),
    };
  },
  {
    persist: true, //持久化
  }
);
