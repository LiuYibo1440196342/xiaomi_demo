<template>
    <div class="shopping">
        <header class="header">
            <van-nav-bar title="购物车" left-text="" left-arrow  @click-left="onClickLeft">
            <van-icon name="search" slot="right" size="25" color="#6A6A6A"/>
            </van-nav-bar>
        </header>
        <div class="gologin">
            <div>
                <p>登录后享受更多优惠</p>
                <p>去登录</p>
                <van-icon name="arrow" size="15" color="#757575"/>
            </div>
        </div>
        <div class="shop">
            <div>
                <p>购物车还是空的</p>
                <h1>去逛逛</h1>
            </div>
        </div>
        <section class="youLike">
            <div class="youLike_head">
                <h1>猜你喜欢</h1>
                <van-divider :style="{ color: '#878787', borderColor: '#878787', padding: '0 0'}">
                     实时推荐你的心心念念
                </van-divider>
            </div>
            <div class="shop_like">
                <div v-for="(item,index) in list" :key="index.id">
                    <div class="shop_cont">
                        <img :src="item.img" alt="">
                        <h1>{{item.name}}</h1>
                        <p>{{item.content}}</p>
                        <h2>￥{{item.price}}</h2>
                    </div>
                </div>
            </div>
        </section>
        <div v-show="flag">
            <van-submit-bar
            :price="0"
            button-text="提交订单"
            @submit="onSubmit"
            >
            <van-checkbox v-model="checked">全选</van-checkbox>
            <span slot="tip">
                你的收货地址不支持同城送, <span>修改地址</span>
            </span>
            </van-submit-bar>
        </div>
    </div>
</template>



<script>
export default {

  data(){
      return{
          list:[],
          flag:false,
          checked:'',
      }
  },
  mounted(){
      this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1')
      .then(res=>{
          this.list = res.data;
      })
  },
  methods: {
    onClickLeft() {
      this.flag = false;
    },
    onClickRight() {
      Toast('按钮');
    },
    onSubmit(){
        console.log(this.list)
    }
  }
}
</script>

<style scoped>
.van-checkbox{
    margin-left: .1rem;
}
.header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #767676;
    z-index: 100;
}
.van-nav-bar__title{
    color: #767676;
}
.van-nav-bar{
    height: .85rem;
    background: #F2F2F2;
}
.gologin{
    width: 100%;
    height: 1.1rem;
    background: #ffffff;
    margin-top: .9rem
}
.gologin p{
    float: left;
    font-size: .3rem;
    line-height: 1.1rem;
}
.gologin p:first-of-type{
    margin-left: .28rem;
}
.gologin p:last-of-type{
    margin-left: 2.4rem;
    color: #757575;
    font-size: .25rem;
}
.gologin i{
    float: left;
    margin: .43rem 0 0 .1rem;
}
.shop{
    width: 100%;
    background: #EBEBEB;
    display: flex;
}
.shop>div{
    width: 3.2rem;
    margin: 0 auto;
}
.shop>div>p{
    line-height: 1.2rem;
    font-size: .25rem;
    color: #ABABAB;
    float: left;
}
.shop>div>h1{
    width: 1.18rem;
    height: .39rem;
    background: #EBEBEB;
    border: .01rem solid #C8C8C8;
    float: right;
    text-align: center;
    line-height: .39rem;
    margin: .38rem 0 0 0;
    font-size: .25rem;
}
.youLike{
    width: 100%;
    margin-bottom: .9rem;
    background: #ffffff;;
}
.youLike_head{
    width: 100%;
    height: 1.05rem;
    text-align: center;
    padding-top: .15rem;
    box-sizing: border-box;
}
.youLike_head>h1{
    font-size: .25rem;
    color: #FE6E02;
}
.van-divider{
    margin: 0 0;
}
.shop_like{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.shop_cont{
    width: 3.2rem;
    height: 4.6rem;
    background: #fff;
}
.shop_cont>img{
    width: 100%;
    height: 3.15rem;
}
.shop_cont>h1{
    font-size: .28rem;
    color: #212121;
    margin: .23rem .13rem 0 .18rem;
}
.shop_cont>p{
    font-size: .17rem;
    color: #757575;
    margin-left: .18rem;
}
.shop_cont>h2{
    font-size: .19rem;
    color: #EA625B;
    margin: .12rem 0 0 .20rem;
}
</style>