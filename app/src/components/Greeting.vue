<template lang="pug">
  h1.title {{ greeting }}
</template>

<style lang="sass" scoped>
  h1
    font-weight: bold
    +max-screen($sp)
      font-size: 2.4rem
    +min-screen($tablet)
      font-size: 3.2rem
</style>

<script lang="ts">
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:enable:no-consecutive-blank-lines */
import Vue from 'vue'
export default Vue.extend({
  props: {
    greeting: String
  }
})
</script>


