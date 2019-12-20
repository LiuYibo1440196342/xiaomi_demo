<template>
    <div class="home">
        <header class="header">
        	<aside class="aside-left"></aside>
        	<aside class="aside-right">
        		<input type="" name="">
        		<van-icon name="search" size="20"/>
        	</aside>
        </header>
        <van-swipe :autoplay="2000" class="swiper">
              <van-swipe-item v-for="(image, index) in images" :key="index" >
                  <img :src="image.img" @click="Preview_img(images,index)"/>
              </van-swipe-item>
         </van-swipe>
         <nav class="nav">
         	<ul>
         		<li>
         			<van-icon name="balance-pay" size="20"/>
         			<p>icon1</p>
         		</li>
         		<li>
         			<van-icon name="smile-comment-o" size="20"/>
         			<p>icon2</p>
         		</li>
         		<li>
         			<van-icon name="like-o" size="20"/>
         			<p>icon3</p>
         		</li>
         		<li>
         			<van-icon name="qr-invalid" size="20"/>
         			<p>icon4</p>
         		</li>
         		<li>
         			<van-icon name="notes-o" size="20"/>
         			<p>icon5</p>
         		</li>
         	</ul>
         </nav>
         <div class="list">
         	<ul>
         		<li v-for="item in list" @click="gotopage(item)" :key="item.id">
         			 <img :src="item.img"/>
         			 <h1>{{ item.name }}</h1>
         			 <p>{{ item.content }}</p>
         			 <span>￥{{ item.price }}</span>
         		</li>
         	</ul>
         </div>
    </div>
</template>



<script>
export default{
     data(){
            return {
                images:[],
                list:[]
            }
        },
        mounted(){
        	//获取列表页面的详情信息
        	this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1')
        	.then(res=>{
        		this.list=res.data
        	}),
        	//获取swiper轮播图网址
        	this.$axios.get('https://shiyaming1994.github.io/mi/static/rotationChart.json')
        	.then(res=>{
        		this.images=res.data
        	})
        },
        methods: {
            //轮播图预览
            Preview_img(images, index){
                ImagePreview({
                    images: images,//图片数组
                    showIndex: true,
                    loop: false,
                    startPosition: index
                })
            },
            //点击进入详情页
            gotopage(item){
            	this.$router.push({
            		path:'/page',
            		query:{
            			item:item
            		}
            	})
            }
        }
}
</script>

<style type="text/css">
	.header{
		width: 100%;
		height: 1.1rem;
		background: #FFFF;
	}
	.header>.aside-left{
		width: 0.72rem;
		height: 0.72rem;
		background: #87CEEB;
		margin: 0.21rem 0 0 0.32rem;
		float: left;
		border-radius: 50%;
	}
	.header>.aside-right>input{
		float: right;
		width: 3.8rem;
		height: 0.5rem;
		border: 2px solid #E5E5E5;
		margin: 0.3rem 0.4rem 0 0;
		border-radius: 0.5rem;
		position: relative;
		text-indent: .7rem;
	}
	.header>.aside-right>.van-icon{
		position: absolute;
		left: 2.7rem;
		top: .42rem;
	}
	.swiper{
		height: 3.2rem;
		height: 3.2rem;
	}
	.swiper img{
		width: 100%;
		height: 3.2rem;
	}
	.nav{
		width: 100%;
		height: 1.27rem;
		background: #fff;
		overflow: hidden;
	}
	.nav>ul{
		width: 5.7rem;
		height: 0.7rem;
		margin: 0 auto;
		margin-top: 0.28rem;
		display: flex;
		flex-direction: row;
		justify-content:space-between;
	}
	.nav>ul>li{
		width:1rem;
		height: 0.7rem;
	}
	.nav>ul>li>.van-icon{
		margin-left: 0.28rem;
	}
	.nav>ul>li>p{
		text-align: center;
	}
	.list{
		width: 100%;
		margin-top: .15rem;
		margin-bottom: .9rem;
	}
	.list>ul{
		width: 100%;
		display: flex;
		justify-content:space-around;
		flex-wrap: wrap;
	}
	.list>ul>li{
		width: 3.18rem;
		height: 4.6rem;
	}
	.list>ul>li>img{
		width: 100%;
		height: 3.16rem;
	}
	.list>ul>li>h1{
		margin-top: 0.23rem;
		font-size: 0.28rem;
		text-indent: 0.2rem;
	}
	.list>ul>li>p{
		color: #757575;
		font-size: 0.2rem;
		margin-top: 0.05rem;
		text-indent: 0.2rem;
	}
	.list>ul>li>span{
		color:#EB6962;
		font-size: 0.25rem;
		margin-top: 0.03rem;
		margin-left: 0.2rem;
		display:inline-block;
	}
</style>
