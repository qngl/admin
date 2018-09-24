<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12" class="error-image">
        <img :src="errorImage" alt="401">
      </el-col>
      <el-col :span="12">
        <h1 class="text-jumbo">401</h1>
        <h2>{{ message }}</h2>
        <el-button type="primary" @click="back">返回首页</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import errorImage from '@/assets/images/401.png'

export default {
  name: 'Page401',
  data() {
    return {
      errorImage: errorImage
    }
  },
  computed: {
    message() {
      return '你没有权限访问该页面'
    }
  },
  methods: {
    back() {
      this.$router.push({ path: '/dashboard' })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .errPage-container {
    width: 50rem;
    max-width: 100%;
    margin: 0 auto;
    padding: 6rem 0;
    .error-image{
      text-align: center;
    }
    .text-jumbo {
      padding-top: 2rem;
      font-size: 3rem;
      font-weight: bold;
    }
    .el-button {
      margin-top: 1rem;
    }
  }
</style>
