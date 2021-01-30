<template>
  <div class="home-container">

    <!-- 导航 -->
    <div class="home-head">
      <div class="home-div">

        <div class="home-icon">
          <img src="http://www.51ejz.com/images/logo.png">
          <!--          <svg class="icon iconfont" aria-hidden="true">-->
          <!--            <use xlink:href="#icon-tubiaozhizuomoban_fengjing"/>-->
          <!--          </svg>-->
        </div>

        <div class="home-content">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#FFFFFF"
            text-color="#000"
            active-text-color="#ff7225">
            <el-menu-item index="0">首页</el-menu-item>
            <el-menu-item index="1">家政</el-menu-item>
            <el-menu-item index="2">月嫂</el-menu-item>
            <el-menu-item index="5">保姆</el-menu-item>
            <el-menu-item index="3">陪护</el-menu-item>
            <el-menu-item index="4">钟点工</el-menu-item>
            <!--            <el-submenu index="1000">-->
            <!--              <template slot="title" class="more">更多</template>-->
            <!--              <el-menu-item v-for="item in cateList" :index="item.categoryid">-->
            <!--                {{item.categoryname}}-->
            <!--              </el-menu-item>-->
            <!--            </el-submenu>-->

          </el-menu>
        </div>

        <div class="home-search" v-on:keyup.enter="searchGo">
          <!--          <el-input class="home-search-input"-->
          <!--                    placeholder="请输入搜索内容"-->
          <!--                    prefix-icon="el-icon-search"-->
          <!--                    v-model="search"-->
          <!--                    size="small" v-on:keyup.enter="searchGo">-->
          <!--          </el-input>-->
          <el-input placeholder="找我搜索想要的内容吧..." suffix-icon="el-icon-search" v-model="search" class="input-with-select">
            <!--            <el-button slot="append" style="background-color: #ff7225" v-on:keyup.enter="searchGo">搜索</el-button>-->
            <!--            <el-button slot="append" v-on:keyup.enter="searchGo" style="background-color: #888787">搜索</el-button>-->
            <!--            <el-button slot="append" v-on:keyup.enter="searchGo" plain>搜索</el-button>-->
          </el-input>
        </div>
        <!--        <div class="home-text">-->
        <!--          -->
        <!--        </div>-->


        <div class="home-user">

          <div v-if="!showLogin" class="login-text">
            <span class="login" @click="goLogin(1)">登录</span>
          </div>

          <div v-else-if="showLogin" style="display: flex">
            <el-dropdown style="display: flex" @command="handleCommand">
              <img class="login-img" :src="UserInfo.image">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user-solid" command="1">个人中心</el-dropdown-item>
                <el-dropdown-item icon="el-icon-close" command="2">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>

        </div>

      </div>
    </div>

    <!-- 轮播图 -->
    <!--    <div class="rotation" v-show="showIndex == 1">-->
    <!--      <el-carousel trigger="click" height="400px" :interval="3000">-->
    <!--        <el-carousel-item v-for="(item,index) in imageList" :key="index">-->
    <!--          <img :src="item.cover" width="100%" height="100%" class="image-item">-->
    <!--        </el-carousel-item>-->
    <!--      </el-carousel>-->

    <!--    </div>-->


    <div class="backgroud-color" v-show="showIndex == 1">
      <!-- 分类 -->
      <div class="cate-div">

        <div style="width: 100%;height:30px;background-color: #F0F0F0"></div>
        <div class="scenery">
          <div class="cate-content">

            <h1 style="color: #414446;margin: auto;font-size: 38px;">家政服务</h1>
            <p style="color: #555;margin: 12px auto;font-size: 18px;">全方位的服务 让您生活无忧</p>
            <i class="iiii"/>

            <div class="cate-content-item">
              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg1.png) no-repeat 25% 70%;">
                <i/>
                <span>日常保洁</span>
                <p>钟点工/小时工/清洁护理</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg2.png) no-repeat 25% 70%;">
                <i/>
                <span>开荒保洁</span>
                <p>装修硬装结束第一次保洁 新居开荒</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg3.png) no-repeat 25% 70%;">
                <i/>
                <span>家电清洗</span>
                <p>给家电一个全面清洗</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg4.png) no-repeat 25% 70%;">
                <i/>
                <span>深度保洁</span>
                <p>装修硬装结束第一次保洁 新居开荒</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg5.png) no-repeat 25% 70%;">
                <i/>
                <span>搬家</span>
                <p>优质的服务，还您一个温馨的家</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg7.png) no-repeat 25% 70%;">
                <i/>
                <span>擦玻璃</span>
                <p>专业清洗，明亮窗外色</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

            </div>

          </div>

          <div style="width: 100%;height:10px;background-color: #F0F0F0"></div>
          <div class="cate-content">

            <h1 style="color: #414446;margin: auto;font-size: 38px;">特色服务</h1>
            <p style="color: #555;margin: 12px auto;font-size: 18px;">专业 优质 贴心 温馨</p>
            <i class="iiii"/>

            <div class="feature">
              <div class="feature-item">
                <img src="../../assets/housekeeping/spe-serv1.png"/>
                <span>月嫂</span>
              </div>

              <div class="feature-item">
                <img src="../../assets/housekeeping/spe-serv2.png"/>
                <span>保姆</span>
              </div>

              <div class="feature-item">
                <img src="../../assets/housekeeping/spe-serv3.png"/>
                <span>陪护</span>
              </div>

              <div class="feature-item">
                <img src="../../assets/housekeeping/spe-serv4.png"/>
                <span>钟点工</span>
              </div>
            </div>

          </div>

          <div style="width: 100%;height:10px;background-color: #F0F0F0"></div>
          <div class="cate-content" style="border-bottom: solid 2px rgb(233, 85, 19);">
            <h1 style="color: #414446;margin: auto;font-size: 38px;">员工风采</h1>
            <p style="color: #555;margin: 12px auto;font-size: 18px;">明星员工 专业服务</p>
            <i class="iiii"/>

            <div class="user-show">
              <div class="user-item">
                <div
                  style="display:flex;width: 215px; height: 270px;border-left: solid 1px #ebebeb;border-right: solid 1px #ebebeb;">
                  <img src="http://www.51ejz.com/upimages/f2d3687b-4e50-462d-809c-c3f72f4b4ab4.jpg">
                </div>
                <span><b style="cursor: pointer;">赵家群|</b> 安徽</span>
                <i>48岁&nbsp;12年工作经验</i>
              </div>

              <div class="user-item">
                <div
                  style="display:flex;width: 215px; height: 270px;border-left: solid 1px #ebebeb;border-right: solid 1px #ebebeb;">
                  <img src="http://www.51ejz.com/upimages/f2d3687b-4e50-462d-809c-c3f72f4b4ab4.jpg">
                </div>
                <span><b style="cursor: pointer;">赵家群|</b> 安徽</span>
                <i>48岁&nbsp;12年工作经验</i>
              </div>

              <div class="user-item">
                <div
                  style="display:flex;width: 215px; height: 270px;border-left: solid 1px #ebebeb;border-right: solid 1px #ebebeb;">
                  <img src="http://www.51ejz.com/upimages/f2d3687b-4e50-462d-809c-c3f72f4b4ab4.jpg">
                </div>
                <span><b style="cursor: pointer;">赵家群|</b> 安徽</span>
                <i>48岁&nbsp;12年工作经验</i>
              </div>


              <div class="user-item">
                <div
                  style="display:flex;width: 215px; height: 270px;border-left: solid 1px #ebebeb;border-right: solid 1px #ebebeb;">
                  <img src="http://www.51ejz.com/upimages/f2d3687b-4e50-462d-809c-c3f72f4b4ab4.jpg">
                </div>
                <span><b style="cursor: pointer;">赵家群|</b> 安徽</span>
                <i>48岁&nbsp;12年工作经验</i>
              </div>

            </div>

            <div style="margin-bottom: 20px;color:#6e6e6e">
              <span style="color: rgb(233, 85, 19);text-align: center">*</span> 明星员工Top 8
            </div>
          </div>
        </div>

        <div style="width: 100%; height:30px; background-color: #F0F0F0"></div>
      </div>
    </div>


    <div class="backgroud-color2 otherList" v-show="showIndex == 2">
      <div class="cate-div">
        <div class="cate-content2">

          <div class="cate-content-item" v-for="item in otherList">
            <div class="cate-content-item-image">
              <!--图片区域-->
              <img class="image-detail"
                   :src="item.cover"
                   @click="goDetailInfo(item.categoryid, item.id)"/>
            </div>

            <div class="cate-content-item-text" @click="goDetailInfo(item.categoryid, item.id)">
                <span class="cate-content-item-sapn">
                 <span style="font-size: 20px;color:#ef7a82; "> {{item.title }} &nbsp;&nbsp;&nbsp;</span>
                  {{' ' + item.feature}}
                </span>
            </div>

          </div>

        </div>
      </div>
    </div>

    <div class="backgroud-color2 otherList" v-show="showIndex == 3">
      <div class="cate-div2">
        <el-form ref="form" :model="UserInfo" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="UserInfo.uname" disabled/>
          </el-form-item>

          <el-form-item label="手机号">
            <el-input v-model="UserInfo.phone"/>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input v-model="UserInfo.email"/>
          </el-form-item>

          <el-form-item label="注册时间">
            <el-input v-model="UserInfo.creatime" disabled/>
          </el-form-item>

          <el-form-item label="头像">
            <el-upload class="avatar-uploader"
                       action="http://127.0.0.1:9000/upload/updataFile"
                       :show-file-list="false"
                       :on-success="handleAvatarSuccess">
              <img :src="UserInfo.image" class="avatar">
            </el-upload>
            <span style="padding-top: -30px;color: black"><span style="color:red">*</span>点击更换头像</span>

          </el-form-item>
          <el-form-item style="text-align: right">
            <el-button type="primary" @click="updUser">确 定</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>


    <!--    <div class="bottom" v-show="showIndex == 1">-->
    <!--  </div>-->

  </div>
</template>

<script>
  import {
    getCategoryList, getUserList, getSceneryIndex,
    getSceneryList, getrotationList, updUserInfo, getSearchContent
  } from '../../api/common'
  import '../../assets/iconfont/iconfont'

  export default {
    name: 'index',
    data() {
      return {
        activeIndex: '0',
        search: '',
        showLogin: false,

        UserInfo: {
          uname: '',
          image: '',
          phone: '',
          creatime: '',
          email: '',
          id: 0,
          loginway: 0,
          sex: '1'
        },

        // 轮播
        imageList: [],

        // 分类
        cateList: [],

        // 四大分类
        sceneryList: [],
        foodList: [],
        shoppingList: [],
        personList: [],

        // 切换页面数据
        otherList: [],
        showIndex: 1

      }
    },
    created() {
      this.init()

    },
    methods: {
      // 初始化
      async init() {

        // 导航
        // let activeIndex = window.localStorage.getItem('activeIndex')
        // if (activeIndex == undefined ||
        //   activeIndex == null ||
        //   activeIndex == '') {
        //   this.activeIndex = '0'
        // } else {
        //   this.activeIndex = activeIndex
        // }

        // 获取轮播图
        await getrotationList().then(res => {
          if (res.success) {
            this.imageList = res.data.data
          } else {
            this.$message({
              message: '数据获取失败，请刷新重试',
              type: 'error', duration: 2000
            })
          }
        })

        // 是否登录
        let user = JSON.parse(window.localStorage.getItem('UserInfo'))
        if (user == undefined || user == null || user == '') {
          this.showLogin = false
        } else {
          console.log(user)
          this.UserInfo = user
          this.showLogin = true

        }

        // 获取导航菜单  放入更多里面
        let params = {
          pagenum: 1,
          pagesize: 100
        }
        await getCategoryList(params).then(res => {
          if (res.success) {
            this.cateList = res.data.data.filter(cate =>
              cate.categoryid != 1 &&
              cate.categoryid != 2 &&
              cate.categoryid != 3 &&
              cate.categoryid != 4 &&
              cate.categoryid != 5 &&
              cate.categoryid != 10
            )

            console.log(this.cateList)
          }
        })

        // 获取首页四大分类
        await getSceneryIndex().then(res => {
          if (res.success) {
            this.sceneryList = res.data.data.scenery
            this.foodList = res.data.data.food
            this.shoppingList = res.data.data.shopping
            this.personList = res.data.data.person

          } else {
            this.$message({
              message: '数据获取失败，请刷新重试',
              type: 'error', duration: 2000
            })
          }
        })

      },

      async handleSelect(key, keyPath) {
        console.log(key)
        this.otherList = []
        let params = {
          pagenum: 1,
          pagesize: 100
        }
        await getSceneryList(params, key, 1, 0).then(res => {
          if (res.success) {
            this.otherList = res.data.data
          } else {
            this.$message({
              message: '数据获取失败,请刷新!',
              type: 'error', duration: 2000
            })
          }
        })

        if (key != 0) {
          window.localStorage.setItem('activeIndex', key)
          this.showIndex = 2
        } else {
          this.showIndex = 1
        }

      },

      // 搜索
      async searchGo() {
        console.log(a)
        // await getSearchContent(this.search.trim()).then(res => {
        //   if (res.success) {
        //
        //     this.otherList = []
        //     this.activeIndex = '-10'
        //     this.showIndex = 2
        //     this.otherList = res.data.data
        //
        //   } else {
        //     this.$message({
        //       message: '没有您想获取的内容，换点别的试试',
        //       type: 'error', duration: 2300
        //     })
        //   }
        // })

      },

      // 登录
      goLogin(id) {
        this.$router.push('/scenery/userLogin/')
      },

      // 注册
      goRegister() {
        this.$router.push('/scenery/register')
      },

      // 去详情页
      goDetailInfo(categoryid, id) {
        const {href} = this.$router.resolve({path: `/scenery/sceneryInfo/${categoryid}/${id}`})
        window.open(href, '_blank')

      },

      handleCommand(command) {
        if (command == 1) {
          // 个人中心
          this.showIndex = 3
          this.activeIndex = '-1'

        } else {
          // 退出
          window.localStorage.removeItem('UserInfo')
          this.UserInfo = {
            uname: '',
            image: '',
            phone: '',
            creatime: '',
            email: '',
            id: 0,
            loginway: 0,
            sex: '1'
          }
          this.activeIndex = '0'
          this.showIndex = 1
          this.init()
        }

      },
      layoutLogin() {

      },

      updUser() {
        if (this.UserInfo.id == 0) {
          this.$message({message: '修改失败', type: 'error', duration: 1700})
          return
        }

        updUserInfo(this.UserInfo).then(res => {
          if (res.success) {
            window.localStorage.removeItem('UserInfo')
            window.localStorage.setItem('UserInfo', JSON.stringify(res.data.data))
            this.UserInfo = res.data.data
            this.$message({message: '修改成功', type: 'success', duration: 1700})

          }
        })

      },

      // 封面上传成功
      handleAvatarSuccess(res, file) {
        if (res.success) {
          this.UserInfo.image = res.data.location
          window.localStorage.removeItem('UserInfo')
          window.localStorage.setItem('UserInfo', JSON.stringify(this.UserInfo))
          this.UserInfo = JSON.parse(window.localStorage.getItem('UserInfo'))
        } else {
          this.$message({message: '头像上传失败，请重新上传', type: 'error', duration: 1700})
        }

      }

    }
  }
</script>

<style scoped>
  .home-container {
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: #ffffff;
  }

  .home-head {
    /*background-color: #3d3b4f;*/
    display: flex;
    height: 64px;
  }

  .home-div {
    margin: 0 12%;
    display: flex;
    height: 64px;
    width: 76%;
  }

  .el-menu {
    display: flex;
    justify-content: space-around;
  }

  .el-menu-item {
    height: 64px;
    line-height: 64px;
    font-size: 15px;
    /*margin-left: 12px;*/
    /*flex: 1;*/
    /*margin: auto;*/
  }

  .el-submenu {
    height: 64px;
    line-height: 64px;
  }

  /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 64px;
    line-height: 64px;
  }

  /deep/ .el-menu.el-menu--horizontal {
    border-bottom: none;
  }

  /deep/ .el-button.is-plain:focus, .el-button.is-plain:hover {
    background: #FFF;
    border-color: #ff7225;
    color: #ff7225;
  }

  /deep/ .el-input__inner:hover {
    border-color: #ff7225;
  }

  /deep/ .el-input__inner:focus {
    border-color: #ff7225;
  }

  .home-icon {
    /*margin: auto;*/
    width: 8%;
    height: 100%;
  }

  .home-icon img {
    margin-top: 16%;
    margin-right: 10%;
    width: 78px;
    height: 40px;
  }

  .home-content {
    /*margin-left: 40px;*/
    width: 46%;
    margin: auto;
  }

  .home-search {
    width: 26%;
    margin: auto;

  }

  .home-text {
    width: 12%;
    margin: auto;

  }


  .home-search-input {
    width: 90%;
  }

  .home-user {
    width: 10%;
    display: flex;
    justify-content: flex-end;
  }

  .login-text {
    margin: auto;
    color: rgb(233, 85, 19);
    cursor: pointer;
    font-size: 14px;
  }

  .login-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: auto;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 42px;
  }


  /* 轮播图 */
  .rotation {
    margin: 6px 12% 20px;
    display: flex;
    width: 76%;
  }

  .el-carousel {
    width: 100%;
    text-align: center;
    margin: auto;

  }

  .image-item {
    border-radius: 5px;
  }

  /* 推荐 */
  .push-city {
    margin: 0 12% 20px;
    width: 76%;
    display: flex;
    justify-content: space-around;
  }

  .home-item {
    width: 240px;
    height: 100px;
    background-color: #dcece5;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    border-radius: 4px;

  }

  /* 分类 */
  .backgroud-color {
    background-color: #F0F0F0;
    height: 100%;
    width: 100%;
    border-bottom: solid 60px #ffffff;
  }

  .backgroud-color2 {
    /*background-color: #F0F0F0;*/
    height: 100%;
    width: 100%;
  }

  .cate-div {
    margin: 0 12% 20px;
    /*display: flex;*/
    width: 76%;
    background-color: white;
  }

  .cate-div2 {
    margin: 0 20% 20px;
    /*display: flex;*/
    width: 60%;
    background-color: white;
  }

  .iiii {

    display: block;
    margin: auto;
    background: url(../../assets/index-bg.png) no-repeat center;
    width: 70%;
    height: 14px;

  }

  /*.scenery{*/
  /*  margin: 20px 0;*/
  /*}*/

  .cate-text {
    font-size: 20px;
    height: 44px;
    line-height: 44px;
    font-weight: normal;
    position: relative;
    padding-left: 14px;
    color: #333;
  }

  .cate-text:after {
    content: "";
    width: 4px;
    height: 35px;
    background-color: rgb(233, 85, 19);
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
  }

  .cate-content {
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    /*flex-wrap: wrap;*/
    /*justify-content: space-between;*/
  }

  .cate-content-item {
    display: flex;
    margin: 40px auto;
    width: 940px;
    height: 100%;
    /*border: solid 2px #80430a;*/
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .feature {
    display: flex;
    margin: 40px auto;
    width: 940px;
    height: 240px;
    border-top: 2px solid #F7F7F7;
    border-bottom: 2px solid #F7F7F7;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .user-show {
    display: flex;
    margin: 40px auto;
    width: 100%;
    height: 100%;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 30px;
  }

  .user-item {
    width: 215px;
    height: 270px;
    /*border: 1px solid black;*/
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .user-item img {
    width: 156px;
    height: 194px;
    cursor: pointer;
    margin: auto;
    /*margin: auto;*/
    /*border-left: solid 1px #666666;*/
    /*border-right: solid 1px #666666;*/
  }

  .user-item span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #666666;
    font-size: 18px;
    padding: 12px 0 7px;
    margin: auto;

  }

  .user-item i {
    color: #666666;
    font-size: 16px;
    font-style: normal;
    /*overflow: hidden;*/
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 8px auto;
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    /*height: 300px;*/
    width: 200px;
    margin: auto;
  }

  .feature-item img {
    height: 123px;
    width: 127px;
    margin: 20px auto;
    cursor: pointer;
  }

  .feature-item span {
    /*margin-top: 10px;*/
    text-align: center;
    font-size: 20px;
    color: #555;
    cursor: pointer;
  }

  .item {
    width: 257px;
    height: 118px;
    margin-bottom: 50px;
    margin-left: 50px;
    flex-direction: column;

  }

  .item i {
    display: block;
    width: 45px;
    height: 2px;
    background-color: #FF7124;
    margin-bottom: 10px;
  }

  .item span {
    color: #FF7124;
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: 900;
  }

  .item p {
    color: #555;
    font-size: 16px;
    margin-bottom: 10px;
  }

  /*.img1:focus{*/

  /*}*/
  /*.img2 {*/
  /*  display: none;*/
  /*}*/

  .title {
    display: flex;
    flex-direction: column;
  }


  .cate-content2 {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .cate-content-item-image {
    width: 314px;
    height: 170px;
    margin-top: 10px;
    margin-left: 4px;
    margin-right: 4px;
    line-height: 170px;
    cursor: pointer;
  }

  .cate-content-item-text {
    width: 314px;
    height: 50px;
    margin-top: 4px;
    margin-left: 4px;
    color: #6e6e6e;
  }

  .cate-content-item-sapn {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; /*要显示的行数*/
    -webkit-box-orient: vertical;
    cursor: pointer;
  }

  .image-detail {
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }


  /* 底部 */
  .bottom {
    width: 100%;
    height: 80px;
    background-color: #131313;
  }

  .otherList {
    margin-top: 20px;
    margin-bottom: 100px;
  }

  /*/deep/ .el-dropdown-menu {*/
  /*  background-color: #3d3b4f;*/
  /*}*/

  /deep/ .el-input__inner {
    height: 32px;
    border: 1px solid #FF7124;
  }

  /deep/ .el-input__icon {
    line-height: 32px;
  }

  .avatar {
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 50%;
  }

</style>
