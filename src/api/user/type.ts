/**
 * 请求参数
 */
export interface UserListReq {
  name: string;
  code: string;
  type: string;
  date: string;
}
/**
 * 返回数据
 */
export interface UserListRes {
  name: string;
  code: string;
  type: string;
  date: string;
  id:string
}
