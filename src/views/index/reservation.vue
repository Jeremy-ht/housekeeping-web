<template>
  <div class="container">
    <!--表格-->
    <el-table  :data="list" stripe style="width: 100%; margin-top: 10px" border size="small">
      <el-table-column label="#" type="index" align="center"/>
      <el-table-column label="预定用户名称" prop="uname" align="center"/>
      <el-table-column label="用户联系方式" prop="uphone" align="center"/>
      <el-table-column label="家政人员名称" prop="name" align="center"/>
      <el-table-column label="人员联系方式" prop="phone" align="center" />

      <el-table-column label="照片" prop="image" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.image" style="width: 40px;height: 50px">
        </template>
      </el-table-column>

<!--      <el-table-column label="创建时间" align="center" width="170px">-->
<!--        <template slot-scope="scope">-->
<!--          <i class="el-icon-time"/>-->
<!--          <span style="margin-left: 10px">{{ scope.row.creatime }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->

      <el-table-column label="预定时间" align="center" width="170px">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span style="margin-left: 10px">{{ scope.row.creatime }}</span>
        </template>
      </el-table-column>

<!--      <el-table-column label="预定状态" align="center" width="170px">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button type="success" v-if="scope.row.iscomment == 1" icon="el-icon-check" circle></el-button>-->
<!--          <el-button type="warning" v-else icon="el-icon-edit" circle></el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->


<!--      <el-table-column label="操作" width="120px" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          &lt;!&ndash;删除&ndash;&gt;-->
<!--          <el-button type="danger" icon="el-icon-delete" size="mini" @click="delUserBtn(scope.row.id)"/>-->
<!--        </template>-->
<!--      </el-table-column>-->

    </el-table>


    <!--分页-->
    <page-bar :pageTotal="pageTotal" :pageNum="pagenum" :pageSize="pagesize"
              @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"/>

  </div>
</template>

<script>
  import { getAdminList, addAdmin, delAdmin, getReservationList } from '../../api/common'
  import PageBar from '@/components/PageBar'

  export default {
    name:'reservation',
    data() {
      return {
        // 分页查询
        pagenum: 1,
        pagesize: 8,
        pageTotal: 0,

        list: [],


      }
    },
    components: {
      PageBar

    },
    created() {
      this.getAdminList()

    },
    methods: {
      // 初始化
      getAdminList() {
        let params = {
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
        getReservationList(params).then(res => {
          if (res.success) {
            this.pageTotal = res.data.total
            this.list = res.data.data

          }else {
            this.$message({ message: '获取预定列表失败', type: 'error', duration: 1700 })
          }

        })

      },

      // 分页
      handleSizeChange(pagesize) {
        this.pagesize = pagesize
        this.getAdminList()
      },
      handleCurrentChange(pagenum) {
        this.pagenum = pagenum
        this.getAdminList()
      },

      // 添加
      addAdminBtn() {
        this.addDialogVisible = true

      },
      addAdmin() {
        let admin = this.addAdminInfo
        addAdmin('1', admin).then(res => {
          if (res.success) {
            this.addDialogVisible = false
            this.getAdminList()
            this.$message({ message: '新增员工成功', type: 'success', duration: 1700 })
          } else {
            this.$message({ message: '新增员工失败', type: 'error', duration: 1700 })
          }

        })

      },

      // 删除
      delUserBtn(id) {
        console.log(id)
        this.$confirm('是否确定删除该员工?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delAdmin(id).then(res => {
            if (res.success) {
              this.getAdminList()
              this.$message({ message: '删除员工成功', type: 'success', duration: 1700 })
            } else {
              this.$message({ message: '删除员工失败', type: 'error', duration: 1700 })
            }
          })
        })

      },

    }
  }
</script>
<style>
  .container{
    padding: 10px 20px;
  }
  .admin-add-btn {
    margin-bottom: 10px;
    float: right;
  }


</style>
