import { RouteRecordRaw } from 'vue-router'
export interface TabsState{
    activeTabsValue: string
    visitedViews: RouteRecordRaw[]
    cachedViews: any[]
    authMenuList:Menu.MenuOptions[],
}
