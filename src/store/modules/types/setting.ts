export interface NavState {
    collapse: boolean
    refresh: boolean
    themeConfig: ThemeConfigProps
  }
  
  export interface ThemeConfigProps {
    primary: string
    isDark: boolean
  }