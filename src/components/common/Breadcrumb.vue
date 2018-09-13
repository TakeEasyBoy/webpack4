<template>
	<div class='breadcrumb clear'>
		<span class='left currentpos'>您当前的位置：</span>
		<el-breadcrumb class="breadcrew left margin" separator-class="el-icon-arrow-right">
			<el-breadcrumb-item v-for='(item, i) in levelLists[0].title' :key='item'>
				<router-link v-if='item.length-i-1' :to="{path:`${levelLists[1].matched[i]}`}">{{generateTitle(item)}}</router-link>
				<span v-else='item.length-i-1'>{{generateTitle(item)}}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
import { generateTitle } from 'utils/generateTitle'
export default {
  data() {
    return {
      levelLists: {}
    }
  },
  components: {},
  created() {
    this.concatpath()
  },
  computed: {},
  mounted() {},
  watch: {
    $route(to, from) {
      this.concatpath()
    }
  },
  methods: {
    generateTitle,
    concatpath() {
      const path = this.$route.fullPath.split('/')
      // console.log(path);
      const pathLength = path.length
      const matched = this.$route.matched
      const matchedLength = matched.length
      this.levelLists = []
      // 用于存放完整跳转路径
      const fullpath = []
      // 用于存放title
      const titlepath = []
      // this.levelLists = this.$route.fullPath
      for (let i = 0; i < pathLength; i++) {
        if (path[i]) {
          titlepath.push(path[i])
        }
      }
      this.levelLists.push({ title: titlepath })
      // console.log(this.$route.matched)
      for (let i = 1; i < matchedLength; i++) {
        fullpath.push(matched[i].path)
      }
      this.levelLists.push({ matched: fullpath })
      // console.log(this.levelLists);
    }
  }
}
</script>
<style lang='scss' scoped>
@import "src/style/mixin";
.breadcrumb {
  @include wh(1200px, 30px);
  line-height: 30px;
  .breadcrew {
    // @include wh(1200px,30px);
    line-height: 30px;
    .el-breadcrumb__item {
      a {
        @include sc(14px, #999);
      }
    }
  }
  .currentpos {
    @include sc(14px, #999);
  }
}
</style>
