<template lang="pug">
  .wrap
    Greeting(:greeting="greeting")
</template>

<script lang="ts">
import Greeting from './Greeting.vue';

interface Data {
  greeting: string
}

export default {
  data: function(): Data {
    return {
      greeting: 'HELLO! PEACE WORLD!!!'
    }
  },
  components: {
    Greeting
  }
}
</script>

<style lang="sass">

</style>