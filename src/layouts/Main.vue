<template>
   <section class="app-mian-height">
    <!-- <router-view v-slot="{ Component, route }" >
      <transition appear name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view> -->
    <router-view></router-view>
  </section>
</template>

<style scoped lang="scss">
.app-mian-height {
  min-height:calc($base-app-main-height - 40px);
  position: relative;
  background-color: inherit;
}
</style>