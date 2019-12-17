<template>
	<div class="page">
	  <div class="box">
		<div class="pagebox">
			<header class="header">
				  <van-icon name="replay" size="20" @click="gotohome"/>
			</header>
			<van-swipe :autoplay="10000" class="swiper">
	              <van-swipe-item v-for="(image, index) in images" :key="index" >
	                  <img :src="image.img" @click="Preview_img(images,index)"/>
	              </van-swipe-item>
         	</van-swipe>
		</div>
		<div class="introduce">
			<h1>{{ name }}</h1>
			<p>{{ info }}</p>
			<span>￥{{ price }}</span>
		</div>
	 </div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
            return {
            	name:this.$route.query.name,
            	info:this.$route.query.info,
            	price:this.$route.query.price,
                images:[],
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
		},
		mounted(){
			//获取swiper轮播图网址
        	this.$axios.get('https://shiyaming1994.github.io/mi/static/rotationChart.json')
        	.then(res=>{
        		this.images=res.data
        	})
		}
	}
</script>

<style type="text/css">
	.page{
		background:#F9F9F9;
		overflow: hidden;
	}
	.page>.box{
		width: 6.4rem;
		height:9.7rem; 
		border:1px solid #ccc;
		margin: 0 auto;
		margin-top: 0.27rem;
	}
	.pagebox{
		width: 6.4rem;
		height: 7.1rem;
		background: #F6F6F6;
	}
	.pagebox>.header{
		height: 1rem;
		line-height: 1rem;
		background: #F6F6F6;
	}
	.pagebox>.header>.van-icon{
		margin-left: 0.3rem;
	}
	.swiper{
		height: 3.2rem;
		height: 5rem;
	}
	.swiper img{
		width: 5.72rem;
		height: 5rem;
		margin-left:0.35rem;
	}
	.introduce{
		width: 100%;
		height: 2.62rem;
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
		color:#999A99;
	}
	.introduce>span{
		margin-left: 0.26rem;
		margin-top: 0.15rem;
		font-size: 0.3rem;
		color: #FF6700;
		display: inline-block;
	}
</style>