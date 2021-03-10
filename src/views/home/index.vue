<template>
  <div class="home-container">

    <!-- 导航 -->
    <div class="home-head">
      <div class="home-div">

        <div class="home-icon">
<!--          <img src="http://www.51ejz.com/images/logo.png">-->
          <!--          <svg class="icon iconfont" aria-hidden="true">-->
          <!--            <use xlink:href="#icon-tubiaozhizuomoban_fengjing"/>-->
          <!--          </svg>-->
          <svg style="width: 50px;height: 50px;margin-top: 8px;"
               t="1615379048977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1712" width="200" height="200" color="#FF6336">
            <path
              d="M932.8 443c-18.1-19.1-37.2-37.3-57.1-54.5-18.6-16.2-27.9-34.4-26.9-60.7 1.9-64-0.9-127.6 1.4-191.7 1.4-39.2-26-66.4-53.4-70.3-24.2-3.3-50.2-2.9-74.3 1.9-38.1 8.1-48.3 24.4-51.1 65-0.9 12.9-2.8 25.3-5.1 46.8-20.4-20.6-34.4-36.3-50.2-50.2-63.6-57.4-126.8-62.1-189.1-4.8C313.9 228.4 202.9 335 91.4 440.6c-22.8 22-35.8 70.3-18.1 94.2 13.5 18.2 38.1 29.6 59.5 39.7 14.9 7.2 20.9 14.8 20.9 31.5 0.9 83.6 3.3 167.8 4.6 251.4 0.9 63.1 35.8 100.4 96.6 100.8 164.9 0.5 329.9 0.5 494.3 0 66.9 0 104.1-40.1 103.6-110.4-0.5-66.4-1.4-132.4-1.9-198.8-0.5-55.4 0.5-52.6 50.6-73.6 62.4-26.7 80-79.8 31.3-132.4zM573.6 712.1c-22.8 35.8-43.2 72.6-46.5 117.1-1.4 21.5-16.3 30.1-33.9 25.3-29.3-7.6-59-16.2-85.5-30.6-33.4-18.2-33.4-23.9-20.4-61.7-55.8 16.7-55.8 16.7-82.7-36.8-16.3-32-16.3-33 10.2-55.4 34.8-29.6 69.7-59.7 103.6-90.3 13-11.5 25.6-12.9 39-2.9 36.7 27.2 73.4 54.5 109.6 82.7 23.8 18.2 23.4 26.3 6.6 52.6z m115.7-272.4c-28.3 33-56.2 66.9-85.9 98.9-11.6 12.9-15.8 22.5-7.9 41.1 9.8 24.4 17.7 52.1-3.3 81.3-48.3-37.8-94.8-74.1-143.1-111.4 20.9-21 45.1-30.1 65-23.4 43.2 14.8 61.3-14.8 83.2-40.6 20.9-24.4 41.8-48.7 63.2-72.6 8.8-10 20-20.1 33-8.1 14.4 12.8 4.6 24.3-4.2 34.8z m0 0"
              p-id="1713" fill="#FF6336"></path>
          </svg>

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
            <el-menu-item index="5">月嫂</el-menu-item>
            <el-menu-item index="4">保姆</el-menu-item>
            <el-menu-item index="2">陪护</el-menu-item>
            <el-menu-item index="3">钟点工</el-menu-item>
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
          <!--          <el-input placeholder="找我搜索想要的内容吧..." suffix-icon="el-icon-search" v-model="search" class="input-with-select">-->
          <!--          </el-input>-->
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
                <el-dropdown-item icon="el-icon-s-claim" command="4">我的预定</el-dropdown-item>
                <el-dropdown-item icon="el-icon-user-solid" command="1">个人中心</el-dropdown-item>
                <el-dropdown-item icon="el-icon-close" command="2">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>

        </div>

      </div>
    </div>


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
                <span>家政</span>
                <p>清洁护理/做饭</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png" @click="handleSelect(1)">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg2.png) no-repeat 25% 70%;">
                <i/>
                <span>月嫂</span>
                <p>带孩子/照顾大人</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png" @click="handleSelect(5)">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg3.png) no-repeat 25% 70%;">
                <i/>
                <span>保姆</span>
                <p>有我在你放心</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png" @click="handleSelect(4)">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item" id="item-id"
                   style="background: url(../../assets/housekeeping/home-working-bg5.png) no-repeat 25% 70%;">
                <i/>
                <span>陪护</span>
                <p>优质的服务，还您一个温馨的家</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png" @click="handleSelect(2)">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg7.png) no-repeat 25% 70%;">
                <i/>
                <span>钟点工</span>
                <p>小时/天 找我吧</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png" @click="handleSelect(3)">
                <!--                <img class="img2" src="../../assets/housekeeping/index-icon-2.png">-->
              </div>

              <div class="item"
                   style="background: url(../../assets/housekeeping/home-working-bg4.png) no-repeat 25% 70%;">
                <i/>
                <span>更多</span>
                <p>寻找更多服务</p>
                <img class="img1" src="../../assets/housekeeping/index-icon-1.png" @click="handleSelect(1)">
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
              <div class="feature-item" @click="handleSelect(5)">
                <img src="../../assets/housekeeping/spe-serv1.png"/>
                <span>月嫂</span>
              </div>

              <div class="feature-item" @click="handleSelect(4)">
                <img src="../../assets/housekeeping/spe-serv2.png"/>
                <span>保姆</span>
              </div>

              <div class="feature-item" @click="handleSelect(2)">
                <img src="../../assets/housekeeping/spe-serv3.png"/>
                <span>陪护</span>
              </div>

              <div class="feature-item" @click="handleSelect(3)">
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
              <!--              <div class="user-item">-->
              <!--                <div-->
              <!--                  style="display:flex;width: 215px; height: 270px;border-left: solid 1px #ebebeb;border-right: solid 1px #ebebeb;">-->
              <!--                  <img src="http://www.51ejz.com/upimages/f2d3687b-4e50-462d-809c-c3f72f4b4ab4.jpg">-->
              <!--                </div>-->
              <!--                <span><b style="cursor: pointer;">赵家群|</b> 安徽</span>-->
              <!--                <i>48岁&nbsp;12年工作经验</i>-->
              <!--              </div>-->

              <div class="user-item" v-for="item in topList">
                <div style="display:flex;width: 215px; height: 270px;
                border-left: solid 1px #ebebeb;border-right: solid 1px #ebebeb;"
                     @click="goDetailInfo(item.id)">
                  <img :src="item.image">
                </div>
                <span>
                <b style="cursor: pointer;color: #FF7124;"
                   @click="goDetailInfo(item.id)">{{item.name}}|</b>
                {{item.nativeplace}}</span>
                <i>{{item.age}}岁&nbsp;{{' '+item.workexper}}工作经验</i>
              </div>

            </div>

            <div style="margin-bottom: 20px;color:#6e6e6e">
              <!--              <span style="color: rgb(233, 85, 19);text-align: center">*</span> 明星员工Top 8-->
            </div>
          </div>
        </div>

        <div style="width: 100%; height:30px; background-color: #F0F0F0"></div>
      </div>
    </div>


    <div class="backgroud-color2 otherList" v-show="showIndex == 2">
      <div class="cate-div">
        <div class="cate-content2">

          <div class="user-item" v-for="item in otherList">
            <div
              style="display:flex;width: 215px; height: 270px;
                border-left: solid 1px #ebebeb;border-right: solid 1px #ebebeb;"
              @click="goDetailInfo(item.id)">
              <img :src="item.image">
            </div>
            <span>
                <b style="cursor: pointer;color: #FF7124;"
                   @click="goDetailInfo(item.id)">{{item.name}}|</b>
                {{item.nativeplace}}</span>
            <i>{{item.age}}岁&nbsp;{{' '+item.workexper}}工作经验</i>
          </div>

        </div>
      </div>
    </div>

    <div class="backgroud-color2 otherList" v-show="showIndex == 3">
      <div class="myYD-one">
        <h3 style="color: #222222;padding: 1px">个人中心</h3>

        <div class="cate-div2">

          <el-form ref="form" :model="UserInfo" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="UserInfo.uname" disabled/>
            </el-form-item>

            <el-form-item label="手机号">
              <el-input v-model="UserInfo.phone"/>
            </el-form-item>

            <!--          <el-form-item label="邮箱">-->
            <!--            <el-input v-model="UserInfo.email"/>-->
            <!--          </el-form-item>-->

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
              <!--            <span style="padding-top: -30px;color: black"><span style="color:red">*</span>点击更换头像</span>-->

            </el-form-item>
            <el-form-item style="text-align: right">
              <el-button type="success" @click="updUser" size="mini">确 定</el-button>
            </el-form-item>

          </el-form>
        </div>
      </div>
    </div>

    <div class="backgroud-color2 otherList myYD" v-show="showIndex == 4">
      <div class="myYD-one">
        <h3 style="color: #222222;padding: 1px">我的预定</h3>

        <div class="yd-div" v-if="yyList.length !== 0">
          <div class="yd-item" v-for="item in yyList">

            <div class="yd-item-image">
              <svg t="1612361912852" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="1967" width="200" height="200">
                <path
                  d="M390.912 217.6H307.2a51.2 51.2 0 0 0-51.2 51.2v499.2a51.2 51.2 0 0 0 51.2 51.2h422.4a51.2 51.2 0 0 0 51.2-51.2V268.8a51.2 51.2 0 0 0-51.2-51.2h-96.512A51.2 51.2 0 0 0 588.8 192H435.2a51.2 51.2 0 0 0-44.288 25.6zM384 268.8v25.6a51.2 51.2 0 0 0 51.2 51.2h153.6a51.2 51.2 0 0 0 51.2-51.2v-25.6h89.6v499.2H307.2V268.8z m51.2 0h153.6v25.6H435.2z m76.8 755.2a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m-105.216-534.528l-45.568 45.056L473.6 648.064l189.44-197.376-46.08-44.416-144.128 150.016z"
                  fill="#CB894D" p-id="1968">
                </path>
              </svg>
            </div>

            <div class="yd-item-content">
              <div class="item1111">预约时间
                <span style="margin-left: 10px;color: #7a7a6e;font-size: 14px"> {{item.reservationtime}} </span>
              </div>
              <div class="item1111">家政人员
                <span style="margin-left: 10px;color: #7a7a6e;font-size: 14px"> {{item.name}} </span>
              </div>
              <div class="item1111">家政类别
                <span style="margin-left: 10px;color: #7a7a6e;font-size: 14px"> {{item.categoryname}} </span>
              </div>


              <div style="margin-top: 30px">
                <div style="float: right;margin-right: 14px">
                  <el-button type="success" size="mini"
                             v-if="item.iscomment == 0" round @click="showCommentGo(item.id)">评论
                  </el-button>
                  <el-button type="info" size="mini" v-else round>已评论</el-button>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div class="yd-div" v-else>
          <div style="color: black;margin: 50px auto">空空如也...</div>
        </div>


      </div>
    </div>

    <!--    <div class="bottom" v-show="showIndex == 1">-->
    <!--  </div>-->

    <!-- ========================= -->
    <!-- 评论模态框 -->
    <!-- ========================= -->
    <!--添加分类的对话框-->
    <el-dialog title="评论" :visible.sync="showComment" width="40%" @close="closeAddAdminForm()">
      <span>
        <!--表单-->
        <el-form>
          <el-form-item>
            <el-input
              type="textarea"
              rows="4"
              maxlength="500"
              placeholder="请输入评论内容"
              v-model="comment"/>
          </el-form-item>
        </el-form>
      </span>

      <!--底部区域-->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addComment" size="mini">确 定</el-button>
        <el-button @click="showComment = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
  import {
    getCategoryList, getUserList, getSceneryIndex, getYYinfo, getTopList,
    getSceneryList, getrotationList, updUserInfo, getSearchContent, addComment
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
        showIndex: 1,

        showComment: false,
        comment: '',
        yyList: [],

        commentId: '',

        topList: [],
      }
    },
    created() {
      this.init()

    },
    methods: {
      // 初始化
      async init() {

        // 是否登录
        let user = JSON.parse(window.localStorage.getItem('UserInfoHousekeeping'))
        if (user == undefined || user == null || user == '') {
          this.showLogin = false
        } else {

          this.UserInfo = user
          this.showLogin = true

          await getYYinfo(user.id).then(res => {
            if (res.success) {
              this.yyList = res.data.data
              console.log(this.yyList)
            } else {
              this.$message({message: '数据获取失败,请刷新!', type: 'error', duration: 2000})
            }
          })

        }

        // top
        await getTopList().then(res => {
          if (res.success) {
            this.topList = res.data.data
          } else {
            this.$message({message: '数据获取失败,请刷新!', type: 'error', duration: 2000})
          }
        })


      },

      async handleSelect(key) {
        this.otherList = []
        await getSceneryList(key).then(res => {
          if (res.success) {
            this.activeIndex = key.toString()
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
        this.$router.push('/userLogin/')
      },


      // 去详情页
      goDetailInfo(id) {
        const {href} = this.$router.resolve({path: `/info/${id}`})
        window.open(href, '_blank')

      },

      handleCommand(command) {
        if (command == 1) {
          // 个人中心
          this.showIndex = 3
          this.activeIndex = '-1'

        } else if (command == 2) {
          console.log(111)
          // 退出
          window.localStorage.removeItem('UserInfoHousekeeping')
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
        } else if (command == 4) {
          // 我的预定

          this.showIndex = 4
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
            window.localStorage.removeItem('UserInfoHousekeeping')
            window.localStorage.setItem('UserInfoHousekeeping', JSON.stringify(res.data.data))
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

      },

      showCommentGo(id) {
        this.showComment = true
        this.comment = ''
        this.commentId = id
      },

      // 重置添加用户表单
      closeAddAdminForm() {
        // this.$refs.addCateRef.resetFields()
      },

      addComment() {
        let addCommentInfo = {
          userid: this.UserInfo.id,
          infoid: this.commentId,
          commentary: this.comment

        }
        addComment(addCommentInfo).then(res => {
          if (res.success) {
            this.$message({message: '评论成功', type: 'success', duration: 1700})
            this.showComment = false
            this.init()
          } else {
            this.$message({message: '评论失败', type: 'error', duration: 1700})
          }
        })


      },

      gofeature(id) {

      },


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
    width: 40%;
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
    /*border-top: 1px solid #dedede;*/
    /*border-bottom: 1px solid #dedede;*/
    justify-content: space-evenly;
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
    margin-right: 40px;
  }

  .user-item2 {
    width: 215px;
    height: 270px;
    /*border: 1px solid black;*/
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    /*margin-right: 40px;*/
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

  .img1:hover {
    cursor: pointer;
    transform: scale(1.3, 1.3);
    transition: all .5s ease;

  }


  /*.item span:hover {*/
  /*  color: #FF7124;*/
  /*  font-size: 28px;*/
  /*  margin-bottom: 8px;*/
  /*  font-weight: 900;*/
  /*}*/

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
    /*margin-top: 20px;*/
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-evenly;*/
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

  .myYD {
    /*background-color: #F0F0F0;*/
  }

  .myYD-one {
    margin: 0 12%;
    width: 76%;
  }

  .yd-div {
    width: 100%;
    height: 100%;
    padding: 2px 40px;
    /*border: solid 2px #80430a;*/
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
  }

  .yd-item {
    width: 400px;
    height: 180px;
    /*border: solid 1px #cb6a10;*/
    background-color: #e8eae8;
    display: flex;
    margin-bottom: 20px;
    margin-right: 60px;
    border-radius: 10px;
  }

  .yd-item-image {
    margin: auto 20px auto 10px;
  }

  .yd-item-image2 {
    margin: auto 10px;
  }

  .yd-item-content {
    /*border: solid 2px #80430a;*/
    width: 100%;
    height: 100%;
    display: flex;
    color: black;
    flex-direction: column;
  }

  .item1111 {
    padding: 8px;
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
