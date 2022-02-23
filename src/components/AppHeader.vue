<template>
  <header class="bg-green-400 w-full text-center uppercase py-2">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      title: 'Bet Your Arb!',
    }
  },
}
</script>
