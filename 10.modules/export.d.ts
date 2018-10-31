// 导出类型声明
declare module "url" {
    export interface Url {
        url: string
    }
    export function sayUrl(): Url
}