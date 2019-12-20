<template>
	<div>
		<header>
			<van-icon name="arrow-left" size="20" @click="end"/>
			<p>收货地址</p>
			<van-icon name="search" size="20"/>
		</header>
		<van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  @add="onAdd"
/>
	</div>
</template>

<script type="text/javascript">
	export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        },{
        	id:'3',
        	name:localStorage.getItem("name"),
			address:localStorage.getItem("addressDetail"),
			tel:localStorage.getItem("tel")
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },

  methods: {
    onAdd() {
     this.$router.push('/add')
    },
    end(){
				this.$router.go(-1);
			},
			jump(){
				this.$router.push('/add')
			}
  }
}
</script>

<style type="text/css" scoped>
	.box{
		width:100%;
		height: 100vh;
		background: #FFFFFF;
	}
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
