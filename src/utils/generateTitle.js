/**
 * 面包屑生成
 */
const title = {
  index: '首页',
  claims: '债权信息',
  details: '债权详情',
  baseinfo: '基本信息',
  evaluation: '债权评估',
  flowmanage: '流程管理',
  caseinfo: '案件详情',
  dispotion: '债权处置',
  fee: '费用',
  files: '文件',
  records: '记录',
  borrower: '借款人',
  borrowerdetailes: '借款详情',
  guarantor: '担保管理',
  guarantorpeople: '担保人管理',
  guarantorpeopledetailes: '担保人详情',
  guarantogoods: '担保物管理',
  lender: '贷款人',
  propertyleads: '线索信息',
  channels: '渠道',
  Channelsdetail: '渠道详情',
  statistics: '统计',
  disposemanage: '处置管理',
  evalueclaims: '债权处置',
  propertydetaile: '线索信息详情'
}
// 确保在有参数传递的时候，面包屑的正确性
export const generateTitle = (route) => title[route.split('?')[0]]
