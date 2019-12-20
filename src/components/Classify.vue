<template>
  <div>
  	<header>
			<van-icon name="arrow-left" size="20" @click="end"/>
			<p>分类</p>
			<van-icon name="search" size="20"/>
		</header>
    <van-pull-refresh v-model="isLoading">
      <van-row>
        <van-col span="6">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="手机" />
            <van-sidebar-item title="电视" />
            <van-sidebar-item title="电脑" />
            <van-sidebar-item title="家电" />
            <van-sidebar-item title="路由" />
            <van-sidebar-item title="出行" />
            <van-sidebar-item title="出行" />
            <van-sidebar-item title="智能" />
            <van-sidebar-item title="灯具" />
            <van-sidebar-item title="家电" />
            <van-sidebar-item title="电脑" />
          </van-sidebar>
        </van-col>
        <van-col span="18">
          <div class="sddd" v-for="(item,index) in str" :key="index">
                <img src="../assets/img/banner1.jpg" class="imgbanner" />
            <van-divider
              :style="{ color: '#000000', borderColor: '#e0e0e0', padding: '0 90px' }"
            >{{item}}</van-divider>
            <div class="shou">
              <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <img src="../assets/img/r4_c.jpg" alt />
                    <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
            <div class="aut">
              <van-button type="warning">查看更多</van-button>
            </div>
          </div>
         <div class="footer">
               <img src="../assets/img/banner1.jpg" alt="">
               <img src="../assets/img/banner2.jpg" alt="">
          </div>
        </van-col>
      </van-row>
    </van-pull-refresh>
  </div>
</template>


<script>
import "../assets/jq/jquery-1.8.1.js";
export default {
  data() {
    return {
      isLoading: false,
      activeKey: 0,
      images: [],
      arr: [],
      str: [
        "手机",
        "电视",
        "电脑",
        "家电",
        "路由",
        "出行",
        "出行",
        "智能",
        "灯具",
        "家电",
        "电脑"
      ]
    };
  },
  mounted() {
    var mark = 1;
    $(".van-sidebar-item").click(function() {
      $(this)
        .addClass("van-sidebar-item--select")
        .siblings()
        .removeClass("van-sidebar-item--select");
      mark = 2;
      var h = 0;
      var index = $(this).index();
      //  h =$('.sddd').eq(index).offset().top
      h = index * $(".sddd").height() + 1;
      $(".van-col--18").animate(
        {
          scrollTop: h
        },
        500,
        function() {
          mark = 1;
        }
      );
    });
    $(".van-col--18").scroll(function() {
      var H = $(this).scrollTop();
      if (mark == 1) {
        $(".sddd").each(function() {
          var index = $(this).index();
          var h = index * $(".sddd").height();
          if (H > h) {
            $(".van-sidebar-item")
              .eq(index)
              .addClass("van-sidebar-item--select")
              .siblings()
              .removeClass("van-sidebar-item--select");
          }
        });
      }
    });

  
    this.$axios
      .get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
      .then(res => {
        this.arr = res.data;
      });
  },
  methods:{
    end(){
        this.$router.go(-1);
      },
  }
};
</script>

<style type="text/css" scoped>
header{
	height: 0.82rem;
	background: #F2F2F2;
	}
	header .van-icon:first-of-type{
       float: left;
       margin-left: 0.3rem;
       margin-top: 0.3rem;
	}
	header p{
		float: left;
		margin-left: 2.1rem;
		line-height: 0.82rem;
		font-size: 0.28rem;
	}
	header .van-icon:last-of-type{
       float: right;
       margin-right: 0.3rem;
       margin-top: 0.3rem;
	}
.van-row {
  width: 100%;
  background: #fff;
  margin-bottom: 0.5rem;
}
.van-sidebar {
  width: 100%;
  display:flex;
	flex-direction:column;
	justify-content:space-between;
}
.van-sidebar>a{
	width:100%;
	height: 20%;
}
.van-sidebar-item {
  width: 100%;
  height: 0.88rem;
}
.van-swipe {
  width: 100%;
  height: 1.76rem;
}
.van-swipe img {
  width: 100%;
  height: 1.76rem;
}
.van-swipe__indicator {
  background-color: green !important;
}
.shou {
  width: 100%;
}
.shou > ul {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.shou > ul li {
  width: 1.5rem;
  height: 1.9rem;
  text-align: center;
}
.shou > ul > li img {
  width: 1.2rem;
  height: 1.3rem;
}
.van-button--warning {
  width: 100%;
  background-color: #f9f5e6;
  color: #aea38d;
  border: none;
}
.aut {
  width: 80%;
  margin: auto;
}
.sddd {
  width: 100%;
  height: 100;
}
.van-col--18 {
  height: 90vh;
  overflow-y: scroll;
}
.van-col{
  height: 100vh;
}
.van-sidebar-item--select {
  color: red;
}
.imgbanner{
	width:4.74rem;
	height: 1.96rem;
}
.footer{
  height:6rem;
}
.footer img{
  width:100%;
  margin-top: 1rem;
}
.footer img:nth-of-type(2){
  width:90%;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
</style>
