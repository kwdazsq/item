import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		order:{
			"counter":1,
			"downmenu":1,
			"radios":1
		},
		totalprice:0
	},

	mutations:{
		updateOrder(state,data){
			state.order[data[0]] = data[1];
		},
		updatePrice(state,price){
			state.totalprice = price
		}
	},
	actions:{
		updateOrder(context,data){
			context.commit("updateOrder",data);
		},
		updatePrice(context,price){
			context.commit("updatePrice",price)
		}
	},
	getters:{
		getOrder(state){
			return state.order ? state.order : {}
		},
		getTotalprice(state){
			return state.totalprice >0 ? '￥'+state.totalprice : 0
		}
	}
})
