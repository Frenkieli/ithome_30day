<template>
  <div class="container">
    hello {{state.message}}
    <div>count: {{count}}</div>
    <div>doubleCount: {{doubleCount}}</div>
    <button @click="increment" class="button">increment</button>
  </div>
</template>

<script>
import { addNumber } from '../composition/addNumber'
export default {
  setup () {  
    const { count, state, doubleCount, increment } = addNumber();
    return {
      count,
      state,
      doubleCount,
      increment
    }
  }
}
</script>