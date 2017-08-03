<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" v-for="(good, index) in goods"
              :class="{current: index === currIndex}" @click="clickMenuItem(index)">
            <span class="text border-1px">
              <span class="icon" v-if="good.type>=0" :class="supportClasses[good.type]"></span>
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li class="food-list food-list-hook" v-for="good in goods">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item border-1px" v-for="food in good.foods">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="des">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    cartcontrol组件
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--<div>shopcart组件</div>-->
    </div>
    <div v-show="false">food组件</div>
  </div>
</template>
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  const OK = 0
  export default {
    data () {
      return {
        goods: [],
        supportClasses: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
        tops: [],
        scrollY: 0
      }
    },

    created () {
      // 使用axios发送ajax请求
      axios.get('/api/goods')
        .then(response => {
          const result = response.data
          if (result.code === OK) {
            this.goods = result.data
            // 滚动
            this.$nextTick(() => {
              this._initScroll()
              this._initTops()
            })
          }
        })
    },
    methods: {
      // 定义滚动
      _initScroll () {
        // menu-wrapper的滚动
        new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        // foods-wrapper的滚动
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          probeType: 3
        })
        // 监视foods的滚动
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y)
        })
      },
      // 定义tops
      _initTops () {
        const tops = []
        let top = 0
        tops.push(top)
        // 找到所有对应的lis
        const lis = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        for (var i = 0; i < lis.length; i++) {
          var li = lis[i]
          top += li.clientHeight
          tops.push(top)
        }
        this.tops = tops
      },
      // 点击变换
      clickMenuItem (index) {
        const lis = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        const li = lis[index]
        this.foodsScroll.scrollToElement(li, 300)
      }
    },
    computed: {
      // 滚动计算
      currIndex () {
        const {tops, scrollY} = this
        return tops.findIndex((top, index) => {
          return scrollY >= top && scrollY < tops[index + 1]
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>


