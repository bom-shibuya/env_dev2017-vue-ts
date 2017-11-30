<template lang="pug">
  h1.title {{ greeting }}
</template>

<script lang="ts">
export default {
  props: {
    greeting: String
  }
}
</script>

<style lang="sass" scoped>
  h1
    font-weight: bold
    +max-screen($sp)
      font-size: 2.4rem
    +min-screen($tablet)
      font-size: 3.2rem
</style>