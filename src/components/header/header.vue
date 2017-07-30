<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观店）</span>
        </div>
        <div class="description">蜂鸟专送/38分钟送达</div>
        <div class="supports">
          <span class="icon decrease_1"></span>
          <span class="text">在线支付，满就送</span>
        </div>
      </div>
      <div class="supports-count">
        <span class="count">5个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，
        由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，
        发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
      </span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" width="100%" height="100%">
    </div>
    <div class="mask">
      <div class="mask-wrapper clear-fix">
        <div class="mask-main">
          <h1 class="title">粥品香坊（回龙观店）</h1>
          <div class="star-wrapper">
            <div class="stars stars-48">
              <div class="star on"></div>
              <div class="star on"></div>
              <div class="star on"></div>
              <div class="star half"></div>
              <div class="star off"></div>
            </div>
          </div>
          <div class="info">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="list">
            <li class="item">
              <span class="icon decrease_2"></span>
              <span class="text">在线支付满就送</span>
            </li>
            <li class="item">
              <span class="icon decrease_2"></span>
              <span class="text">在线支付满就送</span>
            </li>
            <li class="item">
              <span class="icon decrease_2"></span>
              <span class="text">在线支付满就送</span>
            </li>
            <li class="item">
              <span class="icon decrease_2"></span>
              <span class="text">在线支付满就送</span>
            </li>
            <li class="item">
              <span class="icon decrease_2"></span>
              <span class="text">在线支付满就送</span>
            </li>
          </ul>
          <div class="info">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="text">
              粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，
              由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，
              发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
            </p>
          </div>
        </div>
      </div>
      <div class="mask-footer">
        <span class="icon-close"></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/'stylus">
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
            &.decrease_1
              bg-image(decrease_1)
            &.discount_1
              bg-image(discount_1)
            &.guarantee_1
              bg-image(guarantee_1)
            &.invoice_1
              bg-image(invoice_1)
            &.special_1
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
            margin 16px 0 28px
            .stars
              text-align center
              height 24px
              .star
                display inline-block
                background-repeat no-repeat
              &.stars-48 > .star
                width 20px
                height 20px
                background-size 100%
                margin-right 15px
                &:last-child
                  margin-right 0
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
                margin-right 12px
                &:last-child
                  margin-right 0
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
                margin-right 10px
                &:last-child
                  margin-right 0
                &.on
                  bg-image("../star/star24_on")
                &.off
                  bg-image("../star/star24_off")
                &.half
                  bg-image("../star/star24_half")
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
              &.decrease_2
                bg-image(decrease_2)
              &.discount_2
                bg-image(discount_2)
              &.guarantee_2
                bg-image(guarantee_2)
              &.invoice_2
                bg-image(invoice_2)
              &.special_2
                bg-image(special_2)
            .text
              font-size 12px
              line-height 12px
              font-weight 200
            .item
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
