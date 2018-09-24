<template>
  <div class="dashboard-role-container">

    <panel-group @handleGetProposals="handleGetProposals"/>

    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <bar-chart/>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <div class="chart-wrapper">
          <line-chart :chart-data="lineChartData"/>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

const lineChartData = {
  approved: [1000, 1200, 1610, 1340, 1050, 1600, 1605],
  activated: [1200, 802, 901, 1504, 1602, 1400, 1405],
  declined: [200, 220, 310, 202, 301, 204, 104],
  submitted: [120, 220, 210, 104, 103, 120, 203],
  failed: [13, 12, 11, 12, 13, 14, 15]
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    PieChart,
    BarChart
  },
  data() {
    return {
      lineChartData: lineChartData // TODO: load data from BE API
    }
  },
  methods: {
    handleGetProposals(type) {
      // TODO: go to proposal list page
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-role-container {
  padding: 1rem;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 1rem 1rem 0;
    margin-bottom: 1rem;
  }
}
</style>
