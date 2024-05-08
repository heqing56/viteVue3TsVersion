export interface LoginState{
    userName:string,
    password:string
}
export interface tokenState{
    token:string,
}
export type BtnsType='Add' | 'Edit' | 'View' | 'Del'
export interface userState {
    userId: string
    name: string
    avatar: string,
    btns:BtnsType[]
  }
// export type LoginStateType = keyof LoginState