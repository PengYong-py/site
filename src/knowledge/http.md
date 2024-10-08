# 网络相关

## UDP 与 TCP 的区别是什么？
UDP（User Datagram Protocol）和 TCP（Transmission Control Protocol）是两个最常用的传输层协议，它们在许多方面有所不同，包括连接方式、数据传输可靠性、速度和使用场景。以下是它们的主要区别：

### 1. 连接方式

- **TCP**：面向连接的协议。在发送数据之前，必须先建立一个可靠的连接（通过三次握手）。在数据传输完成后，连接需要关闭（通过四次挥手）。
- **UDP**：无连接的协议。发送数据之前不需要建立连接，数据包（数据报文）直接被发送到目的地。

### 2. 数据传输可靠性

- **TCP**：提供可靠的数据传输，确保数据包按顺序、无丢失、无重复地到达接收方。TCP 实现了流量控制和拥塞控制。
- **UDP**：不提供可靠的数据传输，不保证数据包的顺序和完整性。数据包可能会丢失、重复或乱序到达接收方。

### 3. 速度和开销

- **TCP**：由于需要建立和维护连接，以及进行确认、重传、流量控制和拥塞控制，TCP 的开销较大，传输速度相对较慢。
- **UDP**：由于不需要建立连接，也不进行确认和重传，UDP 的开销较小，传输速度更快。

### 4. 数据传输方式

- **TCP**：基于字节流的传输，数据以流的形式传输，数据可以被分割和重新组合。
- **UDP**：基于数据报的传输，数据以独立的报文形式传输，每个数据包是一个独立的单元。

### 5. 使用场景

- **TCP**：适用于需要可靠传输的应用，如网页浏览（HTTP/HTTPS）、电子邮件（SMTP）、文件传输（FTP）等。
- **UDP**：适用于实时性要求高但对可靠性要求较低的应用，如视频流（视频会议、直播）、音频流（VoIP）、在线游戏等。

### 6. 头部开销

- **TCP**：头部较大，通常包含 20 字节的基本头部，再加上可选字段。
- **UDP**：头部较小，固定为 8 字节。

### 具体比较

| 特性                     | TCP                           | UDP                           |
|------------------------|-----------------------------|------------------------------|
| 连接方式                | 面向连接（连接建立和关闭）       | 无连接                       |
| 数据传输可靠性            | 可靠（顺序、无丢失、无重复）      | 不可靠（可能丢失、重复、乱序）  |
| 速度和开销              | 较慢，开销大                   | 较快，开销小                  |
| 数据传输方式             | 字节流传输                     | 数据报传输                   |
| 使用场景                | 需要可靠传输的应用               | 实时性高但可靠性要求低的应用   |
| 头部开销                | 20 字节 + 可选字段              | 8 字节                       |

### 总结

- **TCP** 提供可靠性、顺序和数据完整性，适用于要求高可靠性的应用场景。
- **UDP** 提供更高的传输速度和更低的开销，适用于对实时性要求高、对可靠性要求不高的应用场景。

## GET 和 POST区别

HTTP 协议中的 GET 和 POST 是两种常用的请求方法，它们的主要区别如下：

### 1. 参数传递方式

- **GET**：
  - 参数通过 URL 传递，通常附加在 URL 的末尾，以 `?` 分隔，多个参数之间用 `&` 分隔。
  - 示例：`GET /page?name=value&foo=bar HTTP/1.1`
  
- **POST**：
  - 参数放在请求体（body）中，通过 HTTP 消息的主体传递。
  - 示例：
    ```
    POST /page HTTP/1.1
    Host: example.com
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 27

    name=value&foo=bar
    ```

### 2. 安全性

- **GET**：
  - 参数直接暴露在 URL 中，可能会被记录在浏览器历史记录、服务器日志和其他地方，因此敏感信息不应使用 GET 传递。
  
- **POST**：
  - 参数在请求体中传递，虽然不能完全避免被截取，但相对更安全，适合传递敏感信息。

### 3. 数据长度

- **GET**：
  - 由于 URL 长度限制（不同浏览器和服务器有不同的限制，一般为 2048 字符），GET 请求传递的数据长度有限。
  
- **POST**：
  - 理论上数据长度无限制（实际上受限于服务器配置和内存大小），可以传递大量数据。

### 4. 浏览器缓存

- **GET**：
  - 请求会被浏览器缓存，适合用于获取相同数据的请求，如静态资源和查询操作。
  
- **POST**：
  - 请求不会被浏览器缓存，适合用于需要提交数据并且希望每次请求都能执行相同操作的场景，如表单提交。

### 5. 幂等性

- **GET**：
  - 幂等的，多次请求同一个 URL 应该得到相同的响应，不会产生副作用。适合用于获取数据。
  
- **POST**：
  - 非幂等的，多次相同的请求可能会产生不同的结果，可能会创建或修改资源。适合用于提交数据。

### 6. 书签和重定向

- **GET**：
  - 可以被书签保存，浏览器允许对 GET 请求进行重定向。
  
- **POST**：
  - 不能被书签保存，浏览器不允许对 POST 请求进行重定向。

### 具体比较

| 特性                     | GET                                   | POST                                 |
|------------------------|--------------------------------------|--------------------------------------|
| 参数传递方式             | URL 末尾，通过查询字符串传递                | 请求体中，通过消息主体传递                |
| 安全性                  | 参数暴露在 URL 中，不适合传递敏感信息         | 参数在请求体中，相对更安全，适合传递敏感信息  |
| 数据长度                | 有限（受 URL 长度限制）                     | 理论上无限制（受服务器配置限制）           |
| 浏览器缓存              | 会被浏览器缓存                            | 不会被浏览器缓存                           |
| 幂等性                  | 幂等，适合获取数据                           | 非幂等，适合提交数据                           |
| 书签和重定向              | 可以被书签保存，允许重定向                     | 不能被书签保存，不允许重定向                  |

### 总结

- **GET** 方法主要用于获取数据，具有较好的性能和缓存机制，但不适合传递敏感信息和大量数据。
- **POST** 方法主要用于提交数据，安全性较高，适合传递敏感信息和大量数据，但不具备 GET 的缓存和幂等特性。

## vue-router 几种模式的区别

