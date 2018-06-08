<template lang="pug">
  .wrap
    Greeting(:greeting="greeting")
</template>

<style lang="sass"></style>

<script lang="ts">
/* tslint:disable:prettier */
/* tslint:enable:prettier */
import Vue from 'vue'
import Greeting from './Greeting.vue'

interface Data {
  greeting: string
}

export default Vue.extend({
  data(): Data {
    return {
      greeting: 'HELLO! PEACE WORLD!!!'
    }
  },
  components: {
    Greeting
  }
})
</script>