<template>
  <div class="container">
    <div class="container-item">

      <!-- ========================= -->
      <!-- 图片等展示 -->
      <!-- ========================= -->
      <div class="container-item-one">
        <div class="one-left">
          <img :src="detailInfo.image">
          <!--          <span><b style="cursor: pointer;">{{detailInfo.name}}|</b> {{detailInfo.nativeplace}}</span>-->
          <!--          <i>{{detailInfo.age}}岁&nbsp;{{detailInfo.workexper}}年工作经验</i>-->
        </div>

        <div class="one-right">
          <div class="one-right-1">
             <span style="color:#FF7124;font-size: 18px">
            {{detailInfo.name}}&nbsp;
             </span>
            <span style="margin-left: 5px"> {{detailInfo.sex==0? '女 ' : '男 ' }}&nbsp;</span>
            <span style="margin-left: 10px"> {{detailInfo.age + '岁 '}}&nbsp;&nbsp;</span>
            <span style="margin-left: 10px"> 来自{{detailInfo.nativeplace}}&nbsp;&nbsp;</span>
<!--            <span style="margin-left: 10px">当前状态：1111</span>-->
          </div>
          <div class="one-right-2">{{detailInfo.introduction}}</div>
          <div class="one-right-3">
            <div class="detail-one">
              <div class="detail1">籍贯</div>
              <div class="detail2">{{detailInfo.nativeplace}}</div>

              <div class="detail1">性别</div>
              <div class="detail2">{{detailInfo.sex==0? '女 ' : '男 ' }}</div>

              <div class="detail1">身高</div>
              <div class="detail2">{{detailInfo.height + 'CM'}}</div>

              <div class="detail1">体重</div>
              <div class="detail2">{{detailInfo.weight + 'KG'}}</div>


            </div>
            <div class="detail-two">
              <div class="detail1">工作经验</div>
              <div class="detail2">{{detailInfo.workexper + '年'}}</div>

              <!--              <div class="detail1">做过几家</div>-->
              <!--              <div class="detail2"></div>-->

              <div class="detail1">期望薪资</div>
              <div class="detail2">{{detailInfo.salary}}</div>

              <div class="detail1">食宿</div>
              <div class="detail2">{{detailInfo.marriage==2? '不留宿' : '留宿' }}</div>

              <div class="detail1">婚姻状况</div>
              <div class="detail2">{{detailInfo.marriage==2? '已婚' : '未婚' }}</div>
              <!--              <div class="detail1">学历</div>-->
              <!--              <div class="detail2"></div>-->

            </div>
          </div>
          <div class="one-right-4">

          </div>
          <div class="one-right-5"  v-if="isYUYUE">
            <div class="yyg">已预约</div>
          </div>

          <div class="one-right-5"  v-else @click="goYY(detailInfo.id)">
            <div class="yy">我要预约</div>
          </div>

        </div>
      </div>
      <div class="container-item-hr"/>


      <!-- ========================= -->
      <!-- 介绍 -->
      <!-- ========================= -->
      <div class="container-item-two">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="el-tabs">
          <el-tab-pane label="基本信息" name="first">
            <div class="base-info-name base"> {{detailInfo.name}}</div>

            <div class="base-info">
              <div class="base-info-item base">

                <div class="base-item">
                  <div class="base-item-left">姓名</div>
                  <div class="base-item-right"> {{detailInfo.name}}</div>
                </div>

                <div class="base-item">
                  <div class="base-item-left">性别</div>
                  <div class="base-item-right">{{detailInfo.sex==0? '女' : '男' }}</div>
                </div>

                <div class="base-item">
                  <div class="base-item-left">年龄</div>
                  <div class="base-item-right">{{detailInfo.age + '岁 '}}</div>
                </div>

                <div class="base-item">
                  <div class="base-item-left">籍贯</div>
                  <div class="base-item-right">{{detailInfo.nativeplace}}</div>
                </div>


                <div class="base-item">
                  <div class="base-item-left">身高</div>
                  <div class="base-item-right">{{detailInfo.height + 'CM'}}</div>
                </div>


                <div class="base-item">
                  <div class="base-item-left">体重</div>
                  <div class="base-item-right">{{detailInfo.weight + 'KG'}}</div>
                </div>


                <div class="base-item">
                  <div class="base-item-left">期望薪资</div>
                  <div class="base-item-right">{{detailInfo.salary}}</div>
                </div>

                <div class="base-item">
                  <div class="base-item-left">食宿</div>
                  <div class="base-item-right">{{detailInfo.marriage==2? '不留宿' : '留宿' }}</div>
                </div>

                <div class="base-item">
                  <div class="base-item-left">婚姻状况</div>
                  <div class="base-item-right">{{detailInfo.marriage==2? '已婚' : '未婚' }}
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="详细介绍" name="second">
            <div class="base-info">
              <div style="margin-top: 10px">
                {{detailInfo.introduction}}
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="工作技能" name="third">
            <div class="base-info">
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="container-item-hr"/>


      <!-- ========================= -->
      <!-- 评论 -->
      <!-- ========================= -->
      <div class="container-item-three">
        <div class="comment">
          <div class="comment-title">
            <div style="font-size: 24px;color: #FF7124">
              评论列表 <span style="font-size: 18px;color: #575757">{{'(' + countList + ' 条)'}} </span>
            </div>
          </div>

          <div class="comment-content">
            <div class="comment-content-item" v-for="item in commentList">
              <div class="comment-content-item-left">
                <img class="login-img"
                     :src="item.uimage"/>
              </div>

              <div class="comment-content-item-right">
                <div class="comment-content-name">
                  {{item.uname}}
                </div>

                <div class="comment-content-content">
                  {{item.commentary}}
                </div>

                <div class="comment-content-time">
                  {{item.creatime}}
                </div>
              </div>
            </div>
            <div class="comment-content-bottom">
              <span>我是有底线的</span>
            </div>
          </div>


        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {getSceneryInfo, addComment, goYY, isYY, getCommentList}
    from '../../api/common'
  import '../../assets/iconfont/iconfont'

  export default {
    name: 'sceneryInfo',
    data() {
      return {


        activeName: 'first',

        commentList: [],
        countList: 0,


        dilog: false,
        user: {},
        detailId: 0,
        categoryid: 0,
        detailInfo: {
          id: 0,
          name: '',
          sex: '0',
          age: 18,
          nativeplace: '', // 籍贯
          marriage: '2', // 婚姻状况
          currentstate: 0, // 当前状态
          height: '',
          weight: '',
          workexper: '', // 工作经验
          salary: '', // 期望薪资
          noroom: '2', // 食宿
          introduction: '', // 详细介绍
          phone: '', // 联系方式
          creator: 0,
          categoryid: '',
          image: ''
        },

        addComment: '',
        userid: 0,
        isYUYUE: false,
      }
    },
    created() {
      this.init()

    },
    methods: {

      handleClick(tab, event) {
        console.log(tab, event);
      },


      // 初始化
      async init() {
        this.detailId = this.$route.params.id
        console.log(this.$route.params.id)
        // 获取详情
        await getSceneryInfo(this.detailId).then(res => {
          if (res.success) {
            this.detailInfo = res.data.info
            console.log(this.detailInfo)
          } else {
            this.$message({
              message: '详情获取失败，请刷新再试！',
              type: 'error',
              duration: 2000
            })
          }
        })

        let user = JSON.parse(window.localStorage.getItem('UserInfoHousekeeping'))
        if(user !=null || user != undefined){
          this.userid = user.id
          await isYY(user.id, this.detailId ).then(res => {
            if (res.success) {
              if (res.data.data)
                this.isYUYUE = true
            }
          })
        }

        // 评论
        await getCommentList(1, 100, this.detailId).then(res => {
          console.log(res.data.data)
          if (res.success) {
            this.commentList = res.data.data
            this.countList = res.data.data.length
          }

        })

      },

      goYY(id) {

        if (this.isLogin()) {

          this.$confirm('是否确定预约?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            goYY(this.userid, id).then(res => {
              if (res.success) {
                this.init()
                this.$message({message: res.message, type: 'success', duration: 2100})
              } else {
                this.$message({message: res.message, type: 'error', duration: 1700})
              }
            })
          })


        }

      },
      isLogin() {
        let user = JSON.parse(window.localStorage.getItem('UserInfoHousekeeping'))
        if (user == undefined || user == null || user == '') {
          this.$message({message: '请先登录', type: 'error', duration: 1700})
          this.$router.push('/userLogin')
        }
        this.userid = user.id
        return true
      },

      // 重置添加用户表单
      closeAddAdminForm() {
        this.$refs.addAdminRef.resetFields()
      },
      addComm() {
        // 是否登录
        let user = JSON.parse(window.localStorage.getItem('UserInfo'))
        if (user == undefined || user == null || user == '') {
          this.$router.push('/userLogin/1')
        } else {
          this.user = user
          this.dilog = true
        }
      },

      addCommentBtn() {
        if (this.addComment == '') {
          this.$message({message: '请输入评论内容', type: 'error', duration: 1700})
          return
        }

        let addCommentInfo = {
          commentary: this.addComment,
          userid: this.user.id,
          detailid: this.detailId,
          categoryid: this.categoryid
        }

        addComment(addCommentInfo).then(res => {
          if (res.success) {
            this.init()
            this.dilog = false
            this.addComment = ''
            this.$message({message: '评论成功', type: 'success', duration: 1700})
          } else {
            this.$message({message: '评论失败', type: 'error', duration: 1700})
          }
        })

      }

    }
  }
</script>

<style scoped>

  .container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    /*box-shadow:inset 0px 2px 10px -15px #000;*/
    /*-webkit-box-shadow: #d4d2d2 0px 0px 10px;*/
    /*-moz-box-shadow: #d4d2d2 0px 0px 10px;*/
  }

  .container-item {
    width: 1100px;
    height: 100%;
    margin: auto;
    background-color: white;
  }

  .container-item-hr {
    width: 100%;
    height: 20px;
    background-color: #f5f5f5;
  }

  .container-item-one {
    width: 100%;
    height: 350px;
    margin-top: 20px;
    border: 1px solid #e9e9e9;
    display: flex;
  }

  .one-left {
    width: 300px;
    height: 310px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    background-color: #f5f5f5;
  }

  .one-left img {
    width: 165px;
    height: 200px;
    cursor: pointer;
    margin: auto;
  }

  .one-right {
    width: 800px;
    height: 310px;
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
  }

  .one-right-1 {
    border-left: solid 3px #FF7124;
    height: 30px;
    line-height: 30px;
    padding-left: 8px;
  }

  .one-right-2 {
    height: 50px;
    margin-top: 20px;
    border-top: 1px dashed #e9e9e9;
    line-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .one-right-3 {

  }

  .one-right-4 {
    width: 800px;
    height: 40px;
    margin-top: 20px;
    border: 1px dashed #e9e9e9;
    overflow: hidden;
  }

  .one-right-5 {
    width: 800px;
    height: 40px;
    margin-top: 20px;
  }

  .yy {
    width: 180px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    background-color: #FF7124;
    color: white;
    float: right;
    cursor: pointer;
    border-radius: 4px;
  }

  .yyg {
    width: 180px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    background-color: #dadcda;
    color: black;
    float: right;
    cursor: pointer;
    border-radius: 4px;
    pointer-events: none;
  }


  .detail-one {
    width: 650px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #e9e9e9;
  }

  .detail-two {
    width: 650px;
    height: 41px;
    line-height: 41px;
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    /*padding-top: 1px;*/
  }

  .detail1 {
    float: left;
    width: 75px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #FF7124;
    background: #f5f5f5;
  }

  .detail2 {
    float: left;
    width: 84px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #888888;
  }

  /* 基本信息 */
  .base {
    margin-left: 12px;
  }

  .base-info-name {
    font-size: 24px;
    font-weight: 600;
    color: #FF7124;
    /*margin-top: 10px;*/
  }

  .base-info {
    width: 100%;
    height: 100%;
    border-top: solid 1px #FF7124;
    margin-top: 10px;
  }

  .base-info-item {
    width: 100%;
    height: 100%;
  }

  .base-item {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e9e9e9;
    display: flex;

  }

  .base-item-left {
    width: 150px;
    height: 100%;
    margin: auto;
    text-align: center;
    color: #FF7124;
    line-height: 50px;
  }

  .base-item-right {
    width: calc(100% - 150px);
    height: 100%;
    padding-left: 20px;
    line-height: 50px;
    color: #a7a2a2;
  }


  /* 评论 todo*/
  .container-item-three {
    width: 100%;
    height: 100%;
    /*margin-top: 20px;*/
    /*border: 1px solid #e9e9e9;*/
    /*display: flex;*/
  }

  .comment1 {
    margin: 0 14%;
    padding-bottom: 50px;
  }

  /*.comment-content-img {*/
  /*  display: flex;*/
  /*  width: 200px;*/
  /*  height: 40px;*/
  /*}*/

  /*.comment-content-img-span{*/
  /*line-height: 40px;*/
  /*  margin: auto;*/
  /*  !*margin-left: 4px;*!*/
  /*  font-size: 12px;*/
  /*}*/

  .comment-title {
    display: flex;
    justify-content: space-between;
  }

  /*.comment-content {*/
  /*  margin-top: 20px;*/
  /*  border-bottom: solid .1px #bd2c00;*/
  /*}*/


  .comment {
    padding: 10px;
  }

  .comment-number {
    width: 20%;
    height: 50px;
    /*border: 1px red solid;*/
    font-size: 20px;
    color: #55a532;
  }

  .comment-content {
    width: 100%;
    height: 100%;
    border-top: solid 1px #FF7124;
    margin-top: 20px;
  }

  .comment-content-item {
    width: 100%;
    height: 100%;
    display: flex;
    padding-bottom: 40px;
    padding-top: 20px;
    /*border-bottom: solid 1px #c5bfbf;*/
  }

  .comment-content-item-left {
    width: 100px;
    height: 100%;
    /*border: solid 1px #FF7124;*/
    display: flex;
  }

  .comment-content-item-right {
    width: calc(100% - 100px);
    height: 100%;
    /*border: solid 1px #FF7124;*/
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .comment-content-bottom {
    font: 14px PingFangSC-Regular;
    text-align: center;
    line-height: 42px;
    color: #626675;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .comment-content-name {
    /*margin-bottom: 10px;*/
    /*font-family: PingFangSC-Semibold;*/
    font-size: 16px;
    color: #222;
    font-weight: 600;
  }

  .comment-content-content {
    padding-top: 10px;
    font: 14px/22px PingFangSC-Regular;
    text-align: justify;
    color: #222;
  }

  .comment-content-time {
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #9195a3;
    padding-top: 20px;
  }

  .login-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: auto;
    text-align: center;
  }

  .container-item-two {
    margin: 10px;
    padding-bottom: 60px;
  }

  /deep/ .el-tabs__item.is-active {
    color: #ff9d00;
  }

  /deep/ .el-tabs__item.is-active {
    color: #ff9d00;
  }

  /deep/ .el-tabs__item:hover {
    color: #ff9d00;
    cursor: pointer;
  }

</style>
