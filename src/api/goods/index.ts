

import http from '../http'
import {GoodsListReq,GoodsListRes} from './type'

/**
 * @description 登录
 * @param data
 */
export function goodsList(data: GoodsListReq) {
    return http.post<GoodsListRes[]>(`/admin/goods/list`, data)
  }
