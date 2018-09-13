<template>
	<div class='car_sel'>
		<div class='car_sel-main'>
			<!-- 输入框 -->
			<label class='car_sel-lable' >
				<el-input
					class='car_sel-input'
					placeholder="请选择车型"
					@focus="subtext = !subtext"
					v-model="cartype"
					:style="style">
				</el-input>
				<i :class="subtext ? 'icon_aniamte' : ''" class="el-icon-arrow-down icon"></i>
			</label>
			<!-- 菜单栏 -->
			<div v-show='subtext' class="car_sel-submenu clear">
				<!-- 左侧 index -->
				<ul class="car_sel-index left">
					<li class='car_sel-list' @click='floorTo(index)' v-for='(item,index) in charIndex'>
						{{item}}
					</li>
				</ul>
			<!-- 中间一级分类 -->
				<ul class="car_sel-subitem left">
					<li class='car_sel-sublist' v-for='item in carLists'>
						<div class="list_title" ref='floor'>{{item.t_spell}}</div>
						<ul class="lists_content">
							<li class='lists_item'  @click='handleCartype(detaile.id,detaile.name)' v-for='detaile in item.data'>{{detaile.name}}</li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- 右侧二级分类 -->
			<ul v-show="subtext && isshowsubitem" class="secend_list">
				<h3 class="allType_title">全部车型</h3>
				<div class='sec_content' v-for='item in carListsItem'>
					<div class="sec_list_title" >{{item.type}}</div>
					<ul class="sec_lists_content" >
						<li class='lists_item' @click='handleselect(detaile.showName)' v-for="(detaile,i) in item.data[0]">{{detaile.showName}}</li>
					</ul>
				</div>
			</ul>
		</div>
	</div>
</template>

<script>
	import { getCarInfo, getCarType } from 'api/common.js'
	export default {
	  name: 'carselect',
	  props: {
	    width: {
	      type: String,
	      default: '180px'
	    },
	    cartypevalue: {
	      type: Object,
	      default: function() {
	        return { 'brand': '', 'car_type': '' }
	      }
	    }
	  },
	  data() {
	    return {
	      // 选中的车型
	      cartype: '',
	      brand: '',
	      // 显示子菜单
	      subtext: false,
	      // 显示二级菜单
	      isshowsubitem: false,
	      // 字母表索引
	      charIndex: [],
	      // 总的车型列表
	      carLists: [],
	      // 车型具体分类
	      carListsItem: []
	    }
	  },
	  methods: {
	    getcarvalue() {
	      const car = {}
	      if (this.cartype !== '') {
	        car.brand = this.brand
	        car.car_type = this.cartype
	      } else {
	        this.$message({
	          type: 'warning',
	          message: '车型选择为空',
	          duration: 1000 * 1
	        })
	      }
	      return car
	    },
	    getcar() {
	      getCarInfo().then((res) => {
	        const _this = this
	        const datas = res.data.data
	        // 字符数组
	        _this.charIndex = datas.char_list
	        // 总的车型
	        _this.carLists = []
	        const dataEle = datas.data_list
	        const datalength = dataEle.length
	        _this.charIndex.forEach((element, i) => { // 第一次遍历，索引
	          // 每次遍历需要对该数组重新赋值，否则他的值为最后遍历出来的值
	          const uniondata = {
	            t_spell: '',
	            data: []
	          }
	          // 保存当前字母索引
	          uniondata.t_spell = element
	          for (let j = 0; j < datalength; j++) { // 第二次遍历，所有的车型，符合条件的保存至data中
	            if (element === dataEle[j].t_spell) {
	              uniondata.data.push(dataEle[j])
	            }
	          }
	          // 将遍历出的数据push
	          _this.carLists.push(uniondata)
	        })
	      })
	    },
	    // 楼层滚动
	    floorTo(index) {
	      // 该方法可直接让可以滚动的元素滚动至相应的视口
	      this.subtext = true
	      this.$refs.floor[index].scrollIntoView(true)
	    },
	    handleselect(item) {
	      this.cartype = item
	      this.subtext = false
	    },
	    // 获取车辆类型
	    handleCartype(id, name) {
	      this.subtext = true
	      this.isshowsubitem = true
	      this.brand = name
	      const _this = this
	      getCarType(id).then(res => {
	        const datas = res.data.data.data
	        _this.carListsItem = []
	        datas.forEach((value, i) => {
	          const cartypes = {
	            type: '',
	            data: []
	          }
	          // 保存车型类型
	          cartypes.type = value.gname
	          // 保存车型对应的具体车型
	          cartypes.data.push(value.child)
	          _this.carListsItem.push(cartypes)
	        })
	      })
	    }
	  },
	  created() {
	  },
	  mounted() {
	    this.getcar()
	  },
	  watch: {
	    fromcartype: {
	      handler(val, old) {
	        // console.log("fromcartype",val);
	        this.cartype = val.car_type
	        this.brand = val.brand
	      },
	      immediate: true
	    }
	  },
	  computed: {
	    style() {
	      const style = {}
	      if (this.width) {
	        style.width = this.width
	      }
	      return style
	    },
	    // 获取从父组件传递过来的车型值,然后进行
	    fromcartype() {
	      return this.cartypevalue
	    }
	  }
	}
</script>
<style lang="scss" scoped>
	@import 'src/style/mixin';
	.car_sel{
		height: auto;
		.car_sel-main{
			position: relative;
			.car_sel-lable{
				position: relative;
				.car_sel-input{
					width: 20%;
				}
				.icon{
					position: absolute;
					top: 4px;
					right: 10px;
					transition: all 0.5s;
				}
				//定义focus时的动画
				.icon_aniamte{
					transform: rotateZ(180deg);
				}
			}
			// 子菜单栏
			.car_sel-submenu{
				@include wh(160px,280px);
				// overflow-y: auto;
				@include l_card();
				position:absolute;
				top: 46px;
				left: 0px;
				z-index:9998;
				// 索引
				.car_sel-index{
					overflow-y:auto;
					width: 30px;
					height: 280px;
					.car_sel-list{
						width: 20px;
						text-align: center;
						@include sc(12px,#333);
						line-height: 20px;
						background-color: #ddd;
						// @include c_border-item(right,#ccc,solid,1px);
						&:hover{
							background-color: $baseColor;
							cursor: pointer;
							color:#fff;
						}
						&:last-of-type{
							margin-bottom: 10px;
						}
					}
				}
				// 一级分类
				.car_sel-subitem{
					width: 130px;
					// 标题
					height: 280px;

					overflow-x: hidden;
					overflow-y:auto;
					.list_title{
						background-color: #ddd;
						font-size: 14px;
						height: 26px;
						line-height: 26px;
					}
					// 内容
					.lists_content{
						// 子内容
						width: 152px;
						.lists_item{
							cursor: pointer;
							@include sc(12px,#333);
							height: 26px;
							line-height: 26px;
							text-indent: 5px;
							&:hover{
								background-color: #ccc;
								color: $baseColor;
							}

						}

					}
				}
			}
			// 二级菜单
			.secend_list{
				@include wh(160px,280px);
				padding: 5px;
				@include l_card();
				position: absolute;
				top: 46px;
				left: 160px;
				z-index: 9998;
				overflow-y:auto;
				// 二级菜单标题
				.allType_title{
					@include sc(14px,#333);
					height: 26px;
					line-height: 26px;
					background-color: #f0f0f0
				}
				.sec_content{
					.sec_list_title{
						font-size: 12px;
						height: 26px;
						line-height: 26px;
						// @include c_border-item(bottom,#ccc,solid,1px);
						background-color: #ddd
					}
					.lists_item{
						cursor: pointer;
						@include sc(12px,#333);
						height: 26px;
						line-height: 26px;
						text-indent: 10px;
						&:hover{
							background-color: #ccc;
							color: $baseColor;
						}
					}
				}
			}
		}

	}
</style>
