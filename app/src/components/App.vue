<template lang="pug">
  .wrap
    Greeting(:greeting="greeting")
    .num {{ count }}
    .buttons
      button.mod-plus(@click="increase") +
      button.mod-minus(@click="decrease") -
</template>

<style lang="sass">
  .num
    font-size: 3rem
    margin: 2.4rem
    text-align: center

  .buttons
    text-align: center

  button
    display: inline-block
    text-align: center
    height: 6rem
    line-height: 6rem
    width: 6rem
    border-radius: 50%
    font-size: 3rem
    font-weight: bold
    color: white
    box-shadow: .2rem .2rem .8rem rgba(0, 0, 0, .3)
    &.mod-plus
      background-color: #55AC9F
      margin-right: 2rem
    &.mod-minus
      background-color: #CC4815
    &:active
      transform: translateY(.2rem)
</style>

<script lang="ts">
/* tslint:disable:prettier */
/* tslint:enable:prettier */
import Vue from 'vue'
import Greeting from './Greeting.vue'

interface Data {
  greeting: string
  count: number
}

export default Vue.extend({
  data(): Data {
    return {
      greeting: 'HELLO! PEACE WORLD!!!',
      count: 0
    }
  },
  components: {
    Greeting
  },
  methods: {
    increase():void {
      this.count++
    },
    decrease():void {
      this.count--
    }
  }
})
</script>