# 从零开始的vue自定义指令

## 简介

自定义指令：v-Int、v-Price
- v-Int: 只能输入非负整数
- v-Price: 只能输入金额（默认保留两位小数, 小数点只能输一次）

## 安装

```js

npm install zero-directive

// 或

yarn add zero-directive

```

## 使用

在main.js中引入即可（引入vue之后引入）

```js

import 'zero-directive'

```

```html
<el-input v-Int placeholder="只能输入数字">
<el-input v-Price placeholder="只能输入金额且保留两位小数">
```
