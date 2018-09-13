<template>
	<div class="login-wrap">
		<div class="mc-login">
			<div class="clear margin logo">
				<img class="login_logo" src="/static/image/logo.png" alt="">
				<img class="login_logo_text" src="/static/image/logo_text.png" alt="">
			</div>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
				<el-form-item prop="username">
					<el-input v-model="ruleForm.username" tabindex="1" ref='refusername' placeholder="请输入用户名">
						<template slot="prepend">用户名</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" placeholder="请输入密码" tabindex="2" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
						<template slot="prepend">密&emsp;码</template>
					</el-input>
				</el-form-item>
				<div class="rememberme clear">
					<el-checkbox v-model="rememberme"  class="left remembermeword">记住我</el-checkbox>
					<a class="forgotMm right" href="#">忘记密码?</a>
				</div>
				<div class="login-btn">
					<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				</div>
				<p class='describe'>深圳联合金控风险资产管理有限公司提供技术支持</p>
			</el-form>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      rememberme: false
    }
  },
  methods: {
    ...mapActions(['LoginByUsername']),
    submitForm(formName) {
      const self = this
      self.$refs[formName].validate(valid => {
        if (valid) {
          //  localStorage.setItem('mc_username',self.ruleForm.username);
          //  用户名登陆返回的是一个promise的对象，因此要在resolve reject中处理相应逻辑
          //  console.log(this.generateMd5(`self.ruleForm.password${this.salt}`));
          const data = Object.assign({}, this.ruleForm)
          data.password = this.$md5(data.password)
          self.$router.push('/index')
          // 暂时不用登陆
          /*
          this.LoginByUsername(data).then(
            resolve => {
              if (resolve.data.code === 0) {
                this.$message({
                  message: '登陆成功',
                  type: 'success',
                  duration: 1 * 1000
                })
                self.$router.push('/index')
              }
            },
            reject => {
              this.$message({
                message: '用户名或密码错误',
                type: 'error',
                duration: 1 * 1000
              })
            }
          )
          */
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  mounted() {
    this.$refs.refusername.focus()
  }
}
</script>

<style lang="scss">
@import "src/style/mixin";
.login-wrap {
  width: 100%;
  height: 100%;
  background: url("/static/image/login_bg.jpg") no-repeat;
  //盒子居中对齐
  .mc-login {
    width: 400px;
    height: 500px;
    background-color: $baseBgColor;
    //居中
    @include center();
    text-align: center;
    .logo {
      @include wh(200px, 45px);
      margin-top: 60px;
      margin-bottom: 50px;
      .login_logo {
        @include wh(41px, 45px);
      }
      .login_logo_text {
        @include wh(84px, 36px);
        padding-left: 5px;
        padding-bottom: 10px;
      }
    }

    //更改默认登陆输入框的样式
    .el-input {
      margin-left: 41px;
      .el-input-group__prepend {
        background-color: $baseBgColor;
        border: none;
        border-bottom: 1px solid #ccc;
        border-radius: 0;
        position: relative;
        left: 16px;
        padding-left: 0;
        color: #999;
      }
      input {
        height: 50px;
        width: 218px;
        border: none;
        border-bottom: 1px #ccc solid;
        border-radius: 0;
        background-color: $baseBgColor;
        padding-left: 20px;
      }
    }
    //错误信息提示
    .el-form-item__error {
      left: 120px;
      // color:$baseColor;
    }
    //登陆按钮
    .login-btn {
      width: 284px;
      margin: 0 auto;
      button {
        width: 100%;
        height: 50px;
        // padding-left: 50px;
      }
      span {
        color: #fff;
      }
    }
    .rememberme {
      width: 284px;
      height: 30px;
      line-height: 30px;
      margin: 30px auto;
      .remembermeword {
        span {
          color: #dadada;
        }
      }
      .forgotMm {
        @include sc(14px, #dadada);
      }
    }
    .describe {
      margin-top: 30px;
      @include sc(12px, #dadada);
      line-height: 30px;
    }
  }
}
</style>
