/**
 * 请求参数
 */
export interface GoodsListReq {
  name: string;
  code: string;
  type: string;
  date: string;
}
/**
 * 返回数据
 */
export interface GoodsListRes {
  name: string;
  code: string;
  type: string;
  date: string;
  id:string
}
