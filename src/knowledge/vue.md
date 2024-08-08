# vue相关

## 生命周期
Vue.js 提供了一系列的生命周期钩子（Lifecycle Hooks），让开发者可以在组件实例的不同阶段执行特定的代码。这些钩子函数覆盖了从组件创建到销毁的整个过程。

### Vue 2.x 和 Vue 3.x 的生命周期钩子

#### 创建阶段

1. **`beforeCreate`**
   - **触发时机**：实例刚创建之后，此时数据观测 (reactivity) 和事件机制尚未初始化。
   - **用途**：可以在这里进行一些初始化工作，但无法访问 `data`、`computed`、`methods` 和 `watch` 等属性。

2. **`created`**
   - **触发时机**：实例创建完成后，此时数据观测、属性和方法已完成初始化，但尚未挂载 DOM。
   - **用途**：可以进行数据获取、设置事件监听器等操作，可以访问组件的所有属性和方法。

#### 挂载阶段

3. **`beforeMount`**
   - **触发时机**：在挂载开始之前被调用，相关的 `render` 函数首次被调用。
   - **用途**：可以在这里进行最后的修改或调整，但此时 DOM 结构还未创建。

4. **`mounted`**
   - **触发时机**：实例挂载到 DOM 上之后被调用。
   - **用途**：可以在这里进行与 DOM 相关的操作，例如获取 DOM 节点或进行一些 DOM 操作。

#### 更新阶段

5. **`beforeUpdate`**
   - **触发时机**：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   - **用途**：可以在数据更新前进行一些操作，或者在不需要更新时阻止渲染。

6. **`updated`**
   - **触发时机**：由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。
   - **用途**：可以在更新 DOM 之后执行一些操作，避免频繁操作 DOM。

#### 销毁阶段

7. **`beforeDestroy`**
   - **触发时机**：实例销毁之前调用，此时实例仍然完全可用。
   - **用途**：可以在这里进行一些清理工作，如清除定时器、取消事件监听等。

8. **`destroyed`**
   - **触发时机**：实例销毁后调用。此时组件的所有指令、事件监听器等均已解除绑定，所有子实例也已被销毁。
   - **用途**：进行一些最后的清理工作，释放资源。

### Vue 3.x 特有的生命周期钩子

#### 组件更新阶段

9. **`beforeUnmount`**
   - **触发时机**：组件实例销毁之前调用，此时组件实例仍然完全可用，类似于 Vue 2.x 的 `beforeDestroy`。
   - **用途**：进行一些清理工作，如清除定时器、取消事件监听等。

10. **`unmounted`**
    - **触发时机**：组件实例销毁后调用。此时组件的所有指令、事件监听器等均已解除绑定，所有子实例也已被销毁，类似于 Vue 2.x 的 `destroyed`。
    - **用途**：进行一些最后的清理工作，释放资源。

### Vue 3.x 组合 API 中的生命周期钩子

在 Vue 3.x 中，可以使用组合 API 提供的生命周期钩子来替代选项 API 中的钩子函数。组合 API 中的钩子函数通常是在 `setup` 函数中使用。

```javascript
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  setup() {
    onBeforeMount(() => {
      console.log('beforeMount');
    });

    onMounted(() => {
      console.log('mounted');
    });

    onBeforeUpdate(() => {
      console.log('beforeUpdate');
    });

    onUpdated(() => {
      console.log('updated');
    });

    onBeforeUnmount(() => {
      console.log('beforeUnmount');
    });

    onUnmounted(() => {
      console.log('unmounted');
    });
  }
};
```

这些生命周期钩子在开发过程中非常有用，可以帮助我们在组件的不同阶段执行特定的逻辑，从而实现更灵活和可控的应用开发。

## mixins的优先级

- **数据**：递归合并，组件数据优先。
- **生命周期钩子**：合并为数组，按顺序依次调用，先 mixin 后组件。
- **方法和计算属性**：组件优先，覆盖 mixin。
- **Watchers**：合并为数组，按顺序依次调用，先 mixin 后组件。
- **自定义选项**：可以定义自定义合并策略，否则默认覆盖。


## 完整的导航解析流程

- 导航被触发。
- 在失活的组件里调用 beforeRouteLeave 守卫。
- 调用全局的 beforeEach 守卫。
- 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
- 在路由配置里调用 beforeEnter。
- 解析异步路由组件。
- 在被激活的组件里调用 beforeRouteEnter。
- 调用全局的 beforeResolve 守卫(2.5+)。
- 导航被确认。
- 调用全局的 afterEach 钩子。
- 触发 DOM 更新。
- 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

## Virtual Dom 算法简述

- 首先从上至下，从左往右遍历对象，也就是树的深度遍历，这一步中会给每个节点添加索引，便于最后渲染差异
- 一旦节点有子元素，就去判断子元素是否有不同

## Virtual Dom 算法实现

### 树的递归
1. 新的节点的 tagName 或者 key 和旧的不同，这种情况代表需要替换旧的节点，并且也不再需要遍历新旧节点的子元素了，因为整个旧节点都被删掉了
2. 新的节点的 tagName 和 key（可能都没有）和旧的相同，开始遍历子树
3. 没有新的节点，那么什么都不用做

### 判断属性的更改
1. 遍历旧的属性列表，查看每个属性是否还存在于新的属性列表中
2. 遍历新的属性列表，判断两个列表中都存在的属性的值是否有变化
3. 在第二步中同时查看是否有属性不存在与旧的属性列列表中
### 判断列表差异算法实现

1. 遍历旧的节点列表，查看每个节点是否还存在于新的节点列表中
2. 遍历新的节点列表，判断是否有新的节点
3. 在第二步中同时判断节点是否有移动

### 遍历子元素打标识
1. 判断两个列表差异
2. 给节点打上标记

### 渲染差异
1. 深度遍历树，将需要做变更操作的取出来
2. 局部更新 DOM

## Vue 的双向数据绑定实现原理
- 数据劫持：使用 Object.defineProperty 劫持对象属性的 get 和 set。
- 依赖收集：在属性 get 时，收集当前的 Watcher 实例作为依赖。
- Watcher 实例：创建 Watcher 实例来订阅属性变化，并在属性变化时执行回调。
- 事件通知：在属性 set 时，通知所有依赖于该属性的 Watcher 实例更新。

## 如何在 Vue 中进行组件间的通信，并列举几种常见的方法
- 父子组件通信： 使用 props 和 emit。
-  非父子组件通信： 使用全局事件总线、Vuex、provide/inject 等。

## 如何优化 Vue 应用的性能？请列举几种方法
1. 懒加载组件
2. 使用 v-once：对于静态内容使用 v-once 指令，使其只渲染一次。
3. 使用 v-for 时加 key：在使用 v-for 渲染列表时，确保提供唯一的 key。
4. 减少 watch 数量：避免过多的 watch，尽量使用计算属性（computed properties）。
5. 适当的分片更新：使用 requestAnimationFrame 或 setTimeout 分片更新数据，避免长时间的阻塞。
6. 事件代理：对于大量的事件监听，可以使用事件代理来减少内存占用。



`nextTick` 是 Vue.js 提供的一个方法，用于在下次 DOM 更新循环结束之后执行延迟回调。在了解 `nextTick` 的原理之前，我们需要了解 JavaScript 的事件循环机制（Event Loop）以及 Vue 的响应式更新机制。

### 事件循环和微任务

JavaScript 运行环境分为同步任务和异步任务，同步任务在主线程上执行，异步任务在任务队列中等待。异步任务又分为宏任务（macrotask）和微任务（microtask）。

- **宏任务**：如 `setTimeout`、`setInterval`、I/O 操作等。
- **微任务**：如 `Promise.then`、`MutationObserver` 等。

事件循环的一个周期可以概括为：
1. 执行一个宏任务（如果有的话）。
2. 执行所有的微任务。
3. 更新渲染。
4. 重复以上步骤。

### Vue 的响应式更新机制

Vue 的响应式系统会收集依赖，当数据变化时，会触发依赖通知（即 Watcher），然后将这些 Watcher 推入一个队列（这个队列是一个微任务队列）。为了提高性能，Vue 会对这些更新进行批处理（在同一个事件循环中合并相同的更新）。

## `nextTick` 的实现原理

Vue 的 `nextTick` 方法就是基于微任务实现的，它的主要作用是在 DOM 更新完成之后执行一个回调函数。其内部实现如下：

1. **定义回调队列**：存储需要在下次 DOM 更新后执行的回调函数。
2. **定义一个标志位**：标志是否已经向微任务队列添加了一个任务。
3. **创建微任务**：根据环境选择合适的微任务实现方式。

以下是一个简化版的 `nextTick` 实现：

```javascript
let callbacks = [];
let pending = false;

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  copies.forEach(cb => cb());
}

let microTimerFunc;

if (typeof Promise !== 'undefined') {
  const p = Promise.resolve();
  microTimerFunc = () => {
    p.then(flushCallbacks);
  };
} else if (typeof MutationObserver !== 'undefined') {
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, { characterData: true });
  microTimerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined') {
  microTimerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  microTimerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nextTick(cb, ctx) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        console.error(e);
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    microTimerFunc();
  }

  // 如果没有提供回调且Promise可用，返回一个Promise
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve;
    });
  }
}
```

### `nextTick` 的工作流程

1. **将回调函数推入队列**：无论是用户传入的回调函数，还是内部更新 DOM 之后需要执行的操作，都会被推入 `callbacks` 队列。
2. **标志位**：检查 `pending` 标志，如果是 `false`，说明没有任务在等待执行，此时设置 `pending` 为 `true` 并调用 `microTimerFunc` 创建一个微任务。
3. **执行微任务**：在微任务队列中调用 `flushCallbacks` 方法，该方法会依次执行 `callbacks` 队列中的所有回调函数，并清空队列。

### 使用 `nextTick` 的场景

`nextTick` 的常见使用场景包括：
- 在数据更新之后立即获取更新后的 DOM 状态。
- 在数据变化后执行依赖 DOM 更新的逻辑。

例如：

```javascript
this.message = 'Hello, World!';
this.$nextTick(() => {
  // DOM 更新完成后执行
  console.log(this.$refs.message.innerText); // 'Hello, World!'
});
```

总结来说，Vue 的 `nextTick` 方法基于 JavaScript 的微任务机制，确保在 DOM 更新完成之后执行回调函数，从而保证了数据与视图的同步性和一致性。


## Vue 3 的diff算法区别

Vue 3 引入了一些关键改进和优化来提升虚拟 DOM diff 算法的性能和效率。这些改进使得 Vue 3 在处理大型和复杂的视图时更加高效。下面是 Vue 3 diff 算法与 Vue 2 的主要区别：

### Vue 2 的 diff 算法

在 Vue 2 中，diff 算法主要遵循以下步骤：

1. **同层对比**：Vue 2 只对同一层级的节点进行对比，比较它们的类型和 key 属性。
2. **深度优先遍历**：算法会递归地深入每个节点的子节点进行比较。
3. **最小化 DOM 操作**：通过对比前后的虚拟 DOM 树，尽量减少实际的 DOM 操作次数。

### Vue 3 的 diff 算法改进

Vue 3 对 diff 算法进行了优化，使其更高效、更具性能优势。以下是一些主要的改进：

1. **静态提升**：
   - 在编译阶段，Vue 3 能够识别并提升静态节点，即那些在更新过程中不需要变化的节点。这样，静态节点在每次重新渲染时都不会被重新创建或比较，从而减少了不必要的计算。

2. **缓存**：
   - Vue 3 会缓存模板中的事件处理器和插槽函数，以减少在每次重新渲染时创建新函数的开销。

3. **静态分析**：
   - 编译阶段会进行更多的静态分析，识别出哪些部分是纯静态的，可以在初始化时直接渲染，而无需在每次更新时进行对比。

4. **Fragment 支持**：
   - Vue 3 支持 Fragment，这意味着一个组件可以返回多个根节点。diff 算法能够高效处理这些 Fragment，避免了不必要的包装节点。

5. **更智能的节点更新**：
   - Vue 3 的 diff 算法在同层对比时，会使用最长递增子序列算法（Longest Increasing Subsequence，LIS）来优化节点移动操作。这样，当一些节点在列表中只是顺序发生变化时，可以减少实际的 DOM 操作次数。

### 详细对比

| 特性                | Vue 2                              | Vue 3                                    |
|-------------------|----------------------------------|------------------------------------------|
| 静态节点提升          | 否                                 | 是                                       |
| 事件处理器和插槽缓存     | 否                                 | 是                                       |
| 静态分析            | 基本                               | 更深入                                    |
| Fragment 支持      | 否，需要单个根节点                     | 是，可以多个根节点                            |
| 节点更新优化          | 基本 diff，对比和更新                   | 使用最长递增子序列算法优化节点移动                   |

### 示例代码

以下是一个示例，展示了 Vue 3 中 diff 算法的高效性：

```javascript
const { createApp, ref } = Vue;

const App = {
  setup() {
    const items = ref([1, 2, 3, 4, 5]);

    function shuffle() {
      items.value = items.value.sort(() => Math.random() - 0.5);
    }

    return { items, shuffle };
  },
  template: `
    <div>
      <button @click="shuffle">Shuffle</button>
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
    </div>
  `
};

createApp(App).mount('#app');
```

在这个示例中，点击按钮会打乱数组 `items` 的顺序。Vue 3 的 diff 算法会高效地处理列表项的重新排序，尽量减少 DOM 操作。

### 总结

Vue 3 在 diff 算法上的改进大大提升了性能，特别是在处理复杂和大型视图时。静态提升、缓存、静态分析、Fragment 支持和更智能的节点更新算法，使得 Vue 3 的虚拟 DOM 操作更加高效。这些改进使得 Vue 3 能够提供更快的渲染速度和更好的用户体验。

## vue2,和vue3唯一key的生成区别

在 Vue 2 和 Vue 3 中，`key` 属性的基本作用和使用方式是相同的，但由于 Vue 3 在虚拟 DOM 和编译方面进行了大量优化，使得 `key` 属性的生成和使用有了一些细微的区别和改进。下面是一些关键点：

### Vue 2 和 Vue 3 中 `key` 的基本作用

在 Vue 2 和 Vue 3 中，`key` 属性主要用于标识 VNode（虚拟节点）的唯一性，确保在更新虚拟 DOM 时能够正确地复用或重建元素，特别是在以下场景中：

1. `v-for` 渲染的列表项。
2. 动态组件。
3. 条件渲染（例如使用 `v-if` 和 `v-else`）。

### Vue 2 中 `key` 的生成和使用

在 Vue 2 中，`key` 属性通常由开发者手动设置。其主要作用是通过比较前后两个虚拟 DOM 树中的 `key` 来决定节点的复用或销毁。Vue 2 的虚拟 DOM diff 算法会对同一层级的节点进行比较，如果 `key` 不同，则会销毁旧节点并创建新节点。

示例代码：

```html
<template>
  <div>
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ]
    };
  }
};
</script>
```

### Vue 3 中 `key` 的改进和优化

虽然 Vue 3 中 `key` 属性的作用和 Vue 2 基本相同，但由于 Vue 3 对虚拟 DOM 和编译过程进行了大量优化，使得 `key` 属性的生成和使用更为高效。以下是一些改进点：

1. **更高效的虚拟 DOM diff 算法**：Vue 3 的 diff 算法引入了最长递增子序列（LIS）算法，这使得节点的重新排序和移动操作更加高效。当节点顺序变化时，Vue 3 能够更智能地处理这些变化。

2. **静态提升**：Vue 3 会在编译阶段识别和提升静态节点，从而减少运行时的更新开销。静态节点通常不会需要 `key`，因为它们不参与动态更新。

3. **编译器优化**：Vue 3 的编译器会进行更多的静态分析和优化，例如缓存模板中的事件处理器和插槽函数。这些优化间接提升了 `key` 属性在动态更新中的性能。

### 示例代码

以下示例展示了在 Vue 3 中如何使用 `key` 属性，以及 Vue 3 的一些优化特性：

```html
<template>
  <div>
    <button @click="shuffle">Shuffle</button>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const items = ref([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]);

    function shuffle() {
      items.value.sort(() => Math.random() - 0.5);
    }

    return { items, shuffle };
  }
};
</script>
```

在这个例子中，点击按钮会打乱数组 `items` 的顺序。Vue 3 的优化使得 `key` 属性在这种场景下能够高效地处理列表项的重新排序，减少不必要的 DOM 操作。

### 总结

虽然 Vue 2 和 Vue 3 中 `key` 属性的基本作用没有改变，但 Vue 3 在虚拟 DOM diff 算法和编译器优化方面的改进，使得 `key` 属性的使用更加高效和灵活。通过这些优化，Vue 3 能够在处理大型和复杂视图时提供更好的性能和用户体验。

## vue 父子组件的加载顺序
在 Vue 中，父子组件的加载顺序是由 Vue 的生命周期钩子和组件渲染机制决定的。了解这些顺序对于调试和优化 Vue 应用非常重要。

### 加载顺序

1. **创建父组件实例**
   - 当 Vue 应用启动时，首先创建根组件的实例。如果根组件有子组件，这些子组件会在后续步骤中被创建。

2. **创建子组件实例**
   - 父组件的模板渲染过程中，Vue 会解析并创建子组件的实例。子组件实例的创建顺序遵循父组件模板中的顺序。

3. **挂载子组件**
   - 子组件实例被创建后，会被挂载到 DOM 中。子组件的 `beforeMount` 和 `mounted` 钩子在这个阶段被调用。

4. **挂载父组件**
   - 父组件在所有子组件都挂载后，自己也会被挂载到 DOM 中。父组件的 `beforeMount` 和 `mounted` 钩子在这个阶段被调用。

### 详细生命周期钩子调用顺序

1. **父组件创建**
   - `beforeCreate`：父组件实例创建前调用。
   - `created`：父组件实例创建后调用。

2. **父组件挂载**
   - `beforeMount`：父组件挂载前调用。
   - 子组件的 `beforeCreate` 和 `created` 被调用。
   - 子组件的 `beforeMount` 和 `mounted` 被调用。
   - 父组件的 `mounted` 被调用。

### 示例

假设我们有以下组件结构：

```html
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  beforeCreate() {
    console.log('Parent beforeCreate');
  },
  created() {
    console.log('Parent created');
  },
  beforeMount() {
    console.log('Parent beforeMount');
  },
  mounted() {
    console.log('Parent mounted');
  }
}
</script>
```

```html
<!-- ChildComponent.vue -->
<template>
  <div>Child</div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('Child beforeCreate');
  },
  created() {
    console.log('Child created');
  },
  beforeMount() {
    console.log('Child beforeMount');
  },
  mounted() {
    console.log('Child mounted');
  }
}
</script>
```

当渲染 `ParentComponent` 时，控制台输出的顺序如下：

1. `Child beforeCreate`
2. `Child created`
3. `Child beforeMount`
4. `Child mounted`
5. `Parent beforeCreate`
6. `Parent created`
7. `Parent beforeMount`
8. `Parent mounted`

### 总结

- **创建阶段**：父组件实例创建前，子组件实例创建。
- **挂载阶段**：子组件挂载前，父组件挂载。

这确保了在父组件的 `mounted` 钩子中，所有子组件都已经挂载完成。了解这些加载顺序可以帮助你在处理复杂的组件嵌套和数据传递时，确保组件生命周期钩子的正确执行。
