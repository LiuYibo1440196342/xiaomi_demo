import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
        //存储共享数据
        con:0,
        imgsrc:"",
	},
	mutations:{
        //修改数据 同步
        addData(state,val){
            state.con = val
        },
        addImg(state,val){
            state.imgsrc = val
        }
	},
	actions:{
		//异步
	},
	getters:{

	}
})