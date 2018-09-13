<template>
    <div>
        <el-button @click="test">单击</el-button>
        <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
        <DataLinkage></DataLinkage>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas. Aspernatur nulla repellendus saepe tempore vel soluta laboriosam dolorem, nostrum odio explicabo rem architecto! Nam eveniet quis unde consectetur. Iusto!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex, magnam illo, perferendis ipsam consequatur a placeat alias laborum nobis autem eum suscipit odio animi beatae reiciendis nostrum expedita provident.</p>
    </div>
</template>

<script>
import { test } from 'api/index'
import DataLinkage from 'components/common/Datalinkage'
import countTo from 'vue-count-to'
export default {
  data() {
    return {
      startVal: 0,
      endVal: 2017
    }
  },
  components: {
    countTo,
    DataLinkage
  },
  computed: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.startVal = 2000
      this.endVal = 50000
    }, 2000)
  },
  methods: {
    test() {
      test()
        .then(res => {
          console.log('res----', res.data.data.data)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
