export interface OptionType {
  label: string;
  value: any;
}
export type TagType =
  | "input"
  | "autocomplete"
  | "input-number"
  | "select"
  | "select-v2"
  | "tree-select"
  | "cascader"
  | "date-picker"
  | "time-picker"
  | "time-select"
  | "switch"
  | "slider";

export interface ColumnType {
  prop: string;
  label: string;
  search?: {
    tag: TagType;
    placeholder: string;
    type?: string;
    format?: string;
    valueFormat?: string;
  };
  option?: OptionType[];
  isShow?: boolean;
  disabled?: boolean;
  rules?: any;
  table?:any
}
export interface DataType {
  [key: string]: any;
}
