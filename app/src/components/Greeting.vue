<template lang="pug">
  h1.title {{ greeting }}
</template>

<style lang="sass" scoped>
  h1
    font-weight: bold
    text-align: center
    margin: 4rem
    +max-screen($sp)
      font-size: 2.4rem
    +min-screen($tablet)
      font-size: 3.2rem
</style>

<script lang="ts">
/* tslint:disable:prettier */
/* tslint:enable:prettier */
import Vue from 'vue'
export default Vue.extend({
  props: {
    greeting: String
  }
})
</script>


