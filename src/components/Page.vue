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
			<div class="cell" @click="showBase=true">
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
	 <div class="sku-container">
	        <van-sku
	          v-model="showBase"
	          :sku="skuData.sku"
	          :goods="skuData.goods_info"
	          :goods-id="skuData.goods_id"
	          :hide-stock="skuData.sku.hide_stock"
	          :quota="skuData.quota"
	          :quota-used="skuData.quota_used"
	          :initial-sku="initialSku"      
	          reset-stepper-on-hide
	          reset-selected-sku-on-hide
	          disable-stepper-input
	          :close-on-click-overlay="closeOnClickOverlay" 
	          :custom-sku-validator="customSkuValidator"  
	          @buy-clicked="onBuyClicked"
	          @add-cart="onAddCartClicked"
	        />
      </div> 
 </div>
</template>

<script type="text/javascript">
	import skuData from '../assets/js/data.js'; 
	export default{
		data(){
            return {
            item:this.$route.query.item,
            images:this.$route.query.item.imgList,
		      skuData:skuData,
		      showBase: false,
		      showCustom: false,
		      showStepper: false,
		      showSoldout: false,
		      closeOnClickOverlay: true,
		      initialSku: {
		        s1: '30349',
		        s2: '1193',
		        selectedNum: 3
		      },
		      customSkuValidator: () => '请选择xxx!',   
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
            //sku商品规格
		    onBuyClicked(data) {
		      this.$toast('buy:' + JSON.stringify(data));
		      console.log(JSON.stringify(data))
		    },
		    onAddCartClicked(data) {
		      this.$toast('add cart:' + JSON.stringify(data));
		    }, 
		},
		mounted(){
			console.log(this.item)
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
	.sku-container{
		margin-bottom: .9rem;
	}
</style>