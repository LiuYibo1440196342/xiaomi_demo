<template>
	<div>
		<header>
			<van-icon name="arrow-left" size="20" @click="end"/>
			<p>新增收货地址</p>
			<van-icon name="search" size="20"/>
		</header>
		<van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
	</div>
</template>

<script type="text/javascript">
	import datalist from '../assets/data/area.js'
	export default {
  data() {
    return {
      areaList:datalist,
      searchResult: [],
      locallist:{}
    }
  },

  methods: {
    onSave(content) {
    	console.log(content)
      localStorage.setItem("name",content.name)
      localStorage.setItem("addressDetail",content.addressDetail)
      localStorage.setItem("areaCode",content.areaCode)
      localStorage.setItem("city",content.city)
      localStorage.setItem("county",content.county)
      localStorage.setItem("postalCode",content.postalCode)
      localStorage.setItem("province",content.province)
      localStorage.setItem("tel",content.tel)
      localStorage.setItem("isDefault",content.isDefault)
      this.$router.go(-2);
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
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