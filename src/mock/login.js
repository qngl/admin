import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['SystemAdmin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: 'System Admin'
  },
  retailAdmin: {
    roles: ['RetailAdmin'],
    token: 'retailAdmin',
    introduction: '我是Retail管理员',
    name: 'Retail Admin'
  },
  flAdmin: {
    roles: ['FinancialLeasingAdmin'],
    token: 'flAdmin',
    introduction: '我是Financial Leasing管理员',
    name: 'Financial Leasing Admin'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
