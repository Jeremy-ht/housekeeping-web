<template>
  <div class="app-container">

    <!-- ========================= -->
    <!-- 选择模式 -->
    <!-- ========================= -->
    <div class="model" v-show="!showModel">

      <div class="model-title">
        <div style="color: #414446;margin: auto;font-size: 28px;">
          <i class="el-icon-c-scale-to-original" style="margin-right: 6px;"/>
          选择查看模式
        </div>
        <i class="iiii"/>
      </div>

      <div class="model-content">
        <div class="time model-content-item" @click="modelGo(0)">
          <i class="el-icon-time" style="margin-right: 6px;"/>
          时间模式
        </div>

        <div class="category model-content-item" @click="modelGo(1)">
          <i class="el-icon-set-up" style="margin-right: 6px;"/>
          分类模式
        </div>
      </div>

    </div>

    <!-- ========================= -->
    <!-- 列表 -->
    <!-- ========================= -->
    <div class="show-model" v-show="showModel">
      <el-card class="box-card" shadow="hover">

        <!-- 新增按钮 -->
        <!--        <el-row :gutter="20">-->
        <!--          <el-col :span="4">-->
        <!--            &lt;!&ndash; 新增按钮 &ndash;&gt;-->
        <!--            <el-button class="admin-add-btn" type="success"-->
        <!--                       size="small" @click="addCateBtn" plain>新增人员-->
        <!--            </el-button>-->
        <!--          </el-col>-->
        <!--        </el-row>-->


        <!-- ========================= -->
        <!-- 表格 -->
        <!-- ========================= -->
        <el-table
          :data="allDetailList"
          stripe
          style="width: 100%; margin-top: 10px"
          border
          size="small">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="姓名">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="年龄">
                  <span>{{ props.row.age + ' 岁'}}</span>
                </el-form-item>
                <el-form-item label="性别">
                  <el-button size="mini" type="warning" v-if="props.row.sex == 0" plain>女</el-button>
                  <el-button size="mini" type="info" v-else plain>男</el-button>
                </el-form-item>
                <el-form-item label="籍贯">
                  <span>{{ props.row.nativeplace }}</span>
                </el-form-item>
                <el-form-item label="婚姻状况">
                  <i v-if="props.row.marriage == 2" class="el-icon-circle-check"></i>
                  <i v-else class="el-icon-circle-close"></i>
                </el-form-item>
                <el-form-item label="身高">
                  <span>{{ props.row.height + ' cm'}}</span>
                </el-form-item>
                <el-form-item label="体重">
                  <span>{{ props.row.weight + ' kg'}}</span>
                </el-form-item>
                <el-form-item label="工作经验">
                  <span>{{ props.row.workexper + ' 年'}}</span>
                </el-form-item>
                <el-form-item label="期望薪资">
                  <span>{{ props.row.salary + ' 元'}}</span>
                </el-form-item>
                <el-form-item label="联系方式">
                  <span>{{ props.row.phone}}</span>
                </el-form-item>
                <el-form-item label="食宿">
                  <i v-if="props.row.noroom == 2" class="el-icon-circle-check"></i>
                  <i v-else class="el-icon-circle-close"></i>
                </el-form-item>

                <el-form-item label="注册时间">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 5px">{{ props.row.creatime }}</span>
                </el-form-item>

                <el-form-item label="当前状态">
                  <el-button size="mini" type="danger" v-if="props.row.currentstate == 0" plain>待业</el-button>
                  <el-button size="mini" type="success" v-else plain>工作中</el-button>
                </el-form-item>

              </el-form>
            </template>
          </el-table-column>

          <el-table-column label="姓名" prop="name" align="center"></el-table-column>
          <el-table-column label="照片" prop="image" align="center"></el-table-column>
          <el-table-column label="年龄" prop="age" align="center"></el-table-column>
          <el-table-column label="性别" prop="sex" align="center"></el-table-column>
          <el-table-column label="工作经验" prop="workexper" align="center"></el-table-column>
          <el-table-column label="当前状态" prop="currentstate" align="center"></el-table-column>

          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="updInfo(scope.row.id)">
                修改
              </el-button>

              <el-button type="danger" size="mini" @click="delDetailBtn(scope.row.id)">
                删除
              </el-button>
            </template>
          </el-table-column>

        </el-table>

        <!-- ========================= -->
        <!-- 分页 -->
        <!-- ========================= -->
        <page-bar :pageTotal="pageTotal" :pageNum="pagenum" :pageSize="pagesize"
                  @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"/>


      </el-card>
    </div>

  </div>
</template>

<script>
  import PageBar from '@/components/PageBar'
  import {getInfoList,delInfo, getSceneryList, pullScenery, delScenery, disableComment} from '../../api/common'

  export default {

    data() {
      return {
        showModel: true,


        activeName: 'first',
        adminInfo: {},

        // 分页查询
        pagenum: 1,
        pagesize: 8,
        pageTotal: 0,

        // 我的列表分页
        pagenumMy: 1,
        pagesizeMy: 8,
        pageMyTotal: 0,

        myDetailList: [],
        allDetailList: []

      }
    },
    components: {
      PageBar

    },
    created() {
      this.getInit()

    },
    methods: {
      // 初始化
      async getInit() {
        let admin = JSON.parse(window.localStorage.getItem('AdminInfo'))
        if (admin == undefined || admin == null || admin == '') {
          this.$router.push('/login')
          this.$message({message: '请先登录再操作', type: 'error', duration: 1700})
          return
        } else {
          this.adminInfo = admin
        }

        const adminId = this.adminInfo.id
        // let params = {
        //   pagenum: this.pagenumMy,
        //   pagesize: this.pagesizeMy
        // }
        // await getInfoList(params, 0).then(res => {
        //   this.myDetailList= []
        //   if (res.success && res.data.data.length != 0) {
        //     this.pageMyTotal = res.data.total
        //     this.myDetailList = res.data.data
        //
        //   } else {
        //     this.$message({
        //       message: '获取列表失败，请刷新再试!',
        //       type: 'error', duration: 1700
        //     })
        //   }
        // })

        // 全部列表
        let paramsAll = {
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
        await getInfoList(paramsAll, 0).then(res => {
          console.log(res)
          this.allDetailList = []
          if (res.success && res.data.data.length != 0) {
            this.pageTotal = res.data.total
            this.allDetailList = res.data.data

          } else {
            this.$message({
              message: '获取列表失败，请刷新再试!',
              type: 'error', duration: 1700
            })
          }
        })

      },

      // 模式选择
      modelGo(id) {
        if (id === 0) {
          this.showModel = true
        } else {

        }

      },

      // 分页
      handleSizeChangeMy(pagesize) {
        this.pagesizeMy = pagesize
        this.getInit()
      },
      handleCurrentChangeMy(pagenum) {
        this.pagenumMy = pagenum
        this.getInit()
      },

      handleSizeChange(pagesize) {
        this.pagesize = pagesize
        this.getInit()
      },
      handleCurrentChange(pagenum) {
        this.pagenum = pagenum
        this.getInit()
      },

      pullDetail(id) {

        this.$confirm('是否确定发布?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          pullScenery(id).then(res => {
            if (res.success) {
              this.$message({message: '发布成功', type: 'success', duration: 1700})
              this.getInit()
            } else {
              this.$message({message: '发布失败', type: 'error', duration: 1700})
            }
          })
        })

      },

      updInfo(id) {


      },

      delDetailBtn(id) {
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          delInfo(id).then(res => {
            if (res.success) {
              this.$message({message: '删除成功', type: 'success', duration: 1700})
              this.getInit()
            } else {
              this.$message({message: '删除失败', type: 'error', duration: 1700})

            }
          })
        })

      },

      handleClick(tab, event) {
      }

    }
  }
</script>

<style scoped>

  .model {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .model-title {
    margin: auto;
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
  }

  .iiii {
    display: block;
    margin: auto;
    background: url(../../assets/index-bg.png) no-repeat center;
    width: 70%;
    height: 14px;

  }

  .model-content {
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .model-content-item {
    width: 220px;
    height: 300px;
    border-radius: 6px;
    background-color: #ff7225;
    margin-right: 100px;
    margin-left: 100px;
    margin-top: 20px;
    cursor: pointer;
    line-height: 300px;
    text-align: center;
    color: white;
    font-size: 30px;

  }

  .demo-table-expand {
    font-size: 20px;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }


</style>
