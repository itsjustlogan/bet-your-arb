<template>
<AppHeader />
<Calculator />
</template>

<script>

import AppHeader from './components/AppHeader.vue'
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  data() {
    return {
    title: 'Hello World',
    }
  },
  components: {
    AppHeader,
    Calculator,
  }
}
</script>