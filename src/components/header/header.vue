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
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/'stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    color #fff
    background skyblue
    .content-wrapper
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

</style>
