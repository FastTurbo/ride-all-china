<template>
  <div>
    <el-col :span="24" style="width:100%;">
      <el-form :inline="true" :model="searchForm" class="el-form--inline" align="left">
        <el-form-item label="姓名">
          <el-input :model="searchForm.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="品牌">
          <el-input :model="searchForm.brand" placeholder="单车品牌"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker :model="searchForm.date" type="date" placehoder="出生日期"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native="search">查询</el-button>
          <el-button type="success" @click.native="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="tableData" border highlight-current-row v-loading="listLoading" style="width:100%;padding-top:5px;">
      <el-table-column prop="id" label="编号" width="80"></el-table-column>
      <el-table-column prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column prop="age" label="年龄" width="80"></el-table-column>
      <el-table-column prop="address" label="地址" min-width="300"></el-table-column>
      <el-table-column prop="brand" label="品牌" width="160"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-tooltip content="编辑这条数据" effect="light" placement="top">
            <el-button size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          </el-tooltip>

          <el-button type="danger" size="small" @click="handleRemove(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" align="right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10,20,50,100]"
        :page-size="10"
        layout="sizes,prev,pager,next,total"
        :total="total"></el-pagination>
    </el-col>
  </div>

</template>

<script>
  import { getRiders } from '../api/api'
    export default {
      name: "table1",
      data(){
          return {
            searchForm:{
              name:'',
              brand:'',
              date:''
            },
            total:0,
            page:1,
            size:10,
            tableData:[],
            listLoading:false
          }
      },
      mounted(){

        this.getRiders();
      },
      methods:{
        getRiders(){
          let param = {
            size:this.size,
            page:this.page
          }
          this.listLoading = true
          getRiders(param).then(res =>{
            this.listLoading = false
            this.tableData = res.data
            this.total = res.total
          })
        },
        search(){
          console.log(this.searchForm)
        },
        reset(){
            console.log('reset...')
        },
        handleEdit(){

        },
        handleRemove(){

        },
        handleSizeChange(val){
          this.size = val
          this.getRiders()
        },
        handleCurrentChange(val){
          this.page = val
          this.getRiders()
        }
      }
    }
</script>

<style scoped>

</style>
