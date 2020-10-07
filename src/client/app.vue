<template>
  <div class="container">
    hello {{state.message}}
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup () {
    const state = reactive({
      message: 'Vue3'
    })
    return {
      state,
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