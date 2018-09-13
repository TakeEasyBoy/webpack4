const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  // 债权相关
  // 债权的id
  claimid: state => state.claims.claimid,
  baseinfo: state => state.claims.baseinfo
  /* 	updateform:state => state.claims.updateform,
  	claims:state => state.claims.claims,
  	claimsvalidate:state => state.claims.claimsvalidate,
  	borrowers:state => state.claims.borrowers,
  	borrowervalidate:state => state.claims.borrowervalidate,
  	guarantors:state => state.claims.guarantors,
  	guarantorvalidate:state => state.claims.guarantorvalidate,
  	associate:state => state.claims.associate,
  	associatevalidate:state => state.claims.associatevalidate,
  	contracts:state => state.claims.contracts,
  	contractvalidate:state => state.claims.contractvalidate, */
}
export default getters
