<template>
    <div>
      <el-container class="">
        <el-header class="header" style="height: 70px;">
          <Mcheader></Mcheader>
        </el-header>
        <el-container class="home-main-content">
          <el-aside style="width:200px;">
            <NavBar></NavBar>
          </el-aside>
          <el-container class="content">
            <el-main>
              <Breadcrumb></Breadcrumb>
              <transition name="home_move" mode="out-in"><router-view style="margin-top:20px;"></router-view></transition>
            </el-main>
            <el-footer>
              <Mcfooter></Mcfooter>
            </el-footer>
          </el-container>
        </el-container>
    </el-container>
    </div>
</template>

<script>
  import Mcheader from './Header'
  import Mcfooter from './Footer'
  import Breadcrumb from './common/Breadcrumb'
  import NavBar from './nav'
  export default {
    name: 'home',
    data() {
      return {}
    },
    methods: {
    },
    components: {
      Mcheader,
      Mcfooter,
      Breadcrumb,
      NavBar
    },
    created() {
    },
    watch: {}
  }
</script>

<style lang='scss'>
  @import 'src/style/mixin';
  .header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .home-main-content{
    background: $baseBgColor;
    // margin-top: 12px;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top:70px;
    .content{
      margin-left: 200px;
      width: 100%;
      .el-main{
        overflow: hidden;
      }
    }
    .navbar{
      height: 100vh;
      .el-menu{
        border: none;
      }
    }
    .el-aside{
      position:fixed;
      z-index: 2000;
      top:0;
      left: 0;
      margin-top:70px;
    }
  }

</style>
