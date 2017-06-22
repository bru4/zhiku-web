<style lang="scss" scoped>
@import "../../assets/styles/config.scss";
.input{
  width: 50%;
}
</style>

<template>
<div class="dashboard" id="dashboard">
  <el-table :data="datas" style="width: 100%">
    <el-table-column prop="date" label="日期" width="200" sortable></el-table-column>
    <el-table-column prop="name" label="姓名" width="200" sortable></el-table-column>
    <el-table-column prop="province" label="省份" width="200" sortable></el-table-column>
    <el-table-column prop="city" label="市区" width="200" sortable></el-table-column>
    <el-table-column prop="address" label="地址" width="300" sortable></el-table-column>
    <el-table-column prop="zip" label="邮编" width="200" sortable></el-table-column>
    <el-table-column prop="zip" label="邮编" width="200" sortable></el-table-column>
    <el-table-column fixed="right" label="操作" width="200">
      <template scope="scope">
        <el-button type="text" @click="showEditDialog(scope.$index, datas)" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 编辑的dialog -->
  <el-dialog size="small" title="人员编辑" :visible.sync="dialogEditFormVisible">
    <el-form :model="editForm" :rules="rules">
      <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
        <el-input class="input" v-model="editForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="生日" :label-width="formLabelWidth">
        <el-date-picker type="date" placeholder="选择日期" v-model="editForm.date"></el-date-picker>
      </el-form-item>
      <el-form-item label="地区" :label-width="formLabelWidth">
        <el-select v-model="editForm.province" placeholder="请选择活动区域">
          <el-option label="上海" value="上海"></el-option>
          <el-option label="北京" value="北京"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详细地址" :label-width="formLabelWidth">
        <el-input class="input" v-model="editForm.address" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogEditFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogEditFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>


</div>
</template>

<script>
export default {
  name: "dashboard",
  components: {},
  data: function data() {
    return {
      dialogEditFormVisible: false,
      editForm: {
        name: '',
        province: '',
        date: '',
        address: ''
      },
      rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 2, max: 5, message: '请输入2到5个字符', trigger: 'blur'}
          ]
      },
      formLabelWidth: '120px',
      datas: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1578 弄',
        zip: 200334
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1568 弄',
        zip: 200335
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1558 弄',
        zip: 200336
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1548 弄',
        zip: 200337
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1538 弄',
        zip: 200338
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1528 弄',
        zip: 200339
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200340
      }]
    }
  },
  methods: {
    showEditDialog: function(index, rows) {
      var _this = this
      this.dialogEditFormVisible = true
      _this.editForm = _this.datas[index]
    },
  }
}
</script>
