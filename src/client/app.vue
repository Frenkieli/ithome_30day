<template>
  <div class="container">
    hello {{state.message}}
    <router-view
      class="main_container"
    />
    hello {{ vuexName }}
    <br>
    <router-link :to="{name: 'home'}">home</router-link>
    <br>
    <router-link :to="{name: 'addNumber'}">addNumber</router-link>
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
body {
  .container {
    font-size:  20px 400;
  }
}
</style>