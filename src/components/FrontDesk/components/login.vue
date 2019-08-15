<template>
  <div id="login"
       class="index">
    <LoginNav></LoginNav>
    <loginMenu style="margin-left:1200px"></loginMenu>
    <div class="loginBox">
      <div class="w70 ib">
        <el-form :model="loginForm">
          <el-form-item>
            <el-input placeholder="请输入邮箱/用户名"
                      v-model="loginForm.username">
              <i slot="prefix"
                 class="el-input__icon el-icon-user-solid"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码"
                      v-model="loginForm.password">
              <i slot="prefix"
                 class="el-input__icon el-icon-unlock"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="验证码"
                      v-model="loginForm.code"
                      style="width:199px">
              <i slot="prefix"
                 class="el-input__icon el-icon-key"></i>
            </el-input>
            <el-button type="primary"
                       style="margin-left:10px">1234</el-button>
            <el-button type="text"
                       style="margin-left:10px">看不清</el-button>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="loginForm.checked">下次自动登录</el-checkbox>
            <el-button type="text"
                       class="fr">忘记密码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       style="width:100%">登陆</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="default"
                       style="width:100%"
                       @click="register">立即注册</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>
<script>
import LoginNav from '@fc/loginNav'
import loginMenu from '@fc/loginMenu'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        checked: false
      }

    }
  },
  components: {
    LoginNav, loginMenu
  },
  methods: {
    register () {
      this.$router.push({ name: `register` })
    }
  }
}
</script>
<style lang="less" scoped>
#login {
  position: relative;

  .loginBox {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -250px;
    .box-check();
    background-color: #fff;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../../.././static/img/frontdesk/bannerImg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: blur(5px);
  }
}
</style>
