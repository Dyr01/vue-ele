<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="supportClasses[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports">
        <span class="count" @click="showMask(true)">{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showMask(true)" >
      <span class="bulletin-title"></span>
      <span class="bulletin-text">
        {{seller.bulletin}}
      </span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class="mask" v-show="maskShow">
        <div class="mask-wrapper clear-fix">
          <div class="mask-main">
            <h1 class="title">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :score="seller.score" :size="48"></star>
            </div>
            <div class="info">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="list">
              <li class="item" v-for="support in seller.supports">
                <span class="icon" :class="supportClasses[support.type]"></span>
                <span class="text">{{support.description}}</span>
              </li>
            </ul>
            <div class="info">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="text">
                {{seller.bulletin}}
              </p>
            </div>
          </div>
        </div>
        <div class="mask-footer" @click="showMask(false)">
          <span class="icon-close"></span>
        </div>
      </div>
    </transition>

  </div>
</template>
<script>
  import star from '../star/star.vue'
  export default {
    props: ['seller'],
    data () {
      return {
        maskShow: false,
        supportClasses: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
      }
    },
    methods: {
      showMask (isShow) {
        this.maskShow = isShow
      }
    },
    components: {
      star
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    position relative
    color #fff
    background-color rgba(7,17,27,.5)
    overflow hidden
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        vertical-align top
      .content
        display inline-block
        margin-left 16px
        .title
          margin 2px 0 8px
          .brand
            display inline-block
            width 30px
            height 18px
            bg-image(brand)
            vertical-align top
            background-size 100%
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            line-height 18px
        .description
          font-size 12px
          line-height 12px
          font-weight 200
        .supports
          margin 10px 0 2px
          .icon
            display inline-block
            width 12px
            height 12px
            background-size 100%
            vertical-align top
            &.decrease
              bg-image(decrease_1)
            &.discount
              bg-image(discount_1)
            &.guarantee
              bg-image(guarantee_1)
            &.invoice
              bg-image(invoice_1)
            &.special
              bg-image(special_1)
          .text
            margin-left 4px
            font-size 10px
            line-height 10px
            font-weight 200
      .supports-count
        position absolute
        right 12px
        bottom 15px
        padding 7px 8px
        height 10px
        font-size 10px
        line-height 10px
        font-weight 200
        border-radius 10px
        background-color rgba(0,0,0,.2)
    .bulletin-wrapper
      position relative
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      padding 0 34px 0 15px
      font-size 10px
      line-height 28px
      font-weight 200
      background-color: rgba(7,17,27,.2)
      .bulletin-title
        margin-top 8px
        vertical-align top
        display inline-block
        width: 22px
        height: 12px
        bg-image(bulletin)
        background-size 100%
      .icon-keyboard_arrow_right
        position absolute
        bottom 7px
        right 14px
    .background
      position absolute
      left 0
      top 0
      filter blur(10px)
      z-index -1
      width 100%
      height 100%
    .mask
      position fixed
      left 0
      top 0
      z-index 99
      width 100%
      height 100%
      background-color rgba(7,17,27,.6)
      overflow auto
      &.fade-transition
        opacity 1
      &.fade-enter, &.fade-leave
        opacity 0
      .mask-wrapper
        min-height 100%
        .mask-main
          width 80%
          margin 0 auto
          padding-top 64px
          padding-bottom 64px
          .title
            text-align center
          .star-wrapper
            width 80%
            margin 16px auto 28px
          .info
            display flex
            .text
              margin 0 12px
            .line
              position relative
              top 8px
              flex 1
              height 1px
              background-color rgba(255,255,255,.2)
          .list
            margin 24px 0 28px
            .icon
              vertical-align top
              display inline-block
              width 16px
              height 16px
              background-size 100%
              &.decrease
                bg-image(decrease_2)
              &.discount
                bg-image(discount_2)
              &.guarantee
                bg-image(guarantee_2)
              &.invoice
                bg-image(invoice_2)
              &.special
                bg-image(special_2)
            .text
              display inline-block
              font-size 12px
              line-height 12px
              font-weight 200
              margin 0 0 0 4px
            .item
              margin-left 10px
              margin-bottom 12px
              &:last-child
                margin-bottom 0
          .bulletin
            margin-top 24px
            font-size 12px
            line-height 24px
            font-weight 200
      .mask-footer
        margin-top -64px
        text-align center
        .icon-close
          font-size 52px
          color rgba(255,255,255,.5)
</style>
