<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import retailDashboard from './retail'
import financialLeasingDashboard from './financialLeasing'

export default {
  name: 'Dashboard',
  components: { adminDashboard, retailDashboard, financialLeasingDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (this.roles.includes('RetailAdmin') || this.roles.includes('RetailUser')) {
      this.currentRole = 'retailDashboard'
    }
    if (this.roles.includes('FinancialLeasingAdmin') || this.roles.includes('FinancialLeasingUser')) {
      this.currentRole = 'financialLeasingDashboard'
    }
    if (this.roles.includes('SystemAdmin')) {
      this.currentRole = 'adminDashboard'
    }
  }
}
</script>
