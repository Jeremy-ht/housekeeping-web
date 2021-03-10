<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pageNum"
    :page-sizes="[8, 15, 20]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pageTotal"
    hide-on-single-page>
  </el-pagination>

<!--  <el-pagination-->
<!--    @size-change="handleSizeChange"-->
<!--    @current-change="handleCurrentChange"-->
<!--    :current-page="pageNum"-->
<!--    :page-sizes="[5,8, 15, 20]"-->
<!--    layout="prev, pager, next"-->
<!--    :total="pageTotal">-->
<!--  </el-pagination>-->
</template>

<script>
  export default {
    name: 'PageBar',
    props: {
      pageTotal: {
        type: Number,
        require: true
      },
      pageNum: {
        type: Number,
        require: true
      },
      pageSize: {
        type: Number,
        require: true
      }
    },
    methods: {
      handleSizeChange(newSize) {
        this.$emit('handleSizeChange', newSize)
      },
      handleCurrentChange(newNum) {
        this.$emit('handleCurrentChange', newNum)
      }
    }
  }
</script>

<style scoped>
  .el-pagination {
    margin-top: 15px;
  }

  /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #FF6336;
    color: #FFF;
  }

  /deep/ .el-pager li.active {
    color: #FF6336;
    cursor: default;
  }
</style>
