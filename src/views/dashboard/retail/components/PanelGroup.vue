<template>
  <el-row :gutter="24" class="panel-group">
    <el-col :xs="12" :sm="8" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleGetProposals()">
        <div class="card-panel-icon-wrapper icon-primary">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ $t("all") }}</div>
          <count-to :start-val="0" :end-val="102400" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleGetProposals('submitted')">
        <div class="card-panel-icon-wrapper icon-sucess">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ $t("submitted") }}</div>
          <count-to :start-val="0" :end-val="81212" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleGetProposals('approved')">
        <div class="card-panel-icon-wrapper icon-sucess">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ $t("approved") }}</div>
          <count-to :start-val="0" :end-val="13600" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleGetProposals('activated')">
        <div class="card-panel-icon-wrapper icon-sucess">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ $t("activated") }}</div>
          <count-to :start-val="0" :end-val="13600" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleGetProposals('declined')">
        <div class="card-panel-icon-wrapper icon-sucess">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ $t("declined") }}</div>
          <count-to :start-val="0" :end-val="13600" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleGetProposals('exception')">
        <div class="card-panel-icon-wrapper icon-danger">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ $t("exception") }}</div>
          <count-to :start-val="0" :end-val="9280" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleGetProposals(type) {
      this.$emit('handleGetProposals', type)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  .card-panel-col{
    margin-bottom: 1.25rem;
  }
  .card-panel {
    height: 6rem;
    cursor: pointer;
    font-size: 0.75rem;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 0.25rem 0.25rem 2.75rem rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-primary {
        background: #36a3f7;
      }
      .icon-danger {
        background: #f4516c;
      }
      .icon-sucess {
        background: #34bfa3
      }
    }
    .icon-primary {
      color: #36a3f7;
    }
    .icon-danger {
      color: #f4516c;
    }
    .icon-sucess {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 1rem 0.25rem 0;
      padding: 0.5rem;
      transition: all 0.38s ease-out;
      border-radius: 0.5rem;
    }
    .card-panel-icon {
      float: left;
      font-size: 3rem;
    }
    .card-panel-description {
      font-weight: bold;
      margin: 26px 0.25rem;
      margin-left: 0px;
      text-align: center;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 0.75rem;
      }
      .card-panel-num {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
