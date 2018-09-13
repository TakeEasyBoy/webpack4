/**
 * 债权添加表格vuex数据管理
 */
import { setS_Store } from 'src/configs/storage'
import { claimsDetails } from 'api/claims'
const claims = {
  state: {
    claimid: '',
    baseinfo: {}
  },
  mutations: {
    SET_CLAIMSID: (state, id) => {
      state.claimid = id
    },
    SET_BASEINFO: (state, data) => {
      state.baseinfo = data
    }
  },
  actions: {
  // 更新id
    updateClaimId({ commit }, id) {
      commit('SET_CLAIMSID', id)
      setS_Store('CLAIMSID', id)
    },
    // 更新baseinfo
    updateBaseinfo({ commit }, id) {
      claimsDetails(id)
        .then(res => {
          if (res.data.code === '0') {
            const data = res.data.data.claim_detail
            commit('SET_BASEINFO', data)
          }
        })
    }
    /* // 更新数据
		StartUpdateformdata({commit},status){
			console.log(status);
			commit('SET_UPDATEFORM',status)
		},
		// 更新债权列表数据
		Updateclaims({commit},data,status){
			return new Promise((resolve,reject)=>{
				// console.log(data);
				commit('SET_CLAIMS',data)
				commit('SET_CLAIMSVALIDATE',status)
				resolve()
			})
		},
		Updateborrowers({commit},data,status){
			return new Promise((resolve,reject)=>{
				// console.log(data);
				commit('SET_BORROWER',data)
				commit('SET_BORROWERVALIDATE',status)
				resolve()
			})
		},
		Updateassociate({commit},data,status){
			return new Promise((resolve,reject)=>{
				// console.log(data);
				commit('SET_ASSOCIATE',data)
				commit('SET_ASSOCIATEVALIDATE',status)
				resolve()
			})
		},
		Updateguarantor({commit},data,status){
			return new Promise((resolve,reject)=>{
				// console.log(data);
				commit('SET_GUARANTORS',data)
				commit('SET_GUARANTORSVALIDATE',status)
				resolve()
			})
		},
		Updatecontract({commit},data,status){
			return new Promise((resolve,reject)=>{
				// console.log(data);
				commit('SET_CONTRACTS',data)
				commit('SET_CONTRACTSVALIDATE',status)
				resolve()
			})
		},
 */
  }
}

export default claims
