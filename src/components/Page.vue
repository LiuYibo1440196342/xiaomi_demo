<template>
	<div class="page">
	  <div class="box">
		<div class="pagebox">
			<van-icon name="arrow-left" size="20" @click="gotohome"/>
			<van-swipe :autoplay="2000" class="swiper">
	              <van-swipe-item v-for="(imgs,index) in images" :key="index.id" >
	                  <img :src="imgs.img" @click="Preview_img(imgs,index)"/>
	              </van-swipe-item>
         	</van-swipe>
		</div>
		<div class="introduce">
			<h1>{{ item.name }}</h1>
			<p>{{ item.info }}</p>
			<span>￥{{ item.price }}</span>
			<div class="cell" @click="flag=true">
				<span>已选</span>
				<p>小米8屏幕指纹版</p>
				<van-icon name="arrow" size="20"/>
			</div>
			<div class="cell">
				<span>送至</span>
				<p>北京</p>
				<van-icon name="arrow" size="20"/>
			</div>
		</div>
	</div>
	<div class="shade" v-show="flag">
	 <div class="sku">
	       <van-icon name="cross" size="20" @click="flag=false"/>
	       <div class="message">
		        <div class="picturebox">
		        	<img :src="img">
		        </div>
		        <div class="text">
		        	<h1>{{ price }}</h1>
		        	<p>{{item.name}}{{ memory }}{{ colors }}</p>
		        </div>
	       </div>
	       <div class="particulars">
	       		<p>版本</p>
	       	<div class="detail" v-for="(item,index) in edition" @click="detailfn(item,item.color,index)" :class="{active:num==index}" :key="item.id">
	       			<p>{{ item.Memory }}</p>
	       			<span>{{ item.edition_price }}</span>
	       		</div>
	       		<div class="color">
	       			<p>颜色</p>
	       			<div class="colortext" v-for="(item,index) in color" @click="detailfn1(item,index)" :class="{active:num1==index}" :key="item.id">
	       				<p>{{ item.color_list }}</p>
	       			</div>
	       		</div>
	       </div>
	       <div class="buynumber">
	       		<p>购买数量</p>
	       		<van-stepper v-model="value"/>
	       </div>
	       <button>加入购物车</button>
      </div> 
    </div>
    <div class="imgsbox">
    	<img :src="item.info_img[0].img">
    	<img :src="item.info_img[1].img">
    </div>
    <van-goods-action>
	  <van-goods-action-icon icon="wap-home-o" text="首页"  />
	  <van-goods-action-icon icon="cart-o" text="购物车" :info="vals" to="/shopping"/>
	  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
	  <van-goods-action-button type="danger" text="立即购买" />
	</van-goods-action>
 </div>
</template>

<script type="text/javascript">
	export default{
		data(){
            return {
            flag:false,
			value:1,
			vals:'',
            colorarr:[],
            num:0,
            price:"",
            memory:"",
            num1:0,
            img:'',
            colorr:"",
            item:this.$route.query.item,
            images:this.$route.query.item.imgList,
            edition:this.$route.query.item.edition,
            color:this.$route.query.item.edition[0].color,
            colors:this.$route.query.item.edition[0].color[0].color_list,
            
		 }
        },
		methods:{
			gotohome(){
				this.$router.push('/home')
			},
			 //轮播图预览
            Preview_img(images, index){
                ImagePreview({
                    images: images,//图片数组
                    showIndex: true,
                    loop: false,
                    startPosition: index
                })
            },
            //商品规格的函数
            detailfn(item,color,i){
            	this.colorarr=color;
            	this.num=i;
            	this.price=item.edition_price;
            	this.memory=item.Memory
            },
            detailfn1(item,i){
            	this.num1=i;
            	this.img=item.img;
            	this.colorr=item.color_list
			},
			onClickButton(vals){
				this.vals = this.value;
				this.$store.commit('addData',this.vals)
				this.$store.commit('addImg',this.img[0])
			}
		},
		mounted(){
		}
	}
</script>

<style type="text/css">
	.page{
		background:#F9F9F9;
		overflow: hidden;
	}
	.page>.box{
		width: 100%;
		height:12.2rem; 
		border:1px solid #ccc;
		margin: 0 auto;
		border-bottom: none;
	}
	.pagebox{
		width: 100%;
		height: 7.1rem;
		background: #F6F6F6;
		position: relative;
	}
	.pagebox>.swiper{
		width: 100%;
		height: 7.04rem;
	}
	.pagebox>.van-icon{
		position: absolute;
		top: .15rem;
		left: .2rem;
		z-index: 10;
	}
	.pagebox>.swiper.swiper img{
		width: 100%;
		height: 7.04rem;
	}
	.introduce{
		width: 100%;
		height: 5rem;
		background: #FFFFFF;
		overflow: hidden;
	}
	.introduce>h1{
		margin-top: 0.4rem;
		text-indent: 0.26rem;
		font-size: 0.37rem;
	}
	.introduce>p{
		font-size: 0.2rem;
		margin-top: 0.1rem;
		margin-left: 0.26rem;
		margin-right: 0.26rem;
		color:#999A99;
	}
	.introduce>span{
		margin-left: 0.26rem;
		margin-top: 0.15rem;
		font-size: 0.35rem;
		color: #FF6700;
		display: inline-block;
		margin-bottom: .24rem;
	}
	.cell{
		width: 6.2rem;
		height: 0.85rem;
		margin-left: .26rem;
		background: #FAFAFA;
		position: relative;
	}
	.cell:first-of-type{
		border-bottom: 1px solid #ccc;
	}
	.cell>span{
		font-size: 0.22rem;
		line-height: .85rem;
		color:#A0A0A0; 
		margin: .28rem 0 0 .28rem
	}
	.cell>p{
		margin: .3rem 0 0 .3rem;
		color:#000018;
		font-size: .2rem;
		display: inline-block;
	}
	.cell>.van-icon{
		position: absolute;
		right: .22rem;
		top:.3rem;
	}
	.shade{
		width: 100%;
		height: 100vh;
		background:rgba(0,0,0,0.8);
		position: absolute;
		top: 0;
		left: 0;
	}
	.shade>.sku{
		width: 100%;
		height: 8.54rem;
		background: #fff;
		position: fixed;
		bottom: 0rem;
		left: 0rem;
		border-radius: .3rem .3rem 0 0;
	}
	.shade>.sku>.van-icon{
		position: absolute;
		top: .3rem;
		right: .3rem;
	}
	.message{
		width: 5.9rem;
		height: 1.85rem;
		margin: .88rem 0 0 .27rem;
	}
	.shade>.sku>.message>.picturebox{
		width: 1.7rem;
		height: 1.7rem;
		border: 2px solid #ccc;
		float: left;
	}
	.shade>.sku>.message>.picturebox>img{
		width: 1.7rem;
		height: 1.7rem;
	}
	.shade>.sku>.message>.text{
		width: 3.95rem;
		height: .96rem;
		float: right;
		margin-top: .44rem;
	}
	.shade>.sku>.message>.text>h1{
		font-size: .3rem;
		font-weight: bold;
	}
	.shade>.sku>.message>.text>p{
		margin-top: .22rem;
		color:#212121;
	}
	.shade>.sku>.particulars{
		width: 5.88rem;
		height: 3.34rem;
		margin: .44rem 0 0 .22rem;
	}
	.shade>.sku>.particulars>p{
		font-size: .2rem;
		color:#212121;
		margin-bottom: .26rem;
	}
	.shade>.sku>.particulars>.detail{
		width: 5.85rem;
		height: .6rem;
		border:1px solid #ccc;
		margin-top: .15rem;
	}
	.shade>.sku>.particulars>.detail>p{
		line-height: .6rem;
		color:#ccc;
		font-size: .26rem;
		text-indent: .28rem;
		display: inline-block;
		float: left;
	}
	.shade>.sku>.particulars>.detail>span{
		font-size: .26rem;
		color:#ccc;
		line-height: .6rem;
		float: right;
		margin-right: .24rem;
	}
	.shade>.sku>.particulars>.color{
		width: 5.85rem;
		height: 1.21rem;
		margin: .26rem 0 0 0;
	}
	.shade>.sku>.particulars>.color>p{
		font-size: .2rem;
		color:#212121;
		margin-bottom: .33rem;
	}
	.shade>.sku>.particulars>.color>.colortext{
		width: 1.1rem;
		height: .6rem;
		border:1px solid #ccc;
		float: left;
		margin-left: .1rem;
	}
	.shade>.sku>.particulars>.color>.colortext>p{
		line-height: .6rem;
		font-size: .28rem;
		color:#ccc;
		text-align: center;
	}
	.buynumber{
		width: 5.92rem;
		height:.7rem;
		margin: .5rem 0 0 .27rem; 
	}
	.buynumber>p{
		line-height: .6rem;
		font-size: .2rem;
		color:#212121;
		height: .3rem;
		float: left;
	}
	.buynumber>.van-stepper{
		float: right;
	}
	.shade>.sku>button{
		width: 5.86rem;
		height: .6rem;
		background: #FF6700;
		color:#fff;
		font-size: .25rem;
		border:none;
		margin-left: .4rem;
		margin-top: .15rem;
		border-radius: .5rem;
	}
	.shade>.sku>.particulars>.detail.active{
		border:2px solid #F56600;
		z-index: 1000;
	}
	.shade>.sku>.particulars>.detail.active>p{
		color:#F56600;
	}
	.shade>.sku>.particulars>.detail.active>span{
		color:#F56600;
	}
	.shade>.sku>.particulars>.color>.colortext.active{
		border:2px solid #F56600;
		z-index: 1000;
	}
	.shade>.sku>.particulars>.color>.colortext.active>p{
		color: #F56600;
	}
	.imgbox{
		width: 100%;
		display: flex;
	}
	.imgsbox>img:first-of-type{
		width: 100%;
		
	}
	.imgsbox>img:last-of-type{
		width: 100%;
		margin-bottom: .8rem;
	}
</style>