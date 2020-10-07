import { computed, ref, reactive } from 'vue';

export function addNumber(){
  const count = ref(0)

  const state = reactive({
    message: 'composition'
  })

  const doubleCount = computed(() => count.value * 2)

  const increment = e => {
    console.log(e)
    count.value += 10
    state.message = 'composition. GoGoGo!'
  }

  return {
    count,
    state,
    doubleCount,
    increment
  }
}