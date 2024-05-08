

import http from '../http'
import {LoginDataReq,LogoutDataReq,LoginRes,UserRes} from './type'

/**
 * @description 登录
 * @param data
 */
export function login(data: LoginDataReq) {
    return http.post<LoginRes>(`/admin/system/login`, data)
  }
/**
 * 获取登录用户信息
 */
export function getUserInfo() {
  return http.get<UserRes>('/admin/system/info')
}
  /**
 * @description 退出登录
 * @param roleId
 */
export function logout(roleId: LogoutDataReq) {
    return http.get(`/admin/system/logout`,roleId)
  }