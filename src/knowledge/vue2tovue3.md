# 在 Vue 2 迁移 Vue3 不兼容

## 1. 移除的 API

**a. `$on`, `$off`, `$once`**

- Vue 2 中使用 `$on`, `$off`, `$once` 来监听和取消事件。
- Vue 3 中不再支持这些方法，推荐使用组合式 API (Composition API) 或 `emits` 选项。

**b. `Vue.config.keyCodes`**

- Vue 2 中可以使用 `Vue.config.keyCodes` 自定义键码别名。
- Vue 3 移除了这个功能，推荐使用标准的 JavaScript 事件处理。

## 2. 变化的 API

**a. 全局 API 调整**

- Vue 2 的 `Vue.mixin`、`Vue.component` 等全局 API 现在在 Vue 3 中通过 `app.mixin`、`app.component` 等实例方法调用。

  ```javascript
  // Vue 2
  Vue.component('my-component', MyComponent);

  // Vue 3
  const app = createApp(App);
  app.component('my-component', MyComponent);
  ```

**b. 自定义指令钩子函数名称变化**

- Vue 2 的自定义指令钩子函数名称如 `bind`、`inserted` 等在 Vue 3 中被修改为 `beforeMount`、`mounted` 等。

  ```javascript
  // Vue 2
  Vue.directive('focus', {
    bind(el) {
      el.focus();
    }
  });

  // Vue 3
  app.directive('focus', {
    beforeMount(el) {
      el.focus();
    }
  });
  ```

## 3. 选项 API 的变化

**a. `data` 选项的使用**

- Vue 2 中 `data` 可以是一个对象或函数，Vue 3 中 `data` 必须是一个返回对象的函数。

  ```javascript
  // Vue 2
  data: {
    message: 'Hello Vue!'
  }

  // Vue 3
  data() {
    return {
      message: 'Hello Vue!'
    };
  }
  ```

## 4. 模板语法变化

**a. 移除 `v-on.native` 修饰符**

- Vue 2 中使用 `v-on.native` 监听子组件的原生事件，Vue 3 中移除了该修饰符。

  ```html
  <!-- Vue 2 -->
  <child-component v-on:click.native="handleClick"></child-component>

  <!-- Vue 3 -->
  <child-component v-on:click="handleClick"></child-component>
  ```

## 5. 生命周期钩子变化

**a. 生命周期钩子名称**

- Vue 2 中的 `beforeCreate` 和 `created` 钩子在 Vue 3 中依然存在，但 `destroyed` 被替换为 `unmounted`，`beforeDestroy` 被替换为 `beforeUnmount`。

  ```javascript
  // Vue 2
  beforeDestroy() {
    console.log('Component is about to be destroyed');
  }

  // Vue 3
  beforeUnmount() {
    console.log('Component is about to be unmounted');
  }
  ```

## 6. 事件处理变化

**a. `sync` 修饰符**

- Vue 2 中的 `.sync` 修饰符在 Vue 3 中不再支持，推荐使用 `v-model` 的参数语法。

  ```html
  <!-- Vue 2 -->
  <child-component :prop.sync="someData"></child-component>

  <!-- Vue 3 -->
  <child-component v-model:prop="someData"></child-component>
  ```

## 7. 插槽变化

**a. 作用域插槽语法**

- Vue 2 中使用 `slot-scope`，Vue 3 中改用 `v-slot`。

  ```html
  <!-- Vue 2 -->
  <template slot-scope="slotProps">
    {{ slotProps.text }}
  </template>

  <!-- Vue 3 -->
  <template v-slot="{ text }">
    {{ text }}
  </template>
  ```

## 8. Filter 过滤器

- Vue 3 移除了过滤器的支持，推荐使用方法或计算属性来代替。

  ```html
  <!-- Vue 2 -->
  {{ message | capitalize }}

  <!-- Vue 3 -->
  {{ capitalize(message) }}

  <script>
  export default {
    methods: {
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    }
  };
  </script>
  ```

这些变化总结了从 Vue 2 到 Vue 3 的主要不兼容改动，了解这些改动有助于更顺利地进行 Vue 3 的迁移和开发。