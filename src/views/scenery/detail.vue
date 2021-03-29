<template>
  <div class="app-container">

    <!-- ========================= -->
    <!-- 基本信息 -->
    <!-- ========================= -->
    <el-form :model="addInfo" :inline="true" :rules="rules" ref="ruleForm" label-width="100px" class="detail-form">
      <h2 style="margin-bottom: 20px">基本信息</h2>

      <el-form-item label="姓名" prop="name">
        <el-input v-model="addInfo.name" placeholder="姓名" class="form-width"/>
      </el-form-item>

      <el-form-item label="年龄" prop="age">
        <el-input-number v-model="addInfo.age" :min="18" :max="60" label="年龄" class="form-width"/>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <div class="form-width">
          <el-radio v-model="addInfo.sex" label="0" border>女</el-radio>
          <el-radio v-model="addInfo.sex" label="1" border>男</el-radio>
        </div>
      </el-form-item>

      <el-form-item label="籍贯" prop="nativeplace">
        <el-select v-model="addInfo.nativeplace" placeholder="请选择籍贯" class="form-width" clearable>
          <el-option v-for="(item,index) in nativeplaceList" :label="item" :value="item"
                     :key="index"/>
        </el-select>
      </el-form-item>

      <el-form-item label="身高" prop="height">
        <el-input v-model="addInfo.height" placeholder="身高" class="form-width">
          <template slot="append">CM</template>
        </el-input>
      </el-form-item>

      <el-form-item label="体重" prop="weight">
        <el-input v-model="addInfo.weight" placeholder="体重" class="form-width">
          <template slot="append">KG</template>
        </el-input>
      </el-form-item>

    </el-form>

    <div style="background-color: #e8eae8;width: 100%;height: 20px"/>

    <!-- ========================= -->
    <!-- 工作照片 -->
    <!-- ========================= -->
    <el-form :model="addInfo" :rules="rules" ref="ruleForm" label-width="100px" class="detail-form">
      <h2 style="margin-bottom: 20px">工作照片</h2>

      <el-form-item prop="image">
        <el-upload
          class="avatar-uploader"
          action="http://127.0.0.1:9000/upload/updataFile"
          :show-file-list="false"
          :on-success="handleAvatarSuccess">
          <img v-if="addInfo.image !== ''" :src="addInfo.image" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>

      </el-form-item>
    </el-form>

    <div style="background-color: #e8eae8;width: 100%;height: 20px"/>

    <!-- ========================= -->
    <!-- 详细介绍 -->
    <!-- ========================= -->
    <el-form :model="addInfo" :rules="rules" ref="ruleForm" label-width="100px" class="detail-form">
      <h2 style="margin-bottom: 20px">详细介绍</h2>

      <el-form-item label="婚姻状况" prop="marriage">
        <el-radio v-model="addInfo.marriage" label="2" border>已婚</el-radio>
        <el-radio v-model="addInfo.marriage" label="1" border>未婚</el-radio>
      </el-form-item>

      <el-form-item label="食宿方式">
        <el-radio v-model="addInfo.noroom" label="2" border>包食宿</el-radio>
        <el-radio v-model="addInfo.noroom" label="1" border>不包食宿</el-radio>
      </el-form-item>

      <el-form-item label="工作经验" prop="workexper">
        <el-input v-model="addInfo.workexper" show-word-limit class="form-width3">
          <template slot="append">年</template>
        </el-input>
      </el-form-item>

      <el-form-item label="期望薪资" prop="salary">
        <el-input v-model="addInfo.salary" show-word-limit class="form-width3">
          <template slot="append">元</template>
        </el-input>
      </el-form-item>

      <el-form-item label="联系方式" prop="phone">
        <el-input v-model="addInfo.phone" class="form-width3"/>
      </el-form-item>

      <el-form-item label="家政分类" prop="categoryid">
        <el-select v-model="addInfo.categoryid" placeholder="请选择家政分类" class="form-width3" clearable>
          <el-option v-for="item in cateList" :label="item.categoryname" :value="item.id"
                     :key="item.id"/>
        </el-select>
      </el-form-item>

      <el-form-item label="详细介绍" prop="introduction">
        <el-input v-model="addInfo.introduction" type="textarea" rows="4"
                  maxlength="500" show-word-limit/>
      </el-form-item>

      <el-form-item style="text-align: right">
        <el-button type="info" size="mini"  @click="resetForm">重置</el-button>
        <el-button type="warning" size="mini" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import {getCategoryList, uploadFile, addScenery} from '../../api/common'
  import '../../assets/iconfont/iconfont'

  let addInfoDetail = {
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
  }

  export default {
    name: 'detail',
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
        addInfo: addInfoDetail,
        cateList: [],    // 分类列表

        nativeplaceList: [
          '河北省',
          '山西省',
          '辽宁省',
          '吉林省',
          '黑龙省',
          '江苏省',
          '浙江省',
          '安徽省',
          '福建省',
          '江西省',
          '山东省',
          '河南省',
          '湖北省',
          '湖南省',
          '广东省',
          '海南省',
          '四川省',
          '贵州省',
          '云南省',
          '陕西省',
          '甘肃省',
          '青海省',
          '台湾省',
          '北京市',
          '上海市',
          '重庆市',
          '天津市',
          '广西壮族自治区',
          '宁夏回族自治区',
          '西藏自治区',
          '新疆维吾尔自治区',
          '内蒙古自治区',
          '香港',
          '澳门'],
        adminInfo: {},

        // 表单验证
        rules: {
          name: [
            {required: true, message: '请输姓名', trigger: 'blur'},
            {min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur'}
          ],
          nativeplace: [
            {required: true, message: '请选择籍贯', trigger: 'blur'},
          ],
          height: [
            {required: true, message: '请输入身高', trigger: 'blur'},
            // {min: 140, max: 190, message: '身高范围是 140 - 190', trigger: 'blur'}
          ],
          weight: [
            {required: true, message: '请输入体重', trigger: 'blur'},
            // {min: 30, max: 100, message: '体重范围是 30 - 100', trigger: 'blur'}
          ],
          image: [
            {required: true, message: '请选择照片', trigger: 'blur'},
          ],
          workexper: [
            {required: true, message: '请填写工作经验', trigger: 'blur'},
            {min: 0, max: 50, message: '工作经验是 0 - 50', trigger: 'blur'}
          ],
          categoryid: [
            {required: true, message: '请选择家政分类', trigger: 'blur'},
          ],
          salary: [
            {required: true, message: '请填写期望薪资', trigger: 'blur'},
          ],
          introduction: [
            {required: true, message: '请填写详细介绍', trigger: 'blur'},
          ],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {validator: checkMobile, trigger: 'blur'}
          ]
        },
      }
    },

    created() {
      this.init()

    },
    methods: {
      async init() {
        // 获取创建者
        let admin = JSON.parse(window.localStorage.getItem('AdminInfo'))
        if (admin == undefined || admin == null || admin == '') {
          this.$router.push('/login')
          this.$message({message: '请先登录再操作', type: 'error', duration: 1700})
          return
        } else {
          this.adminInfo = admin
          this.addInfo.creator = admin.id
        }

        // 获取分类
        let params = {
          pagenum: 1,
          pagesize: 100
        }
        getCategoryList(params).then(res => {
          if (res.success) {
            this.cateList = res.data.data
            console.log(this.cateList)
          }
        })

      },

      // 校验
      checkForm() {
        if (this.addInfo.name == '') {
          this.$message({message: '姓名不能为空', type: 'error', duration: 1700})
          return false
        }

        if (this.addInfo.height == '') {
          this.$message({message: '身高不能为空', type: 'error', duration: 1700})
          return false
        }

        if (this.addInfo.weight == '') {
          this.$message({message: '体重不能为空', type: 'error', duration: 1700})
          return false
        }

        if (this.addInfo.nativeplace == '') {
          this.$message({message: '籍贯不能为空', type: 'error', duration: 1700})
          return false
        }

        if (this.addInfo.workexper == '') {
          this.$message({message: '工作经验不能为空', type: 'error', duration: 1700})
          return false
        }
        if (this.addInfo.salary == '') {
          this.$message({message: '期望薪资不能为空', type: 'error', duration: 1700})
          return false
        }

        if (this.addInfo.introduction == '') {
          this.$message({message: '详细介绍不能为空', type: 'error', duration: 1700})
          return false
        }

        if (this.addInfo.phone == '') {
          this.$message({message: '联系方式不能为空', type: 'error', duration: 1700})
          return false
        }
        if (this.addInfo.categoryid == '') {
          this.$message({message: '分类不能为空', type: 'error', duration: 1700})
          return false
        }
        if (this.addInfo.image == '') {
          this.$message({message: '照片不能为空', type: 'error', duration: 1700})
          return false
        }
        return true
      },

      // 添加
      async submitForm() {
        if (!this.checkForm) {
          return;
        }
        await addScenery(this.addInfo).then(res => {
          if (res.success) {
            this.$message({message: '成功添加', type: 'success', duration: 1700})
            this.resetForm()
          } else {
            this.$message({message: '添加失败', type: 'error', duration: 1700})
          }
        })
      },

      // 重置表单
      resetForm() {
        this.$refs.ruleForm.resetFields()

        this.addInfo = {
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
          roomno: '2', // 食宿
          introduction: '', // 详细介绍
          phone: '', // 联系方式
          creator: 0,
          categoryid: '',
          image: ''
        }

      },

      // 封面上传成功
      handleAvatarSuccess(res, file) {
        if (res.success) {
          this.addInfo.image = res.data.location
        } else {
          this.$message({message: '封面上传失败，请重新上传', type: 'error', duration: 1700})
        }

      },


      handlePreview() {

      },
      handleRemove() {

      }

    }
  }
</script>

<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .detail-form {
    margin: 10px 10%;
  }

  .avatar {
    width: 215px;
    height: 270px;
    display: block;
    border-radius: 2.5%;
    border: solid 1px #e7e7e7;
  }

  .form-width {
    width: 230px;
  }

  .form-width3 {
    width: 460px;
  }

  /* ======= */
  /* 上传图片 */
  /* ======= */
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #ff7225;
  }

  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    width: 215px;
    height: 270px;
    line-height: 270px;
    color: #ff7225;
    text-align: center;
    border: 2px #d9d9d9 dashed;
  }

  /* ======= */
  /* 单选颜色 */
  /* ======= */
  /deep/ .el-radio__input.is-checked + .el-radio__label {
    color: #ff7225;
  }

  /deep/ .el-radio.is-bordered.is-checked {
    border-color: #ff7225;
  }

  /deep/ .el-radio__input.is-checked .el-radio__inner {
    border-color: #ff7225;
    background: #ff7225;
  }


</style>
