// Node和Classic两种方式

// Classic：从包含导入文件的目录开始依次向上级目录遍历   .ts .d.ts
// node.js:：文件是否存在，目录是否包含一个package.json文件且含main字段，检查是否含index.js
// TypeScript：文件是否存在，（.ts，.tsx和.d.ts），目录是否包含一个package.json文件且含main字段，检查index（.ts，.tsx和.d.ts）