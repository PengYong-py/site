# CSS 规范

## 文件组织

- **目录结构**：
  ```
  css/
  ├── base/
  │   ├── reset.css
  │   ├── normalize.css
  │   └── ...
  ├── components/
  │   ├── button.css
  │   ├── input.css
  │   └── ...
  ├── layout/
  │   ├── grid.css
  │   ├── flex.css
  │   └── ...
  ├── pages/
  │   ├── home.css
  │   ├── about.css
  │   └── ...
  └── utils/
      ├── mixins.css
      ├── variables.css
      └── ...

## 选择器命名

- **BEM（Block Element Modifier）命名法**：
```css
.block {}
.block__element {}
.block--modifier {}
```
- **类名约定**：
    - 使用小写字母和连字符。
    - 尽量使用有意义的名称，避免过于简短或随意的名称。
```css
.nav-bar {}
.nav-bar__item {}
.nav-bar--active {}
```

## 代码格式
- **缩进**：使用2个空格进行缩进。
- **选择器**：每个选择器单独一行。
- **大括号**：左大括号与选择器同一行，右大括号独占一行。
- **属性**：每个属性独占一行，冒号后留一个空格。
- **末尾**：最后一个属性不需要分号。
```css
.selector {
  display: block;
  width: 100px;
  height: 100px;
}
```
## 注释
- **块注释**：用于分隔代码的主要部分。
```css
/* ==========================================================================
   Layout
   ========================================================================== */
```
- **行内注释**：用于解释特定的规则。
```css
.element {
  color: red; /* 主色调 */
}
```
## CSS 结构
- **按层次组织**：

- **Reset**：重置浏览器默认样式。
- **基础样式**：定义基本的全局样式。
- **布局样式**：定义全局布局样式。
- **组件样式**：定义具体组件的样式。
- **页面样式**：定义特定页面的样式。
```css
/* Reset */
* {
  margin: 0;
  padding: 0;
}

/* 基础样式 */
body {
  font-family: Arial, sans-serif;
}

/* 布局样式 */
.container {
  width: 80%;
  margin: 0 auto;
}

/* 组件样式 */
.button {
  background-color: blue;
  color: white;
}

/* 页面样式 */
.home-page {
  background-color: #f0f0f0;
}
```

## 常见约定
- **避免使用!important**：除非绝对必要，避免使用 !important，以免后续样式覆盖问题。

- **使用简写属性**：能简写的属性尽量简写。
```css
margin: 10px 20px 30px 40px;
```
- **颜色和字体**：尽量使用变量或预处理器中的变量来管理颜色和字体。
```css
:root {
  --main-color: #3498db;
  --secondary-color: #2ecc71;
}

.header {
  color: var(--main-color);
}

```
- **响应式设计**：使用媒体查询来处理不同设备的样式。
```css
@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}
```

