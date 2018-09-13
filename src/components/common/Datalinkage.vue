<template>
    <div class=''>
		<!-- <div class="porcityarea_select"> -->
		<el-form class="porcityarea_select" :model="dataLink" ref="datalinkform" status-icon :rules="linkformrules" label-width="80px" size="mini"  :inline="true">
			<el-form-item :style="style" prop="provicevalue">
				<el-select v-model='dataLink.provicevalue' ref="province" filterable placeholder="省/直辖市-" >
					<el-option
					v-for="item in provice"
					:key="item.item_code"
					:label="item.item_name"
					:value="item.item_code"
					>
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item :style="style" prop="citiesvalue">
				<el-select v-model="dataLink.citiesvalue" ref="city" filterable placeholder="市-" @click.native="choose_city">
					<el-option
						v-for="item in cities"
						:key="item.item_code"
						:label="item.item_name"
						:value="item.item_code"
						>
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item :style="style" prop="quxianvalue">
				<el-select v-model="dataLink.quxianvalue" ref="quxian" filterable placeholder="区/县" @click.native="choose_quxian">
					<el-option
					v-for="item in quxian"
					:key="item.item_code"
					:label="item.item_name"
					:value="item.item_code"
					>
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item v-if="level3" prop="streetaddress" >
				<el-input v-model="dataLink.streetaddress" placeholder="街道地址" :style="level3style"></el-input>
				<!-- <el-input v-model="dataLink.streetaddress" placeholder="街道地址" @blur="getstreetaddr" :style="level3style"></el-input> -->
			</el-form-item>
		</el-form>
		<!-- </div> -->
	</div>
</template>

<script>
import DATA from 'src/utils/city.json'
const _data = DATA.datas
export default {
  name: 'Datalinkage',
  // 可以使用的属性 width，根据需求选择设置的宽度
  props: {
    width: {
      type: String,
      default: '15%'
    },
    level3width: {
      type: String,
      default: '25%'
    },
    // 是否显示街道地址
    level3: {
      type: Boolean,
      default: true
    },
    linkagedata: {}
  },
  data() {
    return {
      selected: '',
      // 每个列表中的数据
      provice: [],
      cities: [],
      quxian: [],
      // 当前选中的数据 item code
      dataLink: {
        provicevalue: '',
        citiesvalue: '',
        quxianvalue: '',
        streetaddress: ''
      },
      // 继续按街道地址属性
      computedStreetaddr: '',
      linkformrules: {
        streetaddress: [
          { required: true, message: '请输入街道地址', trigger: 'blur' }
        ],
        provicevalue: [
          { required: true, message: '请选择省/直辖市', trigger: 'change' }
        ],
        citiesvalue: [
          { required: true, message: '请选择市', trigger: 'change' }
        ],
        quxianvalue: [
          { required: true, message: '请选择区县', trigger: 'change' }
        ]
      },
      p_label: '',
      c_label: '',
      q_label: '',
      address: ''
    }
  },
  methods: {
    // 获取省级数据
    getData() {
      for (const key of _data) {
        if (key.item_code.substr(2, 4) === '0000') {
          this.provice.push(key)
        }
      }
    },
    // 发送地址信息到父组件中，父组件需要监听该事件，获取所需的值
    emmitaddress(msg) {
      this.$emit('emmitaddress', msg)
    },
    // 父组件通过通过ref调用
    getstreetaddr() {
      let res = {}
      console.log(this.$refs.province.selectedLabel)
      const _this = this
      this.$refs.datalinkform.validate((valid) => {
        if (valid) {
          const address = !this.level3 ? `${_this.$refs.province.query} ${_this.$refs.city.selectedLabel} ${_this.$refs.quxian.selectedLabel}` : `${_this.$refs.province.query} ${_this.$refs.city.selectedLabel} ${_this.$refs.quxian.selectedLabel} ${_this.dataLink.streetaddress}`
          res = address
        } else {
          res = false
        }
      })
      this.emmitaddress(res)
      return res
    },
    // 选择市,获取市
    choose_city() {
      // console.log(this.provicevalue);
      const val = this.dataLink.provicevalue
      this.cities = []
      if (Number(val)) {
        for (const key of _data) {
          if (key.item_code.substr(0, 2) === val.substr(0, 2) && key.item_code.substr(4, 2) === '00' && key.item_code.substr(3, 3) !== '000') {
            // console.log("key",key);
            this.cities.push(key)
          }
          // 保存省
          if (key.item_code === val) {
            this.p_label = key.item_name
          }
        }
      } else {
        this.p_label = val
      }
      this.streetaddress = ''
    },
    choose_quxian() {
      const val = this.dataLink.citiesvalue
      this.cities = []
      if (Number(val)) {
        for (const key of _data) {
          if (key.item_code.substr(0, 4) === val.substr(0, 4) && key.item_code.substr(4, 2) !== '00') {
            this.quxian.push(key)
          }
          // 保存市
          if (key.item_code === val) {
            this.c_label = key.item_name
          }
        }
      } else {
        this.c_label = val
      }
      this.streetaddress = ''
    }
  },
  created() {
    this.getData()
  },
  computed: {
    style() {
      const style = {}
      if (this.width) {
        style.width = this.width
      }
      return style
    },
    // 第三级菜单的宽度
    level3style() {
      const level3 = {}
      if (this.level3width) {
        level3.width = this.level3width
      }
      return level3
    },
    promtData() {
      return this.linkagedata
    },
    newlevel3Data() {
      return this.linkagedata.streetaddress
    },
    provicevalue() {
      return this.dataLink.provicevalue
    },
    citiesvalue() {
      return this.dataLink.citiesvalue
    },
    quxianvalue() {
      return this.dataLink.quxianvalue
    }
  },
  watch: {
    // 监听provicevalue数据变化
    /*
    *{"item_code":"110000","item_name":"北京市"}
    *根据item_code来找出对应行政区域
    *eg : 北京市 11000  其下行政区域 110XXX
    */
    provicevalue: {
      handler: function(val, oldval) {
        this.cities = []
        if (this.linkagedata === '') {
          this.dataLink.citiesvalue = ''
        }
      }
    },
    // 监听市级变化
    citiesvalue: {
      handler: function(val, oldval) {
        this.quxian = []
        if (this.linkagedata === '') {
          this.dataLink.quxianvalue = ''
        }
      }
    },
    quxianvalue: {
      handler: function(val, oldval) {
        // 地址信息
        this.dataLink.streetaddress = ''
        let address = ''
        const _data = this.quxian
        if (Number(val)) {
          for (const key of _data) {
            if (key.item_code === this.quxianvalue) {
              // 保存区县
              this.q_label = key.item_name
            }
          }
        } else {
          this.q_label = val
        }
        address = `${this.p_label} ${this.c_label} ${this.q_label}`
        // console.log(address);
        if (this.level3) {
          address = address + ' ' + this.dataLink.streetaddress
        }
        this.address = address
        // console.log(this.address);
        // 清空街道信息
        this.emmitaddress(address)
      }
    },
    promtData: {
      handler(val, old) {
        if (!val) return
        const data = val.split(' ')
        const newdata = []
        data.forEach(ele => {
          if (ele) {
            newdata.push(ele)
          }
        })
        this.dataLink.provicevalue = newdata[0]
        this.dataLink.citiesvalue = newdata[1]
        this.dataLink.quxianvalue = newdata[2]
        if (newdata[3] !== 'undefined') {
          this.computedStreetaddr = newdata[3]
        } else {
          this.computedStreetaddr = ''
        }
        // console.log("newdata",this.computedStreetaddr);
      },
      deep: true,
      immediate: true
    },
    computedStreetaddr: {
      handler(val, old) {
        this.dataLink.streetaddress = val
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
	@import 'src/style/mixin';
	.porcityarea_select{
		width: 100%
	}
</style>
