<template>
  <div id="main">
    <LoginNav></LoginNav>
    <div id="Login">
      <div id="loginHead">
        <div class="headImage">
          <img width="100%"
               height="100%"
               src="../../../assets/people.png" />
        </div>
      </div>
      <Form ref="formInline"
            :model="formInline"
            :rules="ruleInline"
            inline
            id="from">
        <div>
          <FormItem prop="user">
            <Input type="text"
                   v-model="formInline.user"
                   placeholder="请输入邮箱/用户名"
                   size="large"
                   :autofocus="true"
                   @keyup.enter.native="handleSubmit('formInline')">
            <Icon type="ios-person-outline"
                  slot="prepend"></Icon>
            </Input>

          </FormItem>
        </div>
        <div>
          <FormItem prop="password">

            <Input type="password"
                   v-model="formInline.password"
                   placeholder="输入密码"
                   size="large"
                   @keyup.enter.native="handleSubmit('formInline')">
            <Icon type="ios-lock-outline"
                  slot="prepend"></Icon>
            </Input>
          </FormItem>
        </div>
        <div>
          <FormItem prop="code">
            <Input type="text"
                   v-model="formInline.code"
                   placeholder="验证码"
                   style="width:75px"
                   size="large"
                   @keyup.enter.native="handleSubmit('formInline')">
            </Input>
          </FormItem>
          <div class="codeImg">
            <img src="//t.cn/RCzsdCq"
                 width="100%"
                 height="100%" />
          </div>
        </div>
        <div>
          <FormItem style="width:100%">
            <Button type="primary"
                    @click="handleSubmit('formInline')"
                    long>登录</Button>
          </FormItem>
          <Button type="default"
                  long>
            <router-link to="/Register">立即注册</router-link>
          </Button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import LoginNav from '../components/LoginNav'
export default {
  components: {
    LoginNav
  },
  data () {
    return {
      formInline: {
        user: '',
        password: '',
        code: '',
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名/邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '您的密码长度至少是6位', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { type: 'string', min: 4, message: '验证码长度为4位', trigger: 'blur' }
        ],

      }
    }
  },
  methods: {
    handleSubmit (name) {
      console.log(this.formInline)
      // console.log(Object.values(this.formInline))
      // console.log(Object.values(this.formInline).every(item => item))
      this.$refs[name].validate((valid) => {
        if (valid) {
          // 检查是否有空值
          if (Object.values(this.formInline).every(item => item)) {
            this.$fetch('').then(res => {
              console.log(res)
              if (res) {
                this.$Message.success('登录成功')
              } else {
                this.$Message.error(res.msg)
              }
            })
          }
          //   this.$Message.success('登录成功');
        } else {
          this.$Message.error('请检查页面提示');
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#main {
  width: 100%;
  .tc();
  #Login {
    position: relative;
    width: 60%;
    height: 454px;
    #loginHead {
      border-bottom: 1px solid #eee;
      padding-right: 15px;
      .tc();
      .headImage {
        .ib();
        width: 70px;
        height: 70px;
      }
    }
    .ib();
    .box-check();
    #from {
      .cscenter();
      .codeImg {
        .ib();
        width: 126px;
        height: 36px;
      }
    }
  }
}
</style>
