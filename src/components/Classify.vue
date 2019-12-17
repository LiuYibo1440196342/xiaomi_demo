<template>
    <div class="classify">
     <van-nav-bar title="分类" left-text="" left-arrow>
 	 <van-icon name="search" slot="right" />
	</van-nav-bar>
	<van-tree-select
  height="100vh"
  :items="items"
  :main-active-index.sync="activeIndex"
>
  <template slot="content">
    <div class="right" v-for="(item,index) in items"> 
    	<img src="../assets/img/banner1.jpg" alt="" class="banner">
    	<van-divider :style="{ color: '#000000', borderColor: '#E0E0E0', padding: '0 16px' }">
  		{{item.text}}
		</van-divider>
		<ul>
			<li><img src="../assets/img/r4_c.jpg" alt=""><p>小米9</p></li>
			<li><img src="../assets/img/r4_c.jpg" alt=""><p>小米9</p></li>
			<li><img src="../assets/img/r4_c.jpg" alt=""><p>小米9</p></li>
			<li><img src="../assets/img/r4_c.jpg" alt=""><p>小米9</p></li>
		</ul>
    </div>

  </template>
</van-tree-select>
    </div>
</template>



<script>

export default {
	data() {
    return {
      activeIndex: 0,
      items: [{ text: '分组 1'}, { text: '分组 2' },{ text: '分组 3' }, { text: '分组 4' }, { text: '分组 5' },{ text: '分组 6' }, { text: '分组 7' }, { text: '分组 8' },{ text: '分组 9' }]
    }
  },
}
</script>
<style type="text/css" scoped>
	.classify{
		width: 100%;
		margin-bottom: 100px;
		height: 100vh;
		background: #fff;
	}
	.van-tree-select{
		width:100%;
	}
	.banner{
		width:100%;
	}
	.van-divider{
		font-size: 0.18rem;
	}
	.van-tree-select__nav-item {
    padding: 30px 8px 30px 12px;
    text-align: center;
	}
	.right>ul{
		display:flex;
		flex-direction:row;
		text-align: center;
		justify-content:space-between;
		flex-wrap:wrap;
	}
	.right>ul>li{
		width:0.65rem;
		margin-top: 0.1rem;
	}
	.right>ul>li>p{
		margin-top: 0.1rem;
	}

</style>