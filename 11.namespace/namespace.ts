namespace Validation {
    export const reg = /abc/;
    interface Panda {
        face: string;
    }
    export class PandaInterface implements Panda {
        face: string;
        constructor(color: string) {
            this.face = color;
        }
    }
}

// 不应该对模块使用命名空间，使用命名空间是为了提供逻辑分组和避免命名冲突 