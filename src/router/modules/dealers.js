/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const router = {
  path: '/dealers',
  component: Layout,
  redirect: 'noredirect',
  name: 'dealers',
  meta: {
    title: 'dealers',
    icon: 'table'
  },
  children: [{
    path: 'retailDealers',
    component: () =>
        import('@/views/dealers/retailDealers'),
    name: 'retailDealers',
    meta: {
      title: 'retailDealers',
      roles: ['SystemAdmin', 'RetailAdmin', 'RetailUser']
    }
  },
  {
    path: 'financialLeasingDealers',
    component: () =>
        import('@/views/dealers/financialLeasingDealers'),
    name: 'financialLeasingDealers',
    meta: {
      title: 'financialLeasingDealers',
      roles: ['SystemAdmin', 'FinancialLeasingAdmin', 'FinancialLeasingUser']
    }
  }
  ]
}
export default router
