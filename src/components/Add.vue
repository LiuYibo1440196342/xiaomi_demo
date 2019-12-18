<template>
	<div>
		<header>
			<van-icon name="arrow-left" size="20" @click="end"/>
			<p>新增收货地址</p>
			<van-icon name="search" size="20"/>
		</header>
		<van-address-edit
  show-postal
  show-delete
  show-set-default
  show-search-result
/>
	</div>
</template>

<script type="text/javascript">
	export default {
  data() {
    return {

    }
  },

  methods: {
  	end(){
				this.$router.go(-1);
			}
  }
}
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
</style>