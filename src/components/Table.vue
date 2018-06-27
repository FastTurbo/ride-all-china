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

  </div>

</template>

<script>
    export default {
        name: "table1",
      data(){
          return {
            searchForm:{
              name:'',
              brand:'',
              date:''
            }
          }
      },
      methods:{
          search(){
            console.log(this.searchForm)
          },
        reset(){
            console.log('reset...')
        }
      }
    }
</script>

<style scoped>

</style>
