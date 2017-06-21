<style lang="scss" scoped>
@import "../../assets/styles/config.scss";
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
        <el-button type="text" @click="dialogEditFormVisible = true" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 编辑的dialog -->
  <el-dialog size="small" title="收货地址" :visible.sync="dialogEditFormVisible">
    <el-form :model="editForm">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input class="input" v-model="editForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="editForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
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
        region: ''
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
  methods: {}
}
</script>
