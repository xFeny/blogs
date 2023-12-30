---
title: Markdown 扩展
icon: box-archive
category:
  - 教程
  - Markdown
tag:
  - 示例
  - Markdown
---

`vuepress-theme-hope` 通过 [vuepress-plugin-md-enhance](https://plugin-md-enhance.vuejs.press/zh/)，在 Markdown 中启用了更多的语法与新功能。

## 一、提示容器

### 1、重要容器

```
::: important
重要容器。
:::

::: important 自定义标题
重要容器。
:::
```

::: important
重要容器。
:::



::: important 自定义标题
重要容器。
:::

### 2、信息容器

```
::: info
信息容器。
:::

::: info 自定义标题
信息容器。
:::
```

::: info
信息容器。
:::



::: info 自定义标题
信息容器。
:::

### 3、注释容器

```
::: note
注释容器。
:::

::: note 自定义标题
注释容器。
:::
```

::: note
注释容器。
:::



::: note 自定义标题
注释容器。
:::

### 4、提示容器

```
::: tip
提示容器
:::

::: tip 自定义标题
提示容器
:::
```

::: tip
提示容器
:::



::: tip 自定义标题
提示容器
:::

### 5、警告容器

```
::: warning
警告容器
:::

::: warning 自定义标题
警告容器
:::
```

::: warning
警告容器
:::



::: warning 自定义标题
警告容器
:::

### 6、危险容器

```
::: caution
危险容器
:::

::: warning 自定义标题
警告容器
:::
```

::: caution
危险容器
:::



::: warning 自定义标题
警告容器
:::

### 7、详情容器

```
::: details
详情容器
:::

::: details 自定义标题
详情容器
:::
```

::: details 
详情容器

:::



::: details 自定义标题
详情容器
:::



8、

:::: md-demo 显示Markdown语法

```js
let i = 1/0;
```

::::



## 二、选项卡

```
::: tabs

@tab 标题 1

<!-- tab 1 内容 -->

@tab 标题 2

<!-- tab 2 内容 -->

@tab:active 标题 3

<!-- tab 3 将会被默认激活 -->

<!-- tab 3 内容 -->

:::
```

::: tabs

@tab 标题 1

<!-- tab 1 内容 -->

@tab 标题 2

<!-- tab 2 内容 -->

@tab:active 标题 3

<!-- tab 3 将会被默认激活 -->

<!-- tab 3 内容 -->

:::



## 三、代码块分组

:::: md-demo 

::: code-tabs#language

@tab TS

```ts {8}
// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // 启用提示容器
      hint: true,
    }),
  ],
};
```

@tab JS

```js {8}
// .vuepress/config.js
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // 启用提示容器
      hint: true,
    }),
  ],
};
```

:::

::::



:::: md-demo 

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

::::
