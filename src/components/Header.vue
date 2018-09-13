<template>
	<div class="web-header">
			<div class='header-center margin'>
				<div class="grid-content header-left left">
          <div class="grid-content header-left">
            <router-link to="/index"> <img src="/static/image/logo_head.png" />&emsp;<span >联合金控特殊资产管理系统</span></router-link>
          </div>
				</div>
				<div class="grid-content header-right right clear">
					<span class="userName left">
						&nbsp;{{username}}&nbsp;
					</span>
					<div class="left head_msg cursorpointer" @click="gotoMsg">
						<el-badge :value="3" :max="10" class="item">
							<i class="iconfont icon-message"></i>
						</el-badge>
					</div>
					<i class="left iconfont icon-set" @click="change"></i>
					<i class="left iconfont icon-checkout" @click="logout"></i>
				</div>
			</div>
	</div>
</template>
<script>
  import { removeToken, getName } from 'src/utils/auth'
  export default {
    data() {
      return {
        activeIndex: '',
        isFixed: false,
        isCollapse: false,
        username: ''
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      gotoMsg() {
        this.$router.push('/messages')
      },
      //  菜单回掉函数
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
        this.activeIndex = keyPath[0]
        // this.$router.push(`/index`);
      },
      //  设置
      change() {
        this.$router.push('/change')
      },
      //  退出，需要清楚tocken信息
      logout() {
        removeToken()
        // 暂时hack方法:点击退出登陆后再登陆,如若退出之前不是在index,那么登陆成功后页面将会
        // 出现地址栏是正确的路由,但是view-router渲染出来的则是退出登陆之前的页面,坑爹
        this.$router.push('/')
      },
      handlescroll(e) {
        if (document.documentElement.scrollTop > 110) {
          this.isFixed = true
        } else if (document.documentElement.scrollTop <= 0) {
          this.isFixed = false
        }
      }
    },
    created() {
      this.activeIndex = '/' + this.$route.path.split('/')[1]
      this.username = getName()
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
<style lang='scss'>
@import "src/style/mixin";
.headerfixed {
  // position: fixed;
  z-index: 9999;
}
.headerhide {
  @include wh(100%, 110px);
  border: 1px solid #000;
}
.el-menu--popup-bottom-start {
  //不能写在本文件任何一个div下  绝对定位的 全局
  margin-top: 1px;
}
.web-header {
  // margin-top: 10px;
  height: 70px;
  width: 100%;
  @include borderRadius(2px);
  box-shadow: 0px 2px 10px 2px rgba(150, 162, 187, 0.08);
  @include c_border-item(bottom, 1px, solid, $baseColor);
  background-color: $baseColor;
  overflow: hidden;
  .header-center {
    width: 100%;
    .header-left,
    .header-right {
      height: 70px;
      line-height: 70px;
    }
    .header-right {
      .userName {
        cursor: pointer;
        padding-right: 20px;
        @include sc(16px, #ffeccf);
        display: inline-block;
        height: 70px;
        line-height: 70px;
      }
      .iconfont {
        cursor: pointer;
        @include sc(20px, #ffeccf);
        &:nth-of-type(1) {
          padding-right: 30px;
        }
      }
      .el-badge__content {
        background-color: #cb4b4c;
        border: none;
      }
      // 更改消息的位置显示
      .el-badge__content.is-fixed {
        top: 25px;
        right: 36px;
      }
    }
    .header-left {
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
  .head_msg {
    margin-top: -1px;
    .el-badge {
      @include sc(14px, #ffeccf);
    }
  }

  .mc-nav {
    @include l_width();
    height: 70px;
    // 修改导航默认样式，激活的bottom-border跟随文字大小
    .el-menu--horizontal .el-menu-item {
      border-bottom: none;
    }
    .el-menu-item.is-active {
      span {
        color: $baseColor;
        border-bottom: 2px solid $baseColor;
        padding-bottom: 22px;
      }
    }
    .el-submenu.is-active .el-submenu__title {
      height: 70px;
      line-height: 70px;
      span {
        color: $baseColor;
        border-bottom: 2px solid $baseColor;
        display: inline-block;
        height: 70px;
        line-height: 70px;
      }
    }
    //nav的宽度
    .el-menu--horizontal .el-menu-item {
      width: 14%;
      text-align: center;
      height: 70px;
      line-height: 70px;
      // background-color: $baseBgColor;
      span {
        @include sc(16px, #666);
      }
    }
    .el-menu--horizontal {
      border-bottom: none;
      height: 70px;
      line-height: 70px;
      background-color: $baseBgColor;
      .el-submenu {
        .el-submenu__title {
          text-align: center;
          border-bottom: none;
          height: 70px;
          line-height: 70px;
          background-color: $baseBgColor;
          span {
            @include sc(16px, #666);
          }
        }
      }
    }
    // 更改hover样式
    .el-menu--horizontal .el-menu-item:hover,
    .el-menu--horizontal .el-submenu__title:hover {
      background-color: #ffb440;
      span,
      i {
        color: #fff;
      }
    }
    .el-menu--horizontal .el-menu-item:focus {
      background-color: transparent;
      span {
        color: #666;
      }
    }
    //nav的宽度 end
    // 修改导航默认样式，激活的bottom-border跟随文字大小 end
  }
}
</style>
