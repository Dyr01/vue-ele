<template>
  <div class="stars" :class="`stars-${size}`">
    <div class="star" v-for="sc in starClasses" :class="sc"></div>
  </div>
</template>
<script>
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'
  export default {
    props: {
      score: Number,
      size: Number
    },
    computed: {
      starClasses () {
        const scs = []
        const score = this.score
        const scoreInteger = Math.floor(score)
        // 添加on
        for (let i = 0; i < scoreInteger; i++) {
          scs.push(CLASS_ON)
        }
        // 添加half
        if (score - scoreInteger >= 0.5) {
          scs.push(CLASS_HALF)
        }
        // 添加off
        while (scs.length < 5) {
          scs.push(CLASS_OFF)
        }
        return scs
      }

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .stars
    display flex
    justify-content space-around
    height 24px
    .star
      background-repeat no-repeat
    &.stars-48 > .star
      width 20px
      height 20px
      background-size 100%
      &.on
        bg-image("../star/star48_on")
      &.off
        bg-image("../star/star48_off")
      &.half
        bg-image("../star/star48_half")
    &.stars-36 > .star
      width 15px
      height 15px
      background-size 100%
      &.on
        bg-image("../star/star36_on")
      &.off
        bg-image("../star/star36_off")
      &.half
        bg-image("../star/star36_half")
    &.stars-24 > .star
      width 10px
      height 10px
      background-size 100%
      &.on
        bg-image("../star/star24_on")
      &.off
        bg-image("../star/star24_off")
      &.half
        bg-image("../star/star24_half")
</style>
