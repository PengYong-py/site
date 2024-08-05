import{_ as i,c as s,o as a,a2 as l}from"./chunks/framework.CzlNzQcO.js";const t="/site/assets/this.CM5Exrc8.png",u=JSON.parse('{"title":"js相关","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/js.md","filePath":"knowledge/js.md"}'),n={name:"knowledge/js.md"},e=l('<h1 id="js相关" tabindex="-1">js相关 <a class="header-anchor" href="#js相关" aria-label="Permalink to &quot;js相关&quot;">​</a></h1><h2 id="原始类型有哪几种-null-是对象嘛" tabindex="-1">原始类型有哪几种？null 是对象嘛？ <a class="header-anchor" href="#原始类型有哪几种-null-是对象嘛" aria-label="Permalink to &quot;原始类型有哪几种？null 是对象嘛？&quot;">​</a></h2><ul><li>原始类型：JavaScript 中有七种原始类型：Undefined, Null, Boolean, Number, BigInt, String, 和 Symbol。</li><li>Null：null 是一个表示“没有对象”的特殊值。虽然 typeof null 返回 &quot;object&quot;，但这只是一个历史遗留问题，null 实际上并不是对象。</li></ul><h2 id="对象类型和原始类型的不同之处-函数参数是对象会发生什么问题" tabindex="-1">对象类型和原始类型的不同之处？函数参数是对象会发生什么问题？ <a class="header-anchor" href="#对象类型和原始类型的不同之处-函数参数是对象会发生什么问题" aria-label="Permalink to &quot;对象类型和原始类型的不同之处？函数参数是对象会发生什么问题？&quot;">​</a></h2><h3 id="_1-存储方式" tabindex="-1">1. 存储方式 <a class="header-anchor" href="#_1-存储方式" aria-label="Permalink to &quot;1. 存储方式&quot;">​</a></h3><ul><li><p><strong>原始类型</strong> ：存储的是值本身。</p><ul><li>原始类型的数据直接存储在变量中。它们在内存中分配固定大小的空间，因此它们的操作是按值操作。</li><li>例如，数字、字符串、布尔值、null 和 undefined 都是原始类型。</li></ul></li><li><p><strong>对象类型</strong>：存储的是引用（即内存地址）。</p><ul><li>对象类型的数据在变量中存储的是对内存中实际数据位置的引用。对象本身可以很大，所以它们的操作是按引用操作。</li><li>例如，对象、数组、函数等都是对象类型。</li></ul></li></ul><h3 id="_2-可变性" tabindex="-1">2.可变性 <a class="header-anchor" href="#_2-可变性" aria-label="Permalink to &quot;2.可变性&quot;">​</a></h3><ul><li><strong>原始类型</strong>：是不可变的（immutable）。 <ul><li>一旦创建，原始类型的值就不能被改变。例如，字符串一旦创建就不能被修改，所有对字符串的操作都会生成一个新的字符串。</li></ul></li><li><strong>对象类型</strong>：是可变的（mutable）。 <ul><li>对象的属性和方法可以被修改，添加或删除。</li></ul></li></ul><h3 id="_3-比较方式" tabindex="-1">3.比较方式 <a class="header-anchor" href="#_3-比较方式" aria-label="Permalink to &quot;3.比较方式&quot;">​</a></h3><ul><li><strong>原始类型</strong>：比较的是值本身。 <ul><li>如果两个原始类型的值相等，那么它们就是相等的。</li></ul></li><li><strong>对象类型</strong>：比较的是引用（即内存地址）。 <ul><li>如果两个对象的引用相同，那么它们就是相等的；否则，即使它们的内容相同，它们也是不相等的。</li></ul></li></ul><h3 id="_4-函数参数" tabindex="-1">4.函数参数 <a class="header-anchor" href="#_4-函数参数" aria-label="Permalink to &quot;4.函数参数&quot;">​</a></h3><ul><li>当函数参数是对象时，传递的是对象的引用。这意味着函数内部对参数的修改会影响到外部对象。</li></ul><h2 id="typeof-是否能正确判断类型-instanceof-能正确判断对象的原理是什么" tabindex="-1">typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？ <a class="header-anchor" href="#typeof-是否能正确判断类型-instanceof-能正确判断对象的原理是什么" aria-label="Permalink to &quot;typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？&quot;">​</a></h2><ul><li><strong>typeof</strong>：在大多数情况下可以正确判断原始类型，但对于对象类型只能判断是否为对象或函数，无法进一步细分。此外，typeof null 返回 &quot;object&quot; 是一个历史遗留的 bug。</li><li><strong>instanceof</strong>：通过原型链判断一个对象是否是某个构造函数的实例，非常强大和准确，但在跨全局环境时可能会失效。此外，可以通过自定义 Symbol.hasInstance 来改变其行为。</li></ul><h2 id="如何正确判断-this-箭头函数的-this-是什么" tabindex="-1">如何正确判断 this？箭头函数的 this 是什么？ <a class="header-anchor" href="#如何正确判断-this-箭头函数的-this-是什么" aria-label="Permalink to &quot;如何正确判断 this？箭头函数的 this 是什么？&quot;">​</a></h2><p><img src="'+t+`" alt="An image"></p><ul><li>箭头函数的 this 具有不同的行为，它捕获创建箭头函数时上下文的 this 值，而不是调用时的 this 值。箭头函数没有自己的 this，它从包含它的最近的常规（非箭头）函数的 this 值中继承。</li></ul><h2 id="浅拷贝和深拷贝" tabindex="-1">浅拷贝和深拷贝 <a class="header-anchor" href="#浅拷贝和深拷贝" aria-label="Permalink to &quot;浅拷贝和深拷贝&quot;">​</a></h2><ul><li><p><strong>浅拷贝</strong> 浅拷贝是指创建一个新对象，这个对象有着原始对象属性值的精确副本。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是引用类型，拷贝的就是内存地址，因此如果其中一个对象改变了这个地址，另一个对象也会受到影响。</p></li><li><p><strong>实现浅拷贝的方法</strong></p></li></ul><ol><li>使用 Object.assign() 方法</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b: { c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> shallowCopy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}, obj);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(shallowCopy); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { a: 1, b: { c: 2 } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shallowCopy.b.c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.b.c); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3 (原对象也被修改)</span></span></code></pre></div><ol start="2"><li>使用展开运算符（spread operator）</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b: { c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> shallowCopy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(shallowCopy); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { a: 1, b: { c: 2 } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shallowCopy.b.c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.b.c); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3 (原对象也被修改)</span></span></code></pre></div><ol start="3"><li>使用 Array.prototype.slice() 方法</li><li>使用 Array.prototype.concat() 方法</li></ol><ul><li><p><strong>深拷贝</strong> 深拷贝是指创建一个新对象，这个对象有着原始对象属性值的完全独立的副本。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是引用类型，会拷贝引用类型到内存中，并递归地拷贝所有属性。这意味着如果其中一个对象改变了这个地址，另一个对象不会受到影响。</p></li><li><p><strong>实现深拷贝的方法</strong></p></li></ul><ol><li>使用 JSON.parse() 和 JSON.stringify() 方法(这种方法只能处理不包含函数、undefined、Symbol 和循环引用的对象。)</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b: { c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> deepCopy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(deepCopy); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { a: 1, b: { c: 2 } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deepCopy.b.c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.b.c); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2 (原对象未被修改)</span></span></code></pre></div><ol start="2"><li>使用递归函数</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepClone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwnProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      result[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepClone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value[key])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="3"><li>使用 Lodash 库的 cloneDeep() 方法</li><li>使用 jQuery 的 extend() 方法</li></ol><h2 id="请解释一下javascript中的闭包-closure-以及闭包的实际应用场景。" tabindex="-1">请解释一下JavaScript中的闭包（closure），以及闭包的实际应用场景。 <a class="header-anchor" href="#请解释一下javascript中的闭包-closure-以及闭包的实际应用场景。" aria-label="Permalink to &quot;请解释一下JavaScript中的闭包（closure），以及闭包的实际应用场景。&quot;">​</a></h2><p>闭包是指在函数内部定义的函数可以访问其外部函数的变量。换句话说，闭包是由函数和其词法环境的组合而成，这个环境包含了这个函数在定义时所能访问的所有局部变量。</p><p>数据隐藏和封装： 函数工厂 闭包可以用于模块化开发，定义模块的私有成员和公开接口。</p><h2 id="请解释一下javascript的事件冒泡-event-bubbling-和事件捕获-event-capturing-机制-并说明如何使用事件委托-event-delegation-优化事件处理。" tabindex="-1">请解释一下JavaScript的事件冒泡（event bubbling）和事件捕获（event capturing）机制，并说明如何使用事件委托（event delegation）优化事件处理。 <a class="header-anchor" href="#请解释一下javascript的事件冒泡-event-bubbling-和事件捕获-event-capturing-机制-并说明如何使用事件委托-event-delegation-优化事件处理。" aria-label="Permalink to &quot;请解释一下JavaScript的事件冒泡（event bubbling）和事件捕获（event capturing）机制，并说明如何使用事件委托（event delegation）优化事件处理。&quot;">​</a></h2><ul><li>事件冒泡:事件冒泡是指事件从最具体的元素（事件的目标元素）开始，逐级向上传播到最不具体的元素（通常是文档或窗口）。在事件冒泡阶段，事件处理程序按照从内到外的顺序执行。</li><li>事件捕获:事件捕获是指事件从最不具体的元素（通常是文档或窗口）开始，逐级向下传播到最具体的元素（事件的目标元素）。在事件捕获阶段，事件处理程序按照从外到内的顺序执行。</li><li>事件委托:事件委托是一种利用事件冒泡机制，将事件处理程序添加到父元素，而不是每个子元素上，从而优化性能和简化代码。当子元素数量众多或频繁变化时，事件委托尤其有用。</li><li>事件冒泡：事件从最具体的元素向上传播到最不具体的元素。</li><li>事件捕获：事件从最不具体的元素向下传播到最具体的元素。</li><li>事件委托：利用事件冒泡，将事件处理程序添加到父元素，从而优化性能和简化代码。</li></ul><h2 id="请解释一下javascript的原型-prototype-和原型链-prototype-chain-以及它们在继承中的作用。" tabindex="-1">请解释一下JavaScript的原型（prototype）和原型链（prototype chain），以及它们在继承中的作用。 <a class="header-anchor" href="#请解释一下javascript的原型-prototype-和原型链-prototype-chain-以及它们在继承中的作用。" aria-label="Permalink to &quot;请解释一下JavaScript的原型（prototype）和原型链（prototype chain），以及它们在继承中的作用。&quot;">​</a></h2><ul><li><p>JavaScript的原型（prototype）和原型链（prototype chain）：在JavaScript中，每个对象都有一个隐藏的属性[[Prototype]]（通常可以通过__proto__访问），它指向该对象的原型对象。原型对象本身也有一个[[Prototype]]，指向更高一级的原型对象，如此形成一个链条，称为原型链。</p></li><li><p>原型和原型链的工作原理：当你访问一个对象的属性时，JavaScript会首先在该对象自身上查找该属性。如果找不到，它会沿着原型链向上查找，直到找到该属性或到达原型链的顶端（即Object.prototype）。 原型链中的继承：原型链在继承中起到重要作用，使对象可以共享方法和属性，从而实现代码复用。</p></li></ul><h2 id="请解释一下javascript的事件循环-event-loop-机制-以及它是如何处理异步任务的。" tabindex="-1">请解释一下JavaScript的事件循环（Event Loop）机制，以及它是如何处理异步任务的。 <a class="header-anchor" href="#请解释一下javascript的事件循环-event-loop-机制-以及它是如何处理异步任务的。" aria-label="Permalink to &quot;请解释一下JavaScript的事件循环（Event Loop）机制，以及它是如何处理异步任务的。&quot;">​</a></h2><ul><li>执行宏任务（Task）：从任务队列（Task Queue）中取出第一个宏任务并执行。宏任务包括初始化代码、setTimeout、setInterval、I/O操作等。</li><li>查询是否有微任务（Microtask）：在每个宏任务执行完后，事件循环会检查微任务队列（Microtask Queue）是否为空。微任务包括Promise的回调函数、MutationObserver等。</li><li>执行微任务：如果有微任务，将它们全部执行完。执行过程中产生的新微任务会被添加到微任务队列中，直到队列为空。</li><li>检查是否需要重新渲染页面：在每次宏任务和所有微任务执行完之后，浏览器会检查是否需要重新渲染页面（UI更新）。</li><li>重复上述步骤：事件循环重复上述步骤，不断地从宏任务队列中取任务执行。</li><li>宏任务（Task）：包括setTimeout、setInterval、I/O等。</li><li>微任务（Microtask）：包括Promise的回调、MutationObserver等。</li><li>事件循环（Event Loop）：不断执行宏任务和微任务，确保JavaScript能够高效地处理异步任务。</li></ul><h2 id="什么是提升-什么是暂时性死区-var、let-及-const-区别" tabindex="-1">什么是提升？什么是暂时性死区？var、let 及 const 区别？ <a class="header-anchor" href="#什么是提升-什么是暂时性死区-var、let-及-const-区别" aria-label="Permalink to &quot;什么是提升？什么是暂时性死区？var、let 及 const 区别？&quot;">​</a></h2><ul><li>提升（Hoisting）：在JavaScript中，变量和函数声明会被提升到其作用域的顶部。这意味着你可以在声明之前使用变量和函数，但它们的值或行为可能未定义。</li><li>暂时性死区（Temporal Dead Zone）：在ES6中，let和const声明的变量具有暂时性死区。这意味着在变量声明之前，无法访问该变量，否则会抛出ReferenceError。</li><li>var、let 及 const 区别： <ul><li>var：函数作用域，存在提升，可以重复声明，没有块级作用域。</li><li>let：块级作用域，不存在提升，不能重复声明，有暂时性死区。</li><li>const：块级作用域，不存在提升，不能重复声明，有暂时性死区，但必须初始化。</li></ul></li></ul><h2 id="为什么要使用模块化-都有哪几种方式可以实现模块化-各有什么特点" tabindex="-1">为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？ <a class="header-anchor" href="#为什么要使用模块化-都有哪几种方式可以实现模块化-各有什么特点" aria-label="Permalink to &quot;为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？&quot;">​</a></h2><h3 id="为什么要使用模块化" tabindex="-1">为什么要使用模块化？ <a class="header-anchor" href="#为什么要使用模块化" aria-label="Permalink to &quot;为什么要使用模块化？&quot;">​</a></h3><ol><li>代码组织：模块化使代码结构更加清晰，每个模块负责特定的功能或逻辑，易于理解和管理。</li><li>代码重用：模块可以在不同的项目或应用中复用，避免重复编写相同的代码。</li><li>团队协作：不同的开发人员可以并行开发不同的模块，减少冲突和依赖。</li><li>维护和扩展：修改一个模块的实现不会影响其他模块，有助于系统的维护和扩展。</li><li>隔离：模块化可以降低不同代码块之间的耦合度，使得代码更易于测试和调试。</li></ol><h3 id="不同的模块化方式各有优缺点和适用场景" tabindex="-1">不同的模块化方式各有优缺点和适用场景： <a class="header-anchor" href="#不同的模块化方式各有优缺点和适用场景" aria-label="Permalink to &quot;不同的模块化方式各有优缺点和适用场景：&quot;">​</a></h3><ul><li>CommonJS：适用于服务器端（Node.js），同步加载模块。</li><li>AMD：适用于浏览器端，支持异步加载。</li><li>CMD：与 AMD 类似，支持延迟加载，主要用于浏览器端。</li><li>ESM：现代 JavaScript 标准，支持静态分析和异步加载，逐渐成为主流。</li><li>UMD：兼容多种环境，适用于需要广泛兼容性的库。</li></ul><h2 id="promise-的特点是什么-分别有什么优缺点-什么是-promise-链-promise-构造函数执行和-then-函数执行有什么区别" tabindex="-1">Promise 的特点是什么，分别有什么优缺点？什么是 Promise 链？Promise 构造函数执行和 then 函数执行有什么区别？ <a class="header-anchor" href="#promise-的特点是什么-分别有什么优缺点-什么是-promise-链-promise-构造函数执行和-then-函数执行有什么区别" aria-label="Permalink to &quot;Promise 的特点是什么，分别有什么优缺点？什么是 Promise 链？Promise 构造函数执行和 then 函数执行有什么区别？&quot;">​</a></h2><h3 id="promise-的特点" tabindex="-1">Promise 的特点 <a class="header-anchor" href="#promise-的特点" aria-label="Permalink to &quot;Promise 的特点&quot;">​</a></h3><ul><li><strong>状态管理</strong>： <ul><li>一个 Promise 对象代表一个异步操作的最终完成（或失败）及其结果值。</li><li>一个 Promise 只能处于以下三种状态之一： <ul><li>Pending（进行中）：初始状态，操作尚未完成。</li><li>Fulfilled（已成功）：操作成功完成。</li><li>Rejected（已失败）：操作失败。</li></ul></li></ul></li><li><strong>不可变性</strong>：</li></ul><p>一旦 Promise 状态从 Pending 变为 Fulfilled 或 Rejected，就不能再改变。</p><ul><li><strong>链式调用</strong>：</li></ul><p>Promise 支持链式调用，通过 .then() 方法可以将多个异步操作串联起来。</p><ul><li><strong>错误处理</strong>：</li></ul><p>错误会在链中传递，直到找到第一个 .catch() 进行处理。</p><h3 id="promise-的优缺点" tabindex="-1"><strong>Promise 的优缺点</strong> <a class="header-anchor" href="#promise-的优缺点" aria-label="Permalink to &quot;**Promise 的优缺点**&quot;">​</a></h3><ul><li><strong>优点</strong><ul><li><strong>避免回调地狱</strong>：通过链式调用，可以使代码更具可读性和可维护性。</li><li><strong>标准化</strong>：Promise 是 ES6 标准的一部分，具有广泛的浏览器支持和一致的 API。</li><li><strong>错误处理</strong>：提供了统一的错误处理机制，可以在链的任意位置捕获错误。</li><li><strong>并行操作</strong>：可以使用 Promise.all()、Promise.race() 等方法方便地处理并行的异步操作。</li></ul></li><li><strong>缺点</strong><ul><li><strong>学习曲线</strong>：对于初学者来说，理解 Promise 及其用法可能比较困难。</li><li><strong>调试困难</strong>：虽然比回调函数容易调试，但在链中发生的错误有时仍然难以定位。</li><li><strong>嵌套结构</strong>：在某些复杂场景下，尽管使用了 Promise，代码仍然可能变得嵌套且难以管理。</li></ul></li></ul><h3 id="promise-链" tabindex="-1">Promise 链 <a class="header-anchor" href="#promise-链" aria-label="Permalink to &quot;Promise 链&quot;">​</a></h3><p>Promise 链是通过连续的 .then() 方法调用将多个异步操作串联起来的结构。每个 .then() 方法返回一个新的 Promise，使得下一个 .then() 方法可以在前一个 Promise 完成后执行。</p><h3 id="promise-构造函数执行和-then-函数执行有什么区别" tabindex="-1">Promise 构造函数执行和 then 函数执行有什么区别 <a class="header-anchor" href="#promise-构造函数执行和-then-函数执行有什么区别" aria-label="Permalink to &quot;Promise 构造函数执行和 then 函数执行有什么区别&quot;">​</a></h3><p>构造函数中的代码同步执行，.then() 中的回调函数异步执行。</p>`,60),h=[e];function p(r,k,o,d,g,E){return a(),s("div",null,h)}const y=i(n,[["render",p]]);export{u as __pageData,y as default};
