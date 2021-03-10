<template>
  <div class="login-container">

    <header data-v-28ff4e1e="" class="header">
      <div data-v-28ff4e1e="" class="logo">
        <!--        <img class="login-img" data-v-28ff4e1e="" src="http://www.51ejz.com/images/logo.png">-->
        <svg style="width: 60px;height: 60px;"
             t="1615379048977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1712" width="200" height="200">
          <path
            d="M932.8 443c-18.1-19.1-37.2-37.3-57.1-54.5-18.6-16.2-27.9-34.4-26.9-60.7 1.9-64-0.9-127.6 1.4-191.7 1.4-39.2-26-66.4-53.4-70.3-24.2-3.3-50.2-2.9-74.3 1.9-38.1 8.1-48.3 24.4-51.1 65-0.9 12.9-2.8 25.3-5.1 46.8-20.4-20.6-34.4-36.3-50.2-50.2-63.6-57.4-126.8-62.1-189.1-4.8C313.9 228.4 202.9 335 91.4 440.6c-22.8 22-35.8 70.3-18.1 94.2 13.5 18.2 38.1 29.6 59.5 39.7 14.9 7.2 20.9 14.8 20.9 31.5 0.9 83.6 3.3 167.8 4.6 251.4 0.9 63.1 35.8 100.4 96.6 100.8 164.9 0.5 329.9 0.5 494.3 0 66.9 0 104.1-40.1 103.6-110.4-0.5-66.4-1.4-132.4-1.9-198.8-0.5-55.4 0.5-52.6 50.6-73.6 62.4-26.7 80-79.8 31.3-132.4zM573.6 712.1c-22.8 35.8-43.2 72.6-46.5 117.1-1.4 21.5-16.3 30.1-33.9 25.3-29.3-7.6-59-16.2-85.5-30.6-33.4-18.2-33.4-23.9-20.4-61.7-55.8 16.7-55.8 16.7-82.7-36.8-16.3-32-16.3-33 10.2-55.4 34.8-29.6 69.7-59.7 103.6-90.3 13-11.5 25.6-12.9 39-2.9 36.7 27.2 73.4 54.5 109.6 82.7 23.8 18.2 23.4 26.3 6.6 52.6z m115.7-272.4c-28.3 33-56.2 66.9-85.9 98.9-11.6 12.9-15.8 22.5-7.9 41.1 9.8 24.4 17.7 52.1-3.3 81.3-48.3-37.8-94.8-74.1-143.1-111.4 20.9-21 45.1-30.1 65-23.4 43.2 14.8 61.3-14.8 83.2-40.6 20.9-24.4 41.8-48.7 63.2-72.6 8.8-10 20-20.1 33-8.1 14.4 12.8 4.6 24.3-4.2 34.8z m0 0"
            p-id="1713" fill="#FF6336"></path>
        </svg>

        <span style="line-height: 60px;margin-left: 10px;font-size: 22px;color: #FF6336">
           大家帮家政
        </span>

      </div>
    </header>

    <div class="login-div">
      <div class="right-div" v-if="showLoginOr">
        <div class="pwd-login-div">
          <div class="pwd-login">
            <i class="el-icon-user" style="margin-right: 4px;color: #ffb01e;font-size: 20px;"></i>
            家政后台管理系统
          </div>
        </div>

        <!-- 登录表单 -->
        <div class="login-form">

          <el-form ref="loginFormRef" label-width="0"
                   :model="loginForm" :rules="loginFormRules">
            <!--用户名-->
            <el-form-item prop="username">
              <el-input class="form-input" prefix-icon="el-icon-s-check" placeholder="用户名"
                        v-model="loginForm.username" :autofocus="true"/>
            </el-form-item>

            <!--密码-->
            <el-form-item prop="password">
              <el-input class="form-input" prefix-icon="el-icon-s-goods" type="password"
                        placeholder="密码" v-model="loginForm.password"/>
            </el-form-item>

            <!-- 登录按钮 -->
            <el-form-item>
              <div class="form-btn" @click="login">
                <div class="login-span">登 &nbsp;&nbsp;&nbsp;录</div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {userLogin, addUser, adminLogin} from '../../api/common'

  export default {
    name: 'index',
    data() {

      return {


        //表单数据绑定
        loginForm: {
          username: '',
          password: ''
        },
        //表单验证-->
        loginFormRules: {
          username:
            [
              {required: true, message: '请输入用户名', trigger: 'blur'},
              {min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur'}
            ],
          password:
            [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
            ]
        },

        showLoginOr: true,

      }
    },

    methods: {

      login() {
        if (this.loginForm.username.trim() == '') {
          this.$message({message: '用户名不能为空', type: 'error', duration: 1700})
          return
        }

        if (this.loginForm.password.trim() === '') {
          this.$message({message: '密码不能为空', type: 'error', duration: 1700})
          return
        }
        adminLogin(this.loginForm).then(res => {
          if (res.success) {
            window.localStorage.setItem('AdminInfo', JSON.stringify(res.data.data))
            this.$router.push({path: '/'})
          } else {
            this.$message({message: res.message, type: 'error', duration: 1700})

          }

        })

      },

      //重置
      resetLoginForm() {
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
    padding: 0 0 0 10px;
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

  .register-title {
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  /deep/ .el-form-item__label {
    line-height: 30px;
  }

  .register-item {
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
  .center-div {
    margin: 10px auto;
  }

  .register-form-item {
    display: flex;
    flex-direction: column;
  }

</style>

