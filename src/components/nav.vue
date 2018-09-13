<template>
  <nav class="navbar">
    <div>
      <el-menu default-active="/index" class="el-menu-vertical-demo"  :collapse="isCollapse" router>
        <el-menu-item index="/index">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/claims">
          <i class="el-icon-document"></i>
          <span slot="title">债权管理</span>
        </el-menu-item>
        <el-menu-item index="/borrower">
          <i class="el-icon-setting"></i>
          <span slot="title">账号管理</span>
        </el-menu-item>
        <el-menu-item index="/propertyleads">
          <i class="el-icon-setting"></i>
          <span slot="title">渠道管理</span>
        </el-menu-item>
        <el-menu-item index="/channels">
          <i class="el-icon-setting"></i>
          <span slot="title">结案库</span>
        </el-menu-item>
      </el-menu>
    </div>
  </nav>
</template>

<script>
import { getName } from 'src/utils/auth'
export default {
  data() {
    return {
      activeIndex: '/index',
      isFixed: false,
      isCollapse: false,
      username: ''
    }
  },
  methods: {},
  created() {
    this.activeIndex = '/' + this.$route.path.split('/')[1]
    this.username = getName()
    // console.dir(document.querySelector('html').clientWidth)
    // console.log(this.activeIndex);
  },
  mounted() {
    // window.addEventListener('scroll',this.handlescroll);
  },
  watch: {
    //  监听路由消息
    $route() {
      //  确保跳转子路由后也能显示对应的导航信息
      this.activeIndex = '/' + this.$route.path.split('/')[1]
    }
  },
  computed: {}
}
</script>
<style lang='scss' scoped>
  @import "src/style/mixin";
  .navbar {
  background: $baseColor;
  @include l_card();
  .header-left {
    height: 70px;
    line-height: 70px;
    background: $baseColor;
    padding-left: 16px;
      overflow: hidden;
      span {
        float: left;
        @include sc(14px, #ffeccf);
        padding-left: 10px;
      }
      img {
        float: left;
        vertical-align: middle;
        margin-top: 20px;
      }
    }
  }
</style>
