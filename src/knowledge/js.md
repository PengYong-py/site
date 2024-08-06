# js相关

## 原始类型有哪几种？null 是对象嘛？
- 原始类型：JavaScript 中有七种原始类型：Undefined, Null, Boolean, Number, BigInt, String, 和 Symbol。
- Null：null 是一个表示“没有对象”的特殊值。虽然 typeof null 返回 "object"，但这只是一个历史遗留问题，null 实际上并不是对象。

## 对象类型和原始类型的不同之处？函数参数是对象会发生什么问题？
### 1. 存储方式
- **原始类型** ：存储的是值本身。

    - 原始类型的数据直接存储在变量中。它们在内存中分配固定大小的空间，因此它们的操作是按值操作。
    - 例如，数字、字符串、布尔值、null 和 undefined 都是原始类型。
- **对象类型**：存储的是引用（即内存地址）。

    - 对象类型的数据在变量中存储的是对内存中实际数据位置的引用。对象本身可以很大，所以它们的操作是按引用操作。
    - 例如，对象、数组、函数等都是对象类型。
### 2.可变性
- **原始类型**：是不可变的（immutable）。
    - 一旦创建，原始类型的值就不能被改变。例如，字符串一旦创建就不能被修改，所有对字符串的操作都会生成一个新的字符串。
- **对象类型**：是可变的（mutable）。
    - 对象的属性和方法可以被修改，添加或删除。
### 3.比较方式
- **原始类型**：比较的是值本身。
    - 如果两个原始类型的值相等，那么它们就是相等的。
- **对象类型**：比较的是引用（即内存地址）。
    - 如果两个对象的引用相同，那么它们就是相等的；否则，即使它们的内容相同，它们也是不相等的。
### 4.函数参数
- 当函数参数是对象时，传递的是对象的引用。这意味着函数内部对参数的修改会影响到外部对象。

## typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？
- **typeof**：在大多数情况下可以正确判断原始类型，但对于对象类型只能判断是否为对象或函数，无法进一步细分。此外，typeof null 返回 "object" 是一个历史遗留的 bug。
- **instanceof**：通过原型链判断一个对象是否是某个构造函数的实例，非常强大和准确，但在跨全局环境时可能会失效。此外，可以通过自定义 Symbol.hasInstance 来改变其行为。

## 如何正确判断 this？箭头函数的 this 是什么？
![An image](./images/this.png)
- 箭头函数的 this 具有不同的行为，它捕获创建箭头函数时上下文的 this 值，而不是调用时的 this 值。箭头函数没有自己的 this，它从包含它的最近的常规（非箭头）函数的 this 值中继承。

## 浅拷贝和深拷贝

- **浅拷贝**
浅拷贝是指创建一个新对象，这个对象有着原始对象属性值的精确副本。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是引用类型，拷贝的就是内存地址，因此如果其中一个对象改变了这个地址，另一个对象也会受到影响。

- **实现浅拷贝的方法**
1. 使用 Object.assign() 方法
```js
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, obj);

console.log(shallowCopy); // { a: 1, b: { c: 2 } }
shallowCopy.b.c = 3;
console.log(obj.b.c); // 3 (原对象也被修改)
```
2. 使用展开运算符（spread operator）
```js
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };

console.log(shallowCopy); // { a: 1, b: { c: 2 } }
shallowCopy.b.c = 3;
console.log(obj.b.c); // 3 (原对象也被修改)
```
3. 使用 Array.prototype.slice() 方法
4. 使用 Array.prototype.concat() 方法

- **深拷贝**
深拷贝是指创建一个新对象，这个对象有着原始对象属性值的完全独立的副本。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是引用类型，会拷贝引用类型到内存中，并递归地拷贝所有属性。这意味着如果其中一个对象改变了这个地址，另一个对象不会受到影响。

- **实现深拷贝的方法**
1. 使用 JSON.parse() 和 JSON.stringify() 方法(这种方法只能处理不包含函数、undefined、Symbol 和循环引用的对象。)
```js
const obj = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj));

console.log(deepCopy); // { a: 1, b: { c: 2 } }
deepCopy.b.c = 3;
console.log(obj.b.c); // 2 (原对象未被修改)
```
2. 使用递归函数
```js
function deepClone(value){
  if(value === null || typeof value !== 'object') {
    return value
  }
  const result = Array.isArray(value) ? [] : {}
  for(let key in value) {
    if(value.hasOwnProperty(key)) {
      result[key] = deepClone(value[key])
    }
  }
  return result;
}
```
3. 使用 Lodash 库的 cloneDeep() 方法
4. 使用 jQuery 的 extend() 方法

## 请解释一下JavaScript中的闭包（closure），以及闭包的实际应用场景。

闭包是指在函数内部定义的函数可以访问其外部函数的变量。换句话说，闭包是由函数和其词法环境的组合而成，这个环境包含了这个函数在定义时所能访问的所有局部变量。

数据隐藏和封装：
函数工厂
闭包可以用于模块化开发，定义模块的私有成员和公开接口。

## 请解释一下JavaScript的事件冒泡（event bubbling）和事件捕获（event capturing）机制，并说明如何使用事件委托（event delegation）优化事件处理。

- 事件冒泡:事件冒泡是指事件从最具体的元素（事件的目标元素）开始，逐级向上传播到最不具体的元素（通常是文档或窗口）。在事件冒泡阶段，事件处理程序按照从内到外的顺序执行。
- 事件捕获:事件捕获是指事件从最不具体的元素（通常是文档或窗口）开始，逐级向下传播到最具体的元素（事件的目标元素）。在事件捕获阶段，事件处理程序按照从外到内的顺序执行。
- 事件委托:事件委托是一种利用事件冒泡机制，将事件处理程序添加到父元素，而不是每个子元素上，从而优化性能和简化代码。当子元素数量众多或频繁变化时，事件委托尤其有用。
- 事件冒泡：事件从最具体的元素向上传播到最不具体的元素。
- 事件捕获：事件从最不具体的元素向下传播到最具体的元素。
- 事件委托：利用事件冒泡，将事件处理程序添加到父元素，从而优化性能和简化代码。

## 请解释一下JavaScript的原型（prototype）和原型链（prototype chain），以及它们在继承中的作用。

- JavaScript的原型（prototype）和原型链（prototype chain）：在JavaScript中，每个对象都有一个隐藏的属性[[Prototype]]（通常可以通过__proto__访问），它指向该对象的原型对象。原型对象本身也有一个[[Prototype]]，指向更高一级的原型对象，如此形成一个链条，称为原型链。

- 原型和原型链的工作原理：当你访问一个对象的属性时，JavaScript会首先在该对象自身上查找该属性。如果找不到，它会沿着原型链向上查找，直到找到该属性或到达原型链的顶端（即Object.prototype）。
原型链中的继承：原型链在继承中起到重要作用，使对象可以共享方法和属性，从而实现代码复用。

## 请解释一下JavaScript的事件循环（Event Loop）机制，以及它是如何处理异步任务的。
- 执行宏任务（Task）：从任务队列（Task Queue）中取出第一个宏任务并执行。宏任务包括初始化代码、setTimeout、setInterval、I/O操作等。
- 查询是否有微任务（Microtask）：在每个宏任务执行完后，事件循环会检查微任务队列（Microtask Queue）是否为空。微任务包括Promise的回调函数、MutationObserver等。
- 执行微任务：如果有微任务，将它们全部执行完。执行过程中产生的新微任务会被添加到微任务队列中，直到队列为空。
- 检查是否需要重新渲染页面：在每次宏任务和所有微任务执行完之后，浏览器会检查是否需要重新渲染页面（UI更新）。
- 重复上述步骤：事件循环重复上述步骤，不断地从宏任务队列中取任务执行。
- 宏任务（Task）：包括setTimeout、setInterval、I/O等。
- 微任务（Microtask）：包括Promise的回调、MutationObserver等。
- 事件循环（Event Loop）：不断执行宏任务和微任务，确保JavaScript能够高效地处理异步任务。
## 什么是提升？什么是暂时性死区？var、let 及 const 区别？
- 提升（Hoisting）：在JavaScript中，变量和函数声明会被提升到其作用域的顶部。这意味着你可以在声明之前使用变量和函数，但它们的值或行为可能未定义。
- 暂时性死区（Temporal Dead Zone）：在ES6中，let和const声明的变量具有暂时性死区。这意味着在变量声明之前，无法访问该变量，否则会抛出ReferenceError。
- var、let 及 const 区别：
  - var：函数作用域，存在提升，可以重复声明，没有块级作用域。
  - let：块级作用域，不存在提升，不能重复声明，有暂时性死区。
  - const：块级作用域，不存在提升，不能重复声明，有暂时性死区，但必须初始化。

## 为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？
### 为什么要使用模块化？
1. 代码组织：模块化使代码结构更加清晰，每个模块负责特定的功能或逻辑，易于理解和管理。
2. 代码重用：模块可以在不同的项目或应用中复用，避免重复编写相同的代码。
3. 团队协作：不同的开发人员可以并行开发不同的模块，减少冲突和依赖。
4. 维护和扩展：修改一个模块的实现不会影响其他模块，有助于系统的维护和扩展。
5. 隔离：模块化可以降低不同代码块之间的耦合度，使得代码更易于测试和调试。
### 不同的模块化方式各有优缺点和适用场景：
- CommonJS：适用于服务器端（Node.js），同步加载模块。
- AMD：适用于浏览器端，支持异步加载。
- CMD：与 AMD 类似，支持延迟加载，主要用于浏览器端。
- ESM：现代 JavaScript 标准，支持静态分析和异步加载，逐渐成为主流。
- UMD：兼容多种环境，适用于需要广泛兼容性的库。

## Promise 的特点是什么，分别有什么优缺点？什么是 Promise 链？Promise 构造函数执行和 then 函数执行有什么区别？
### Promise 的特点
- **状态管理**：
    - 一个 Promise 对象代表一个异步操作的最终完成（或失败）及其结果值。
    - 一个 Promise 只能处于以下三种状态之一：
       - Pending（进行中）：初始状态，操作尚未完成。
       - Fulfilled（已成功）：操作成功完成。
       - Rejected（已失败）：操作失败。
- **不可变性**：

一旦 Promise 状态从 Pending 变为 Fulfilled 或 Rejected，就不能再改变。
- **链式调用**：

Promise 支持链式调用，通过 .then() 方法可以将多个异步操作串联起来。
- **错误处理**：

错误会在链中传递，直到找到第一个 .catch() 进行处理。

### **Promise 的优缺点**

- **优点**
   - **避免回调地狱**：通过链式调用，可以使代码更具可读性和可维护性。
   - **标准化**：Promise 是 ES6 标准的一部分，具有广泛的浏览器支持和一致的 API。
   - **错误处理**：提供了统一的错误处理机制，可以在链的任意位置捕获错误。
   - **并行操作**：可以使用 Promise.all()、Promise.race() 等方法方便地处理并行的异步操作。
- **缺点**
   - **学习曲线**：对于初学者来说，理解 Promise 及其用法可能比较困难。
   - **调试困难**：虽然比回调函数容易调试，但在链中发生的错误有时仍然难以定位。
   - **嵌套结构**：在某些复杂场景下，尽管使用了 Promise，代码仍然可能变得嵌套且难以管理。

### Promise 链
Promise 链是通过连续的 .then() 方法调用将多个异步操作串联起来的结构。每个 .then() 方法返回一个新的 Promise，使得下一个 .then() 方法可以在前一个 Promise 完成后执行。

### Promise 构造函数执行和 then 函数执行有什么区别
构造函数中的代码同步执行，.then() 中的回调函数异步执行。
## async 及 await 的特点，它们的优点和缺点分别是什么？await 原理是什么？

- **async 和 await 的特点**：提高异步代码的可读性和可维护性，使得异步代码看起来像同步代码。
- **优点**：代码可读性强、调试容易、错误处理简化、控制流自然。
- **缺点**：兼容性问题、需要注意执行顺序、错误处理的复杂性。
- **await 的原理**：等待一个 Promise 解决或拒绝，暂停 async 函数的执行，返回结果或抛出错误，不阻塞事件循环。
## setTimeout、setInterval、requestAnimationFrame 各有什么特点？
| 特点                 | `setTimeout`                        | `setInterval`                       | `requestAnimationFrame`                |
|---------------------|------------------------------------|------------------------------------|---------------------------------------|
| **用途**            | 单次延时执行                         | 周期性重复执行                        | 优化动画帧执行                          |
| **时间间隔**        | 不准确，可能会有延迟                    | 不准确，可能会有延迟                     | 准确，与屏幕刷新率一致                    |
| **返回值**          | 定时器 ID，用于取消定时                | 定时器 ID，用于取消定时                 | 请求 ID，用于取消回调                     |
| **取消方式**        | `clearTimeout`                     | `clearInterval`                    | `cancelAnimationFrame`                 |
| **资源管理**        | 无特殊优化                           | 无特殊优化                            | 当页面不可见时，浏览器自动暂停，节省资源     |

### 使用场景

- **`setTimeout`**：适用于需要延时执行一次性代码的场景，如延迟执行某个操作。
- **`setInterval`**：适用于需要周期性重复执行代码的场景，如轮询操作或周期性任务。
- **`requestAnimationFrame`**：适用于需要实现流畅动画的场景，如绘图和动画效果。

## 手写 Promise

```js
const PENGDING = 'pending'
const REJECTED = 'rejected'
const RESOLVED = 'resolved'
function myPromise (fn){
    const taht = this
    taht.state = PENGDING
    taht.value = null
    taht.reslovedCallbacks = []
    taht.rejectedCallbacks = []
    function resolve(value){
        if(value instanceof myPromise){
            return value.then(resolve,reject)
        }
        setTimeout(()=>{
            if(taht.state === PENGDING){
                taht.state = RESOLVED
                taht.value = value
                taht.reslovedCallbacks.map(cb=>cb(taht.value))
            }
        },0)
      
    }
    function reject(value){
        setTimeout(()=>{
            if(taht.state === PENGDING){
                taht.state = REJECTED
                taht.value = value
                taht.rejectedCallbacks.map(cb=>cb(taht.value))
            }
        },0)
       
    }
    try {
        fn(resolve, reject)
      } catch (e) {
        reject(e)
      }
}
myPromise.prototype.then = function (onFulfilled,onRejected){
    //先判断传入的方法
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v
    onRejected = typeof onRejected === 'function' ? onRejected : r=>{
        throw r
    }
    if(that.state === PENGDING){
        
        that.reslovedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    if(that.state === RESOLVED){
        onFulfilled(that.value)
    }
    if(that.state === REJECTED){
        onRejected(that.value)
    }
    } 
```

## call、apply 及 bind 函数内部实现是怎么样的？

### call
```js
Function.prototype.myCall = function(context, ...args) {
  // 如果 context 为空，则默认设置为全局对象（在浏览器中为 window，在 Node.js 中为 global）
  context = context || globalThis;

  // 使用 Symbol 避免属性冲突
  const fnSymbol = Symbol();
  // 将函数赋值给 context 的一个属性
  context[fnSymbol] = this;

  // 执行该函数
  const result = context[fnSymbol](...args);

  // 删除该属性
  delete context[fnSymbol];

  // 返回结果
  return result;
};

// 示例
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };

console.log(greet.myCall(person, 'Hello', '!')); // "Hello, Alice!"

```

### apply
```js
Function.prototype.myApply = function(context, args) {
  // 如果 context 为空，则默认设置为全局对象（在浏览器中为 window，在 Node.js 中为 global）
  context = context || globalThis;

  // 使用 Symbol 避免属性冲突
  const fnSymbol = Symbol();
  // 将函数赋值给 context 的一个属性
  context[fnSymbol] = this;

  // 执行该函数
  const result = context[fnSymbol](...args);

  // 删除该属性
  delete context[fnSymbol];

  // 返回结果
  return result;
};

// 示例
console.log(greet.myApply(person, ['Hi', '?'])); // "Hi, Alice?"

```

### bind
```js
Function.prototype.myBind = function(context, ...args) {
  // 保留 this（即原始函数）
  const self = this;

  // 返回一个新的函数
  return function(...newArgs) {
    // 使用 call 方法调用原始函数，并传递合并后的参数
    return self.myCall(context, ...args, ...newArgs);
  };
};

// 示例
const greetAlice = greet.myBind(person, 'Hey');
console.log(greetAlice('!!!')); // "Hey, Alice!!!"
```

## new 的原理是什么？通过 new 的方式创建对象和通过字面量创建有什么区别？
### new 的原理是什么？
1. **创建一个空对象**：创建一个空对象，并将其 __proto__ 属性设置为构造函数的 prototype 属性。
2. **绑定 this**：调用构造函数，并将 this 绑定到新创建的对象上。
3. **返回新对象**：如果构造函数返回一个对象类型的值，则返回该值；否则，返回新创建的对象。
```js
function myNew(constructor, ...args) {
  // 创建一个空对象，并将其原型设置为构造函数的原型
  const obj = Object.create(constructor.prototype);
  // 调用构造函数，并将 this 绑定到新创建的对象上
  const result = constructor.apply(obj, args);
  // 如果构造函数返回一个对象，则返回该对象；否则，返回新创建的对象
  return (result && typeof result === 'object') ? result : obj;
}

// 示例
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = myNew(Person, 'Alice', 30);
console.log(person); // Person { name: 'Alice', age: 30 }
console.log(person instanceof Person); // true

```

### 通过 new 的方式创建对象和通过字面量创建有什么区别？

| 特点                    | 通过 `new` 创建对象                          | 通过字面量创建对象                    |
|-------------------------|--------------------------------------------|--------------------------------------|
| **原型链**              | 对象的 `__proto__` 指向构造函数的 `prototype` | 对象的 `__proto__` 指向 `Object.prototype` |
| **构造函数**            | 调用构造函数初始化对象                        | 没有构造函数，直接定义属性和方法          |
| **`instanceof` 检查**   | 可用于验证对象是否是某个构造函数的实例          | 只能检查是否是 `Object` 的实例          |
| **原型方法和属性**      | 可以访问构造函数原型上的方法和属性              | 只能访问 `Object.prototype` 上的方法和属性 |
| **示例**                | `const obj = new Constructor();`           | `const obj = { key: value };`       |

## instanceof 的原理是什么？
instanceof 操作符用于检测构造函数的 prototype 属性是否出现在某个对象的原型链上。其原理可以通过以下几个步骤理解：
- **获取对象的原型**：获取要检测的对象的原型链。
- **沿原型链查找**：沿着对象的原型链查找，判断构造函数的 prototype 属性是否存在于该原型链上。
```js
function myInstanceof(left, right) {
  // 获取 right 的 prototype
  const prototype = right.prototype;
  // 获取 left 的 __proto__
  let proto = Object.getPrototypeOf(left);

  // 遍历原型链
  while (proto !== null) {
    // 如果找到相同的 prototype，则返回 true
    if (proto === prototype) {
      return true;
    }
    // 沿着原型链向上查找
    proto = Object.getPrototypeOf(proto);
  }

  // 如果未找到，则返回 false
  return false;
}

// 示例
function Person(name) {
  this.name = name;
}

const person = new Person('Alice');

console.log(myInstanceof(person, Person)); // true
console.log(myInstanceof(person, Object)); // true
console.log(myInstanceof(person, Array));  // false
```

## V8 下的垃圾回收机制是怎么样的？
V8 引擎是 Google 开发的开源 JavaScript 引擎，用于执行 JavaScript 代码，包括在 Chrome 浏览器和 Node.js 中。V8 采用了多种垃圾回收机制来管理内存，以确保 JavaScript 程序高效运行。下面是 V8 垃圾回收机制的主要概念和工作原理：

### 1. 内存空间划分

V8 将堆内存划分为不同的空间，以优化不同类型对象的管理和回收：

- **新生代（Young Generation）**：存储短生命周期对象。分为两个空间：
  - **From 空间**：当前正在使用的空间。
  - **To 空间**：用于垃圾回收时的临时空间。

- **老生代（Old Generation）**：存储长生命周期对象，分为两个主要部分：
  - **老生代空间**：主要存储大对象和长生命周期对象。
  - **大对象空间（Large Object Space）**：存储特别大的对象。

### 2. 垃圾回收算法

V8 使用不同的垃圾回收算法来管理新生代和老生代的内存。

#### 新生代垃圾回收（Scavenge）

新生代使用的是 Scavenge 算法，具体为 Cheney 算法（标记-复制算法）：

1. **标记**：遍历 From 空间的活动对象并标记。
2. **复制**：将活动对象复制到 To 空间，未被标记的对象被认为是垃圾并回收。
3. **交换**：From 和 To 空间交换角色，To 空间变为新的 From 空间。

这种算法非常高效，因为新生代对象大多数是短生命周期对象，因此垃圾回收非常频繁且速度很快。

#### 老生代垃圾回收（Mark-Sweep and Mark-Compact）

老生代对象使用的是 Mark-Sweep 和 Mark-Compact 算法：

1. **Mark-Sweep（标记-清除）**：
   - **标记阶段**：从根对象开始，标记所有可达对象。
   - **清除阶段**：回收所有未被标记的对象。

2. **Mark-Compact（标记-整理）**：
   - **标记阶段**：与 Mark-Sweep 相同，标记所有可达对象。
   - **整理阶段**：将存活对象向堆的一端移动，以压缩内存空间，减少内存碎片。

#### 增量标记（Incremental Marking）

为了减少垃圾回收的暂停时间（Stop-the-world），V8 使用增量标记策略，将标记工作分成多个小步，在程序执行过程中逐步完成，减少长时间的暂停。

### 3. 并行和并发垃圾回收

V8 还利用并行和并发技术来优化垃圾回收过程：

- **并行垃圾回收**：垃圾回收线程在多个 CPU 核心上同时工作，加速垃圾回收过程。
- **并发垃圾回收**：垃圾回收工作与程序执行同时进行，进一步减少暂停时间。

### 总结

V8 引擎的垃圾回收机制通过多种策略来高效管理内存：

1. **内存空间划分**：
   - 新生代：存储短生命周期对象，使用 Scavenge 算法。
   - 老生代：存储长生命周期对象，使用 Mark-Sweep 和 Mark-Compact 算法。

2. **增量标记**：
   - 将标记工作分成多个小步，减少垃圾回收的暂停时间。

3. **并行和并发垃圾回收**：
   - 通过多线程技术加速垃圾回收，并减少程序暂停时间。

这些机制共同作用，确保了 V8 引擎在处理 JavaScript 代码时的高效内存管理和性能优化。

## 有几种方式可以实现存储功能，分别有什么优缺点？什么是 Service Worker？
### 存储功能的几种方式及其优缺点

| 存储方式         | 优点                                                                 | 缺点                                                           |
|------------------|---------------------------------------------------------------------|----------------------------------------------------------------|
| Cookies          | - 兼容性好，所有浏览器都支持                                       | - 存储容量小（通常只有 4KB）                                   |
|                  | - 可以设置过期时间和路径，适用于跨页面的数据存储                   | - 安全性较差，容易被劫持和篡改                                 |
|                  | - 可以与服务器通信，在每个请求中自动携带                           | - 在每个 HTTP 请求中都会携带，增加了请求的体积                 |
| LocalStorage     | - 存储容量大（通常 5MB 或更多）                                    | - 仅在同一域名下可访问，无法跨域共享                           |
|                  | - 存储的数据持久化，除非手动删除，否则不会过期                     | - 只能存储字符串类型，需要手动转换其他数据类型                 |
|                  | - 适用于存储不需要与服务器频繁交互的数据                           | - 同源策略限制，不能在不同的子域之间共享                       |
| SessionStorage   | - 存储容量较大（通常 5MB 或更多）                                  | - 仅在同一标签页或窗口中可访问，不能跨页面共享                 |
|                  | - 数据仅在当前会话中有效，关闭浏览器或标签页后自动删除             | - 只能存储字符串类型，需要手动转换其他数据类型                 |
| IndexedDB        | - 存储容量大（通常数百 MB 到几 GB）                                | - API 复杂，使用起来相对繁琐                                   |
|                  | - 支持事务、索引、查询等复杂操作，适用于复杂数据的存储和查询       | - 需要处理异步操作，增加了代码复杂性                           |
|                  | - 可以存储多种类型的数据，包括对象、文件等                         | - 兼容性问题，一些旧版本的浏览器可能不支持                     |
| WebSQL（已废弃） | - 类似于 SQL 的查询语言，易于使用                                  | - 已被废弃，不推荐使用                                         |
|                  | - 支持事务、查询等操作                                             | - 兼容性差，现代浏览器已不再支持                               |
| File System Access API | - 允许 Web 应用直接读写用户本地文件系统                    | - 兼容性问题，目前只有部分浏览器支持                           |
|                  | - 适用于需要处理大量文件数据的应用，如图像处理、视频编辑等         | - 安全性和隐私问题，需要用户明确授权                           |

### Service Worker
Service Worker 是一种运行在浏览器后台的脚本，允许实现离线缓存、消息推送、后台同步等功能。
**优点**：
- 提供离线功能，增强用户体验。
- 支持后台推送和同步，提高应用的互动性和可靠性。
- 减少服务器负载，通过缓存静态资源降低带宽消耗。

**缺点**：
- 需要 HTTPS 支持，因为 Service Worker 涉及网络请求的拦截和缓存，必须在安全环境下使用。
- 需要处理缓存的版本更新和管理，增加了开发复杂度。


## 强缓存和协商缓存

### 强缓存（Strong Cache）

**定义**：
强缓存是指浏览器在发送请求前，先根据缓存规则判断本地缓存是否过期，如果未过期，则直接使用本地缓存，而不向服务器发送请求。

**实现方式**：
通过 `Expires` 和 `Cache-Control` 两个 HTTP 头实现。

1. **Expires**：
   - 用于指定资源的过期时间，是一个绝对时间点（GMT 格式）。
   - 例如：`Expires: Wed, 21 Oct 2023 07:28:00 GMT`
   - 缺点：由于使用的是绝对时间，容易受到客户端和服务器时间不一致的影响。

2. **Cache-Control**：
   - 用于指定相对时间，通过 `max-age` 指定资源的有效期（单位为秒）。
   - 例如：`Cache-Control: max-age=3600`
   - 比 `Expires` 更加精确和灵活，还可以指定其他缓存策略，如 `no-cache`、`no-store` 等。

**优点**：
- 提高性能，减少不必要的网络请求，降低服务器压力。
- 提高用户体验，减少资源加载时间。

**缺点**：
- 资源更新不及时时，可能会导致用户看到旧的内容。

### 协商缓存（Negotiation Cache）

**定义**：
协商缓存是指浏览器在发送请求前，会向服务器验证本地缓存的有效性。如果服务器确认缓存有效，则返回 304 状态码，浏览器继续使用本地缓存；如果缓存失效，服务器会返回最新的资源。

**实现方式**：
通过 `Last-Modified` 和 `ETag` 两个 HTTP 头实现。

1. **Last-Modified**：
   - 记录资源的最后修改时间。
   - 浏览器在请求时，会发送一个 `If-Modified-Since` 头，服务器根据资源的最后修改时间来判断是否更新。
   - 例如：`Last-Modified: Wed, 21 Oct 2023 07:28:00 GMT`

2. **ETag**：
   - 资源的唯一标识符（通常是资源的内容哈希值）。
   - 浏览器在请求时，会发送一个 `If-None-Match` 头，服务器根据 ETag 来判断资源是否更新。
   - 例如：`ETag: "5d8c72a2d98e0"`

**优点**：
- 能够确保用户看到最新的内容，保证资源的时效性。
- 在资源没有变化时，减少了数据传输量（仅返回 304 状态码和头信息）。

**缺点**：
- 增加了服务器的请求次数，相比强缓存略微降低了性能。

### 强缓存与协商缓存的比较

| 对比项      | 强缓存                        | 协商缓存                               |
|-------------|-------------------------------|----------------------------------------|
| 实现方式    | `Expires` 和 `Cache-Control`  | `Last-Modified` 和 `ETag`              |
| 请求次数    | 不发送请求                    | 发送请求进行验证                       |
| 性能        | 更高（不需要请求服务器）       | 略低（需要请求服务器进行验证）         |
| 资源更新    | 依赖于设置的过期时间          | 确保资源最新，通过服务器验证            |
| 使用场景    | 资源更新频率低、对时效性要求低 | 资源更新频率高、对时效性要求高          |

### 综合应用

在实际应用中，通常会结合使用强缓存和协商缓存，以便在保证资源更新及时的前提下，提高资源加载性能。例如，先设置较长的 `Cache-Control` 时间，再结合 `ETag` 或 `Last-Modified` 进行验证。

## 网址到页面渲染
从输入网址到页面渲染，浏览器会经历一系列复杂的过程，主要包括以下步骤：

1. **DNS 解析**
2. **TCP 连接**
3. **发送 HTTP 请求**
4. **服务器处理请求**
5. **服务器响应**
6. **浏览器接收响应**
7. **解析 HTML**
8. **解析 CSS**
9. **解析 JavaScript**
10. **构建 DOM 树和 CSSOM 树**
11. **生成渲染树**
12. **布局（Layout）**
13. **绘制（Painting）**
14. **合成与显示（Compositing）**

### 1. DNS 解析

浏览器首先需要将输入的 URL 解析成服务器的 IP 地址。这个过程包括以下几步：
- 浏览器缓存查询
- 操作系统缓存查询
- 路由器缓存查询
- ISP（互联网服务提供商）DNS 服务器查询
- 根 DNS 服务器、顶级域名服务器和权威 DNS 服务器逐级查询

### 2. TCP 连接

DNS 解析完成后，浏览器会与服务器建立 TCP 连接。这个过程包括三次握手：
- 客户端发送 SYN 包
- 服务器返回 SYN-ACK 包
- 客户端发送 ACK 包，连接建立

### 3. 发送 HTTP 请求

TCP 连接建立后，浏览器会发送 HTTP 请求到服务器。请求中包括请求行、请求头和请求体，包含了请求方法、URL、浏览器和客户端信息等。

### 4. 服务器处理请求

服务器接收到请求后，会处理请求并生成响应内容。这可能涉及到：
- 查询数据库
- 调用后端服务
- 读取文件等

### 5. 服务器响应

服务器处理完成后，会将响应数据通过 HTTP 响应发送回客户端。响应包括响应行、响应头和响应体，包含状态码、响应数据等。

### 6. 浏览器接收响应

浏览器接收到响应数据后，会检查响应状态码。如果状态码是 200，表示请求成功，浏览器开始处理响应数据。

### 7. 解析 HTML

浏览器开始解析 HTML 文档，构建 DOM 树。在解析过程中，如果遇到外部资源（如 CSS、JavaScript、图片等），会发起新的请求下载这些资源。

### 8. 解析 CSS

浏览器解析所有的 CSS 文件，构建 CSSOM 树。CSSOM 树包含了所有样式规则和节点。

### 9. 解析 JavaScript

浏览器解析并执行 JavaScript 代码。在执行过程中，JavaScript 可能会修改 DOM 树和 CSSOM 树。

### 10. 构建 DOM 树和 CSSOM 树

浏览器将解析后的 HTML 生成 DOM 树，将解析后的 CSS 生成 CSSOM 树。这两个树结构是页面的基础。

### 11. 生成渲染树

浏览器结合 DOM 树和 CSSOM 树，生成渲染树。渲染树包含了所有需要显示的元素及其样式信息。

### 12. 布局（Layout）

浏览器根据渲染树进行布局，计算每个元素的几何信息（位置和大小）。这个过程从根节点开始，递归地计算所有渲染对象的位置和大小。

### 13. 绘制（Painting）

布局完成后，浏览器将渲染树中的每个节点绘制到屏幕上。这个过程包括绘制背景颜色和图像、绘制边框、绘制文本、绘制阴影等效果。

### 14. 合成与显示（Compositing）

在绘制阶段，浏览器会将不同的层合成到一起，生成最终的页面图像。浏览器使用合成器线程将各个层合成，并处理滚动、变换等效果，最终显示到屏幕上。

### 流程图示

```plaintext
1. 输入 URL
2. DNS 解析 -> 获取 IP 地址
3. TCP 连接 -> 三次握手
4. 发送 HTTP 请求
5. 服务器处理请求
6. 服务器响应
7. 浏览器接收响应
8. 解析 HTML -> 构建 DOM 树
9. 解析 CSS -> 构建 CSSOM 树
10. 解析 JavaScript -> 执行脚本
11. 生成渲染树
12. 布局 -> 计算几何信息
13. 绘制 -> 绘制各层
14. 合成与显示 -> 显示到屏幕
```

### 关键点总结

- **DNS 解析**：将域名解析为 IP 地址。
- **TCP 连接**：通过三次握手建立连接。
- **HTTP 请求和响应**：客户端发送请求，服务器返回响应。
- **解析与构建**：解析 HTML、CSS、JavaScript，构建 DOM 树和 CSSOM 树。
- **渲染与布局**：生成渲染树，计算布局，绘制和合成各层，最终显示到屏幕。

## 如何最快渲染页面
在不考虑缓存和优化网络协议的前提下，要最快地渲染页面，我们需要优化关键渲染路径（Critical Rendering Path）。关键渲染路径是从浏览器接收到 HTML 文档到页面呈现在屏幕上的过程。优化关键渲染路径的主要目标是减少首次内容绘制（First Contentful Paint, FCP）和首次有意义绘制（First Meaningful Paint, FMP）的时间。以下是一些具体的优化措施：

### 1. 最小化关键资源数量和大小

- **减少关键资源数量**：
  - **内联关键 CSS**：将关键 CSS 直接内联在 HTML 中，避免额外的 HTTP 请求。
  - **内联关键 JavaScript**：将关键的 JavaScript 代码内联在 HTML 中，避免额外的 HTTP 请求。
  - **精简 HTML**：去除不必要的 HTML 标签和注释。

- **减少关键资源大小**：
  - **压缩 CSS 和 JavaScript**：使用工具如 UglifyJS、Terser 压缩 JavaScript，使用 CSSNano 压缩 CSS。
  - **移除未使用的 CSS**：使用工具如 PurifyCSS 或 UnCSS 移除未使用的 CSS 规则。
  - **减少初始内容量**：仅加载页面初始显示所需的最小内容。

### 2. 优化 CSS 加载

- **避免阻塞渲染的 CSS**：
  - **异步加载非关键 CSS**：使用 `media` 属性（如 `media="print"`) 使非关键 CSS 异步加载，或者使用 JavaScript 动态加载非关键 CSS。
  - **分离关键 CSS 和非关键 CSS**：将关键 CSS 内联在 HTML 中，非关键 CSS 延迟加载。

### 3. 优化 JavaScript 加载

- **异步加载和延迟执行 JavaScript**：
  - **使用 `async` 和 `defer`**：对非关键 JavaScript 文件使用 `async` 或 `defer` 属性，使其异步加载，减少阻塞。
  - **将 JavaScript 放在页面底部**：将 JavaScript 脚本标签放在页面底部，确保在加载和解析 HTML 之前不阻塞渲染。

### 4. 优化字体加载

- **减少字体加载的影响**：
  - **使用字体显示策略**：使用 `font-display` CSS 属性优化字体加载行为，如 `font-display: swap`。
  - **提前加载字体**：使用 `<link rel="preload" href="your-font-url" as="font" type="font/woff2" crossorigin="anonymous">` 提前加载关键字体。

### 5. 优化图片加载

- **延迟加载图片**：
  - **使用懒加载**：通过懒加载技术，延迟加载页面非关键图片，使用 IntersectionObserver API 实现懒加载。
  - **使用合适的图片格式**：使用现代图片格式（如 WebP）减少图片文件大小。

### 6. 优化渲染顺序

- **避免长时间运行的 JavaScript**：
  - **分解长任务**：使用 `requestAnimationFrame` 或 `requestIdleCallback` 分解长时间运行的 JavaScript 任务，避免阻塞主线程。
  - **减少 DOM 操作**：尽量减少 DOM 操作的次数和复杂度。

### 7. 减少重排和重绘

- **优化样式和布局计算**：
  - **避免频繁修改 DOM**：批量更新 DOM，减少重排和重绘。
  - **使用 CSS 动画**：相比 JavaScript 动画，CSS 动画性能更好，因为它们可以在合成器线程中执行，不会触发重排和重绘。

### 示例：优化后的 HTML 页面结构

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Optimized Page</title>
  <!-- Inline critical CSS -->
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .header {
      background-color: #f8f9fa;
      padding: 10px;
    }
  </style>
  <!-- Preload key resources -->
  <link rel="preload" href="styles.css" as="style">
  <link rel="preload" href="script.js" as="script">
</head>
<body>
  <div class="header">
    <h1>Optimized Page</h1>
  </div>
  <div class="content">
    <p>This is an optimized web page.</p>
  </div>
  <!-- Load non-critical CSS asynchronously -->
  <link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
  <!-- Load JavaScript asynchronously -->
  <script src="script.js" async></script>
</body>
</html>
```

### 关键渲染路径优化总结

- **减少关键资源数量和大小**：内联关键 CSS 和 JavaScript，压缩资源。
- **优化资源加载顺序**：异步加载非关键 CSS 和 JavaScript，提前加载字体。
- **优化图片加载**：使用懒加载和现代图片格式。
- **减少重排和重绘**：避免频繁修改 DOM，使用 CSS 动画。
- **优化渲染顺序**：分解长时间运行的任务，减少阻塞。

通过这些优化措施，可以显著减少首次内容绘制和首次有意义绘制的时间，加快页面的渲染速度，提升用户体验。



## 前端安全

### XSS (Cross-Site Scripting)

#### 描述
- **类型**：注入攻击
- **目标**：通过向网页注入恶意脚本，使之在用户的浏览器中执行。
- **方式**：攻击者在输入字段、URL、或其他数据源注入恶意脚本代码。

#### 种类
- **反射型 XSS**：恶意脚本作为即时响应的一部分被注入并执行。
- **存储型 XSS**：恶意脚本被持久存储在服务器上（如数据库），当受害者访问相关页面时执行。
- **DOM 型 XSS**：恶意脚本直接操控浏览器 DOM，且不通过服务器。

#### 危害
- 窃取用户信息，如 cookies、会话令牌。
- 劫持用户会话。
- 在用户的浏览器中执行任意操作。

#### 防御措施
- **输入验证**：对所有用户输入进行验证和净化。
- **输出编码**：对所有输出数据进行编码，防止其被解释为脚本。
- **内容安全策略 (CSP)**：限制允许加载和执行的内容类型和来源。
- **HTTP-only Cookies**：防止客户端脚本访问 cookies。

### CSRF (Cross-Site Request Forgery)

#### 描述
- **类型**：伪造请求
- **目标**：利用受害者已认证的会话，在不知情的情况下向受信任的网站发送伪造请求。
- **方式**：攻击者诱使用户点击恶意链接、提交表单或加载图像，向受信任的站点发送请求。

#### 危害
- 执行用户的敏感操作，如转账、修改账户信息。
- 伪造用户操作。

#### 防御措施
- **CSRF 令牌**：在每个请求中包含唯一的、不可预测的令牌，验证其有效性。
- **双重提交 Cookie**：在请求和 Cookie 中都包含令牌，并进行验证。
- **SameSite Cookie**：通过设置 Cookie 的 SameSite 属性，限制跨站请求。
- **验证 Referer 头**：检查请求的来源头。

### 点击劫持 (Clickjacking)

#### 描述
- **类型**：UI 欺骗攻击
- **目标**：通过隐藏的 iframe 覆盖在合法页面之上，诱使用户点击伪装的内容。
- **方式**：使用透明或不可见的 iframe，覆盖在受害者页面的按钮或链接上。

#### 危害
- 执行用户未预期的操作。
- 劫持用户的点击，导致信息泄露或其他恶意操作。

#### 防御措施
- **X-Frame-Options 头**：设置页面不能被嵌入到 iframe 中，如 `DENY` 或 `SAMEORIGIN`。
- **Content Security Policy (CSP)**：使用 `frame-ancestors` 指令，指定允许嵌入的源。
- **防止点击劫持的框架破坏脚本**：在页面加载时检测自身是否在顶层窗口中。

### 对比

| 特性 | XSS | CSRF | 点击劫持 |
| ---- | ---- | ---- | ---- |
| **类型** | 注入攻击 | 伪造请求 | UI 欺骗攻击 |
| **目标** | 在用户浏览器中执行恶意脚本 | 利用用户身份发送伪造请求 | 诱使用户执行未预期操作 |
| **方式** | 注入和执行脚本 | 诱使用户发送请求 | 使用隐藏的 iframe 覆盖页面 |
| **主要危害** | 窃取信息、劫持会话、执行任意操作 | 执行敏感操作、伪造操作 | 执行未预期操作、信息泄露 |
| **防御措施** | 输入验证、输出编码、CSP、HTTP-only Cookies | CSRF 令牌、双重提交 Cookie、SameSite Cookie、Referer 验证 | X-Frame-Options、CSP (frame-ancestors)、框架破坏脚本 |

通过正确理解和实现这些防御措施，可以有效地保护应用程序免受 XSS、CSRF 和点击劫持的攻击。

## 节流和防抖
**节流**（Throttling）和**防抖**（Debouncing）是两种常用的前端性能优化技术，用于控制函数的调用频率和避免过度触发事件。它们各有不同的用途和实现方式。

### 节流（Throttling）

#### 描述
节流是将函数调用限制在一定时间间隔内。无论事件触发的频率多高，函数在每个时间间隔内只会执行一次。

#### 适用场景
- **滚动事件**：如处理滚动加载。
- **窗口大小调整**：如调整窗口大小时需要重新计算布局。

#### 特点
- **限制频率**：在指定时间间隔内，只允许函数执行一次。
- **适合高频率事件**：可以确保函数不会被频繁调用，减轻性能压力。

#### 实现示例（JavaScript）

```javascript
function throttle(func, wait) {
  let lastTime = 0;

  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

// 使用
window.addEventListener('scroll', throttle(() => {
  console.log('Scroll event triggered');
}, 200));
```

### 防抖（Debouncing）

#### 描述
防抖是将函数的执行推迟到事件停止触发的一段时间之后。如果在这个时间段内事件再次触发，计时器将重新开始。简而言之，防抖会在事件触发后等待一段时间，如果在这段时间内没有再次触发事件，则执行函数。

#### 适用场景
- **搜索框输入**：如用户输入时实时搜索。
- **窗口大小调整**：如调整窗口大小后进行处理，但避免多次调用。

#### 特点
- **推迟执行**：在事件触发后等待一段时间，如果事件再次触发，计时器会重新开始。
- **适合低频率事件**：可以避免函数在短时间内被多次调用。

#### 实现示例（JavaScript）

```javascript
function debounce(func, wait) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// 使用
const input = document.getElementById('input');
input.addEventListener('input', debounce(() => {
  console.log('Input event triggered');
}, 300));
```

### 对比

| 特性       | 节流 (Throttling)                       | 防抖 (Debouncing)                        |
|------------|----------------------------------------|------------------------------------------|
| **定义**   | 限制函数调用的频率                     | 延迟函数调用，直到事件停止触发一段时间 |
| **实现方式** | 在指定时间间隔内只执行一次             | 在事件停止触发后等待一段时间才执行     |
| **适用场景** | 高频事件，如滚动、窗口调整               | 低频事件，如输入框、搜索                |
| **频率控制** | 固定时间间隔内执行一次                   | 最终只执行一次，避免多次调用            |
| **函数执行** | 定期执行函数，避免频繁调用              | 只在事件结束后执行，避免过度调用        |

通过合理使用节流和防抖，可以优化前端性能，减少不必要的函数调用，提升用户体验。