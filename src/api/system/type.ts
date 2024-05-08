


import {BtnsType} from '@/store/modules/types/user'
/**
 * 登录参数
 */
export interface LoginDataReq {
  username: string
  password:string
  }
  export interface UserRes {
    userId: string
    name: string
    avatar: string
    btns: BtnsType[]
    roles: string[]
    routers: any
  }
  export interface LoginRes {
    token: string
  }

  /**
 * 登录参数
 */
export interface LogoutDataReq {
    roleId: string
  }