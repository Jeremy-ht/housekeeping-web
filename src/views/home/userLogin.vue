<template>
  <div class="login-container">

    <header data-v-28ff4e1e="" class="header">
      <div data-v-28ff4e1e="" class="logo">
        <img class="login-img" data-v-28ff4e1e="" src="http://www.51ejz.com/images/logo.png">

        <!--        <sapn class="login-title">-->
        <!--          大家帮家政-->
        <!--        </sapn>-->
      </div>
    </header>

    <div class="login-div">
      <div class="right-div" v-if="showLoginOr">
        <div class="pwd-login-div">
          <div class="pwd-login">
            <i class="el-icon-user" style="margin-right: 4px;color: #ffb01e;font-size: 20px;"></i>
            账号密码登录
          </div>
        </div>

        <!-- 登录表单 -->
        <div class="login-form">

          <el-form ref="loginFormRef" label-width="0"
                   :model="loginForm2" :rules="loginFormRules">
            <!--用户名-->
            <el-form-item prop="username" >
              <el-input class="form-input" prefix-icon="el-icon-s-check" placeholder="用户名"
                        v-model="loginForm2.uname" :autofocus="true"/>
            </el-form-item>

            <!--密码-->
            <el-form-item prop="password">
              <el-input class="form-input" prefix-icon="el-icon-s-goods" type="password"
                        placeholder="密码" v-model="loginForm2.pwd"/>
            </el-form-item>

            <!-- 登录按钮 -->
            <el-form-item>
              <div class="form-btn" @click="login">
                <div class="login-span">登 &nbsp;&nbsp;&nbsp;录</div>
              </div>
            </el-form-item>

            <div class="register-go">
              <a herf="#" class="register-go-a" @click="drawer = !drawer">
                注册
              </a>
            </div>
          </el-form>


        </div>
      </div>
    </div>


    <!-- ========================= -->
    <!-- 注 册 -->
    <!-- ========================= -->
    <el-drawer title="注 册"
               :visible.sync="drawer"
               :direction="direction"
               :before-close="handleClose"
               :with-header="false"
               show-close>

      <div v-if="showLoginOr">

        <div class="register-title">注 册</div>

        <div class="register-form">

          <el-form ref="loginFormRef"
                   label-position="right"
                   :model="registerForm"
                   :rules="loginFormRules2"
          class="register-form-item">

            <!--用户名-->
            <el-form-item class="center-div" prop="uname" label="用户名" label-width="80px" >
              <el-input class="register-item" placeholder="用户名" v-model="registerForm.uname"
                        :autofocus="true"/>
            </el-form-item>

            <!--密码-->
            <el-form-item class="center-div" prop="pwd" label="密码" label-width="80px">
              <el-input class="register-item" type="password" placeholder="密码"
                        v-model="registerForm.pwd"/>
            </el-form-item>

            <!--手机号-->
            <el-form-item class="center-div" prop="phone" label="手机号" label-width="80px">
              <el-input class="register-item" placeholder="手机号" v-model="registerForm.phone"/>
            </el-form-item>

            <el-form-item class="center-div" label="性别" label-width="80px">
              <el-radio-group v-model="registerForm.sex">
                <el-radio label="1">男</el-radio>
                <el-radio label="0">女</el-radio>
              </el-radio-group>
            </el-form-item>

            <!-- 登录按钮 -->
            <el-form-item style="margin:20px auto">
              <div class="form-btn2" @click="registerGo">
                <span class="login-span">注 &nbsp;&nbsp;&nbsp;册</span>
              </div>
            </el-form-item>
          </el-form>

        </div>
      </div>

    </el-drawer>

  </div>
</template>

<script>
  import {userLogin, addUser} from '../../api/common'

  export default {
    name: 'userLogin',
    data() {

      // 验证手机号的规则
      let checkMobile = (rule, value, cb) => {
        // 验证手机号的正则表达式
        const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        if (regMobile.test(value)) {
          return cb()
        }
        cb(new Error('请输入合法的手机号'))
      }

      return {

        drawer: false,
        direction: 'rtl',


        //表单数据绑定
        loginForm2: {
          uname: '',
          pwd: ''
        },
        //表单验证
        loginFormRules: {
          username:
            [
              {required: true, message: '请输入用户名', trigger: 'blur'},
              {min: 1, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'}
            ],
          password:
            [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
            ]
        },

        showLoginOr: true,
        //表单验证
        loginFormRules2: {
          uname:
            [
              {required: true, message: '请输入用户名', trigger: 'blur'},
              {min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'}
            ],
          pwd:
            [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
            ],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {validator: checkMobile, trigger: 'blur'}
          ]
        },
        // 注册表单
        registerForm: {
          uname: '',
          pwd: '',
          sex: '1',
          phone: '',
          email: ''
        }

      }
    },
    created() {
      this.init()
    },
    methods: {

      handleClose(done) {

      },

      async init() {
        if (this.$route.params.id == 2)
          this.showLoginOr = false

      },

      async login() {
        if (this.loginForm2.uname.trim() == '') {
          this.$message({message: '用户名不能为空', type: 'error', duration: 1700})
          return
        }

        if (this.loginForm2.pwd.trim() == '') {
          this.$message({message: '密码不能为空', type: 'error', duration: 1700})
          return
        }
        await userLogin(this.loginForm2).then(res => {
          if (res.success) {
            this.$message({message: `欢迎 ${res.data.data.uname} 登录景区网站`, type: 'success', duration: 2000})
            res.data.data.pwd = ''
            res.data.data.salt = ''
            window.localStorage.setItem('UserInfo', JSON.stringify(res.data.data))
            this.$router.push({path: '/scenery/home'})
          } else {
            this.$message({message: res.message, type: 'error', duration: 1700})

          }

        })

      },

      async registerGo() {
        if (this.registerForm.uname.trim() == '') {
          this.$message({message: '用户名不能为空', type: 'error', duration: 1700})
          return
        }

        if (this.registerForm.pwd.trim() == '') {
          this.$message({message: '密码不能为空', type: 'error', duration: 1700})
          return
        }

        if (this.registerForm.phone.trim() == '') {
          this.$message({message: '手机号不能为空', type: 'error', duration: 1700})
          return
        }

        await addUser(this.registerForm).then(res => {
          if (res.success) {
            this.$message({message: res.message, type: 'success', duration: 2000})
            // res.data.data.pwd = ''
            // res.data.data.salt = ''
            // window.localStorage.setItem('UserInfo', JSON.stringify(res.data.data))
            this.loginForm2.uname = res.data.data
            console.log(res.data.data)
            this.showLoginOr = true
          } else {
            this.$message({message: res.message, type: 'error', duration: 2000})

          }
        })

      },

      //重置
      resetLoginForm() {
        this.$refs.loginFormRef.resetFields()
      },

      //重置
      resetLoginForm2() {
        this.$refs.loginFormRef.resetFields()
      }

    }
  }
</script>

<style scoped>

  .login-container {
    /*background: url("../../assets/housekeeping/user-login.jpg") no-repeat center;*/
    /*background-size: contain;*/
    /*   -webkit-background-size: cover;*/
    /*-o-background-size: cover;*/
    /*   background-position: center 0;*/

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    /*text-align: center;*/
    display: flex;
    flex-direction: column;
  }

  .header {
    height: 60px;
    padding: 0 0 0 30px;
    background: hsla(0, 0%, 100%, .7);
    /*box-shadow: 0 2px 4px 0 rgba(0,0,0,.03);*/
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .logo {
    display: flex;
  }

  .login-div {
    background: url("../../assets/housekeeping/user-login.jpg") no-repeat center;
    background-size: contain;
    width: 100%;
    height: 480px;
    /*background-color: white;*/
    /*margin: auto 0;*/
    /*border-radius: 12px;*/
    display: flex;
    flex-direction: row-reverse;
  }

  .login-img {
    width: 80px;
    height: 40px;
    /*margin-top: 10px;*/
    margin: auto 10px;
  }

  .login-title {
    line-height: 50px;
    margin-left: 40px;
    font-size: 20px;
    font-weight: 500;
    color: #ff7225;
  }

  .left-image {
    width: 300px;
    height: 100%;

  }

  .right-div {
    margin: auto 100px auto 0;
    width: 300px;
    height: 280px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 6px;
  }

  .pwd-login-div {
    /*margin: auto;*/
    width: 300px;
    padding-top: 16px;
    padding-bottom: 16px;
    /*height: 90px;*/
    border-bottom: solid 1px #ff7225;
  }

  .pwd-login {
    text-align: center;
    font-size: 14px;
    color: #73777a;
  }

  .login-form {
    margin: 20px auto 0 auto;
    display: flex;
  }

  .form-input {
    width: 200px;
    height: 30px;
    margin-top: 4px;
    display: flex;
    border-radius: 3px;
  }

  /deep/ .el-input__inner {
    height: 30px;
  }

  /deep/ .el-input__icon {
    line-height: 30px;
  }

  /deep/ .el-form-item__content {
    line-height: 30px;
  }

  .form-btn {
    margin-top: 12px;
    width: 200px;
    height: 30px;
    background-color: #ff7225;
    cursor: pointer;
    display: flex;
    border-radius: 3px;
    line-height: 30px;
    text-align: center;
  }

  .login-span {
    color: white;
    margin: auto;
    font-size: 15px;
    font-weight: 500;
  }

  .register-go {
    /*margin-top: 2px;*/
    display: flex;
    flex-direction: row-reverse;
  }

  .register-go-a {
    font-size: 14px;
  }

  .register-go-a:hover {
    color: #ff7225;
  }

  .register-form {
    margin: 0 auto;
  }

  /deep/ .el-radio__input.is-checked + .el-radio__label {
    color: #ff7225;
  }

  /deep/ .el-radio__input.is-checked .el-radio__inner {
    border-color: #ff7225;
    background: #ff7225;
  }

  /deep/ .el-input__inner:hover {
    border-color: #ff7225;
  }

  /deep/ .el-input__inner:focus {
    border-color: #ff7225;
  }

  .register-title{
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  /deep/ .el-form-item__label{
    line-height:30px;
  }

  .register-item{
    width: 300px;
    height: 44px;

  }

  .form-btn2 {
    margin: 12px auto;
    width: 300px;
    height: 30px;
    background-color: #ff7225;
    cursor: pointer;
    border-radius: 3px;
    line-height: 30px;
    text-align: center;
  }
  /*.login-form{*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*}*/
  .center-div{
    margin: 10px  auto;
  }

  .register-form-item{
    display: flex;
    flex-direction: column;
  }

</style>
