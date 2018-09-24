/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const router = {
  path: '/customers',
  component: Layout,
  redirect: 'noredirect',
  name: 'customers',
  meta: {
    title: 'customers',
    icon: 'table'
  },
  children: [
    {
      path: 'retailProposals',
      component: () => import('@/views/customers/retailProposals'),
      name: 'retailProposals',
      meta: {
        title: 'retailProposals',
        roles: ['SystemAdmin', 'RetailAdmin', 'RetailUser']
      }
    },
    {
      path: 'financialLeasingProposals',
      component: () => import('@/views/customers/financialLeasingProposals'),
      name: 'financialLeasingProposals',
      meta: {
        title: 'financialLeasingProposals',
        roles: ['SystemAdmin', 'FinancialLeasingAdmin', 'FinancialLeasingUser']
      }
    }
  ]
}
export default router
