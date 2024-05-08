

import http from '../http'
import {UserListReq,UserListRes} from './type'

/**
 * @description 登录
 * @param data
 */
export function userList(data: UserListReq) {
    return http.post<UserListRes[]>(`/admin/user/list`, data)
  }
