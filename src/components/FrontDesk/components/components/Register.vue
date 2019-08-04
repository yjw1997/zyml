<template>
  <div id="main">
    <LoginNav></LoginNav>
    <div id="register">
      <Tabs value="name1"
            class="tc"
            type="card"
            width="100%">
        <TabPane :label="label1"
                 name="name1">
          <div class="ib fr"
               style="position: absolute;right: 15px;">
            <router-link to="/Login">使用已有账号登录</router-link>
          </div>
          <Form ref="formInline"
                :model="formInline"
                :rules="ruleInline"
                inline
                id="from"
                :label-width="100">
            <div>
              <FormItem prop="username"
                        label="登录名称:">
                <Input type="text"
                       v-model="formInline.username"
                       placeholder="请输入登录账号"
                       size="large"
                       :autofocus="true"
                       @keyup.enter.native="handleSubmit('formInline')" />

              </FormItem>
              <FormItem prop="nickname"
                        label="用户名称:">
                <Input type="text"
                       v-model="formInline.nickname"
                       placeholder="用户昵称"
                       size="large"
                       :autofocus="true"
                       @keyup.enter.native="handleSubmit('formInline')" />

              </FormItem>
            </div>
            <div>
              <FormItem prop="password"
                        label="登陆密码:">
                <Input type="password"
                       v-model="formInline.password"
                       placeholder="登陆密码"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline')" />
              </FormItem>
              <FormItem prop="respassword"
                        label="确认密码">
                <Input type="password"
                       v-model="formInline.respassword"
                       placeholder="请再次输入您的密码"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline')" />
              </FormItem>
            </div>
            <div>
              <FormItem prop="contact"
                        label="联系人:">
                <Input type="text"
                       v-model="formInline.contact"
                       placeholder="联系人"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline')" />
              </FormItem>
              <FormItem prop="email"
                        label="电子邮箱:">
                <Input type="email"
                       v-model="formInline.email"
                       placeholder="email"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline')" />
              </FormItem>
            </div>
            <div>
              <FormItem prop="phone"
                        label="联系电话:">
                <Input type="tel"
                       v-model="formInline.phone"
                       placeholder="输入手机号"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline')" />
              </FormItem>
              <FormItem prop="unit"
                        label="所属单位:">
                <Select v-model="formInline.unit"
                        placeholder="请选择单位"
                        style="width:186px">
                  <Option value="数办局">数办局</Option>
                  <Option value="委办局">委办局</Option>
                </Select>
              </FormItem>
            </div>
            <div>
              <FormItem style="width:25%">
                <Button type="primary"
                        @click="handleSubmit('formInline')"
                        long>立即注册</Button>
              </FormItem>
            </div>
          </Form>
        </TabPane>
        <TabPane :label="label2"
                 name="name2">
          <div class="ib fr">
            <router-link to="/Login">使用已有账号登录</router-link>
          </div>
          <Form ref="formInline2"
                :model="formInline2"
                :rules="ruleInline2"
                inline
                :label-width="120">
            <div class="p15">无法提供营业执照等必要信息的社会组织请联系<span style="color:red"> 010-63881240</span></div>
            <div style="width:60%"
                 class="ib">
              <FormItem prop="email"
                        label="注册邮箱:">
                <Input type="email"
                       v-model="formInline2.email"
                       placeholder="请输入邮箱"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="username"
                        label="管理员登录名:">
                <Input type="text"
                       v-model="formInline2.username"
                       placeholder="请输入登录名"
                       size="large"
                       :autofocus="true"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="password"
                        label="登陆密码:">
                <Input type="password"
                       v-model="formInline2.password"
                       placeholder="请输入密码"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="respassword"
                        label="确认密码">
                <Input type="password"
                       v-model="formInline2.respassword"
                       placeholder="请再次输入您的密码"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="contact"
                        label="联系人姓名:">
                <Input type="text"
                       v-model="formInline2.contact"
                       placeholder="请输入联系人姓名"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="phone"
                        label="联系电话:">
                <Input type="tel"
                       v-model="formInline2.phone"
                       placeholder="请输入联系人手机号"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="companyName"
                        label="单位名称:">
                <Input type="tel"
                       v-model="formInline2.companyName"
                       placeholder="请输入单位名称"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="orgCode"
                        label="组织机构代码:">
                <Input type="text"
                       v-model="formInline2.orgCode"
                       placeholder="组织机构代码"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="region"
                        label="所在区域:">
                <Cascader :data="regionData"
                          v-model="formInline2.region"
                          style="width:250px"></Cascader>
              </FormItem>
              <FormItem prop="address"
                        label="详细地址:">
                <Input type="text"
                       v-model="formInline2.address"
                       placeholder="请输入单位具体地址"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="unithomepage"
                        label="单位主页:">
                <Input type="text"
                       v-model="formInline2.unithomepage"
                       placeholder="请输入单位具体地址"
                       size="large"
                       @keyup.enter.native="handleSubmit('formInline2')"
                       style="width:250px" />
              </FormItem>
              <FormItem prop="license"
                        label="营业执照:">
                <!-- <Input
                  type="text"
                  v-model="formInline2.license"
                  placeholder="请输入单位具体地址"
                  size="large"
                  @keyup.enter.native="handleSubmit('formInline2')"
                  style="width:250px"
                /> -->
                <Upload type="drag"
                        action="//jsonplaceholder.typicode.com/posts/"
                        :format="['jpg','jepg','png','gif'] "
                        :max-size="5120"
                        :on-format-error="handleFormatError"
                        :on-exceeded-size="handleMaxSize"
                        :on-success="handleSuccess"
                        :before-upload="handleBeforeUpload"
                        multiple>
                  <div style="padding: 20px 0;width:250px">
                    <Icon type="ios-cloud-upload"
                          size="40"
                          style="color: #3399ff"></Icon>
                    <p solt="tip">可接受格式为:jpg、jepg、png、gif、图像大小不得超过5M</p>
                    <p solt="tip">,注:单位名称必须与营业执照上一致</p>
                  </div>
                </Upload>

              </FormItem>
              <div>
                <FormItem prop="code"
                          label="验证码:">
                  <Input type="text"
                         v-model="formInline2.code"
                         placeholder="验证码"
                         style="width:75px"
                         size="large"
                         @keyup.enter.native="handleSubmit2('formInline2')">
                  </Input>
                </FormItem>
                <div class="codeImg">
                  <img src="//t.cn/RCzsdCq"
                       width="100%"
                       height="100%" />
                </div>
              </div>
            </div>
            <div>
              <FormItem style="width:25%">
                <Button type="primary"
                        @click="handleSubmit2('formInline2')"
                        long>立即注册</Button>
              </FormItem>

            </div>
          </Form>
        </TabPane>
      </Tabs>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
import LoginNav from '../components/LoginNav'
export default {
  name: 'Register',
  components: {
    LoginNav
  },
  data () {
    // 对确认密码的单独验证
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formInline.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    const validatePassCheck2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formInline2.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      fileList: [],
      upload: false,
      regionData: [{
        value: 'beijing',
        label: '北京',
        children: [
          {
            value: 'gugong',
            label: '故宫'
          },
          {
            value: 'tiantan',
            label: '天坛'
          },
          {
            value: 'wangfujing',
            label: '王府井'
          }
        ]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'fuzimiao',
                label: '夫子庙',
              }
            ]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '拙政园',
              },
              {
                value: 'shizilin',
                label: '狮子林',
              }
            ]
          }
        ],
      }],
      label1: (h) => {
        return h('span', '用户注册')
      },
      label2: (h) => {
        return h('div', '单位注册')
      },
      formInline: {
        username: '',
        nickname: '',
        password: '',
        respassword: '',
        email: '',
        phone: '',
        contact: '',

      },
      ruleInline: {
        username: [
          { required: true, message: '请输入账户名', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '您的密码长度至少是6位', trigger: 'blur' }
        ],
        respassword: [
          { required: true, validator: validatePassCheck, trigger: 'blur' }
        ],
        contact: [
          { required: true, message: '请输入联系人姓名', trigger: 'blur' },
        ],
        email: [
          { type: 'email', required: true, message: '请输入电子邮箱', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ],
        unit: [
          { required: true, message: '请选择单位', trigger: 'blur' },
        ],
        companyName: [
          { required: true, message: '请输入单位名称', trigger: 'blur' },
        ],

      },
      formInline2: {
        username: '',
        nickname: '',
        password: '',
        respassword: '',
        email: '',
        phone: '',
        contact: '',
        orgCode: '',
        region: [],
        address: '',
        unithomepage: '',
        code: '',
      },
      ruleInline2: {
        username: [
          { required: true, message: '请输入账户名', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '您的密码长度至少是6位', trigger: 'blur' }
        ],
        respassword: [
          { required: true, validator: validatePassCheck2, trigger: 'blur' }
        ],
        contact: [
          { required: true, message: '请输入联系人姓名', trigger: 'blur' },
        ],
        email: [
          { type: 'email', required: true, message: '请输入电子邮箱', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ],
        unit: [
          { required: true, message: '请选择单位', trigger: 'blur' },
        ],
        companyName: [
          { required: true, message: '请输入单位名称', trigger: 'blur' },
        ],
        orgCode: [
          { required: true, message: '请输入组织机构代码', trigger: 'blur' },
        ],
        region: [
          { type: 'array', required: true, message: '所在区域', trigger: 'blur' },
        ],
        address: [
          { type: 'string', required: true, message: '请输入详细地址', trigger: 'blur' },
        ],
        unithomepage: [
          { type: 'string', required: true, message: '请输入单位主页', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { type: 'string', min: 4, message: '验证码长度为4位', trigger: 'blur' }
        ],
      },
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    // 用户注册
    handleSubmit (name) {
      console.log(this.formInline)
      // console.log(Object.values(this.formInline))
      // console.log(Object.values(this.formInline).every(item => item))
      this.$refs[name].validate((valid) => {
        // 检查格式输入法
        if (valid) {
          // 检查是否有空值
          if (Object.values(this.formInline).every(item => item)) {
            this.$fetch('').then(res => {
              console.log(res)
              if (res) {
                this.$Message.success('注册成功')
              } else {
                this.$Message.error(res.msg)
              }
            })
          }
        } else {
          this.$Message.error('请检查页面提示');
        }
      })
    },
    // 為节点tabs添加绝对居中样式
    init () {
      document.getElementsByClassName('ivu-tabs-nav')[0].style.width = "100%"
    },

    // 上传文件处理事务
    // 文件格式验证失败时的钩子，返回字段为 file, fileList
    handleFormatError (file) {
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '文件格式:' + file.name + ' 不正确, 可接受格式为:jpg、jepg、png、gif、'
      });
    },
    // 文件超出指定大小限制时的钩子，返回字段为 file, fileList
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '超出文件大小限制',
        desc: '文件  ' + file.name + ' 大小超出 5M.'
      });
    },
    // 文件上传成功时的钩子，返回字段为 response, file, fileList
    handleSuccess (res, file, fileList) {
      console.log(fileList)
      this.fileList = fileList
      console.log(this.fileList.length)
    },
    // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
    handleBeforeUpload () {
      const check = this.fileList.length < 3;
      if (!check) {
        this.$Notice.warning({
          title: '最多只能上传三张图片'
        })
      }
      return check;
    },
    // 单位注册
    handleSubmit2 (name) {
      console.log(this.formInline2)
      var self = this
      // console.log(Object.values(this.formInline))
      // console.log(Object.values(this.formInline).every(item => item))
      this.$refs[name].validate((valid) => {
        // 检查格式输入法
        if (valid) {
          // 检查营业执照是否上传
          if (self.fileList.length > 0) {
            this.$fetch('').then(res => {
              console.log(res)
              if (res) {
                this.$Message.success('注册成功')
              } else {
                this.$Message.error(res.msg)
              }
            })
          } else {
            this.$Message.error('请上传单位营业执照')
          }
        } else {
          this.$Message.error('请检查页面提示')
        }
      })
    },

  }
}
</script>
<style lang="less" scoped>
#main {
  width: 100%;
  .tc();
  #register {
    position: relative;
    width: 60%;
    height: 1080px;
    .ib();
    .box-check();
    .codeImg {
      .ib();
      width: 156px;
      height: 36px;
    }
  }
}
.ivu-tabs-nav {
  padding-left: 0;
  margin: 0;
  float: left;
  list-style: none;
  box-sizing: border-box;
  position: relative;
  transition: transform 0.5s ease-in-out;
}
</style>
