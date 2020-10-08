<template>
  <div class="container">
    <h1 class="container_title">
      hello {{state.message}}
    </h1>
    <router-view
      class="main_container"
    />
    <h2 class="container_subtitle">
      hello {{ vuexName }}
    </h2>
    <br>
    <router-link class="routerLink" :to="{name: 'home'}">home</router-link>
    <br>
    <router-link class="routerLink" :to="{name: 'addNumber'}">addNumber</router-link>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup () {
    const state = reactive({
      message: 'Vue3'
    })
    const store = useStore();
    const vuexName = computed(() => store.state.store);
    return {
      state,
      vuexName
    }
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;700&display=swap');
  body{
    font-family: 'Noto Sans TC', sans-serif;
  }
</style>
<style lang="scss" scoped>
.container {
  &_title{
    @include fontStyle('title');
  }
  &_subtitle{
    @include fontStyle('subtitle');
  }
  .routerLink{
    display: inline-block;
    padding: 2px;
    margin: 2px;
    border: 1px solid #000;
    text-decoration: none;
  }
}
</style>