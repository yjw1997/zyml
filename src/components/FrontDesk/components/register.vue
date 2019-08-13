<template>
  <div id="register"
       class="index">
    <LoginNav></LoginNav>
    <loginMenu style="margin-left:1200px"></loginMenu>
    <div class="registerBox">
      <div class="w70 ib">
        <el-tabs value="first"
                 type="card">
          <el-tab-pane label="个人注册"
                       name="first">

            <el-form :model="registerForm"
                     inline
                     label-width="120px">
              <el-form-item label="登陆名称：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="用户名称：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="登陆密码：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="确认密码：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="联系人：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="电子邮箱：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="联系电话：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="所属单位：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
            </el-form>
            <div style="width:90%;margin-left:36px"
                 class="ib">
              <el-button type="primary"
                         style="width:100%">立即注册</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="单位注册"
                       name="second">
            <div class="registerTitle">无法提供营业执照等不要信息的社会组织请联系001-63881240</div>
            <div class="login">
              <el-button type="text"
                         @click="login">使用已有账号</el-button>
            </div>
            <el-form :model="registerForm"
                     inline
                     label-width="120px">
              <el-form-item label="注册邮箱：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="组织机构代码：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="管理员姓名：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="所在区域：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="密码：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="详细地址：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="确认密码：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="单位主页：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="联系人姓名：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="手机号码：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="营业执照：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="单位名称：">
                <el-input v-model="registerForm.username">
                </el-input>
              </el-form-item>
              <el-form-item label="验证码：">
                <el-input placeholder="验证码"
                          v-model="registerForm.code"
                          style="width:199px">
                  <i slot="prefix"
                     class="el-input__icon el-icon-key"></i>
                </el-input>
                <el-button type="primary"
                           style="margin-left:10px">1234</el-button>
                <el-button type="text"
                           style="margin-left:10px">看不清</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>

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
      registerForm: {
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
    },
    login () {
      this.$router.push({ name: `login` })
    }
  }
}
</script>
<style lang="less" scoped>
#register {
  position: relative;
  background-image: url("../../.././static/img/frontdesk/bannerImg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .registerBox {
    width: 1000px;
    height: 600px;
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
    .registerTitle {
      font-size: 12px;
      font-weight: 400;
      color: rgba(248, 171, 81, 1);
      line-height: 34px;
      .tc();
    }
  }
}
.login {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
