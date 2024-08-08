# WebSocket封装
要获取 `onclose` 事件中的 `code` 和 `reason`，以判断 WebSocket 断开的原因，你可以在 `onclose` 回调函数中处理这些信息。以下是修改后的代码，包含 `code` 和 `reason` 的处理：

```javascript
class WebSocketWrapper {
  constructor(url, options = {}) {
    this.url = url;
    this.ws = null;
    this.messageQueue = [];
    this.reconnectInterval = options.reconnectInterval || 5000;
    this.heartbeatInterval = options.heartbeatInterval || 30000; // 心跳间隔
    this.heartbeatTimeout = options.heartbeatTimeout || 10000; // 心跳超时时间
    this.heartbeatTimer = null;
    this.heartbeatTimeoutTimer = null;
    this.isManualClose = false; // 是否手动关闭
    this.connect();
  }

  connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log('WebSocket connected');
      this.flushMessageQueue();
      this.startHeartbeat();
    };

    this.ws.onmessage = (event) => {
      this.handleMessage(event.data);
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.ws.onclose = (event) => {
      console.log(`WebSocket disconnected, code: ${event.code}, reason: ${event.reason}`);
      this.stopHeartbeat();
      if (!this.isManualClose && event.code !== 1000) { // 1000表示正常关闭
        setTimeout(() => this.connect(), this.reconnectInterval);
      }
    };
  }

  send(message) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      this.messageQueue.push(message);
    }
  }

  flushMessageQueue() {
    while (this.messageQueue.length > 0) {
      this.ws.send(this.messageQueue.shift());
    }
  }

  handleMessage(data) {
    // 如果收到心跳响应，重置心跳超时计时器
    if (data === 'pong') {
      this.resetHeartbeatTimeout();
      return;
    }
    // 处理其他消息
    console.log('Received message:', data);
  }

  startHeartbeat() {
    this.heartbeatTimer = setInterval(() => {
      if (this.ws.readyState === WebSocket.OPEN) {
        this.ws.send('ping'); // 发送心跳包
        this.startHeartbeatTimeout(); // 启动心跳超时计时器
      }
    }, this.heartbeatInterval);
  }

  stopHeartbeat() {
    clearInterval(this.heartbeatTimer);
    clearTimeout(this.heartbeatTimeoutTimer);
  }

  startHeartbeatTimeout() {
    clearTimeout(this.heartbeatTimeoutTimer);
    this.heartbeatTimeoutTimer = setTimeout(() => {
      console.warn('Heartbeat timeout');
      this.ws.close(); // 关闭连接，触发重连
    }, this.heartbeatTimeout);
  }

  resetHeartbeatTimeout() {
    clearTimeout(this.heartbeatTimeoutTimer);
  }

  close() {
    this.isManualClose = true; // 设置标志，不再重连
    this.stopHeartbeat();
    this.ws.close(1000, 'Manual close'); // 传递关闭码和原因
  }
}

// 使用示例
const ws = new WebSocketWrapper('wss://example.com/socket', {
  reconnectInterval: 5000,
  heartbeatInterval: 30000,
  heartbeatTimeout: 10000
});

ws.send(JSON.stringify({ type: 'greet', payload: 'Hello, WebSocket!' }));

// 手动关闭连接
// ws.close();
```

### 代码改进说明

1. **获取 `onclose` 事件的 `code` 和 `reason`**：
   - 在 `ws.onclose` 回调函数中，使用 `event.code` 和 `event.reason` 获取断开连接的状态码和原因。

2. **判断断开原因**：
   - 如果 `event.code` 为 `1000`，表示正常关闭。
   - 只有在 `isManualClose` 为 `false` 并且 `event.code` 不等于 `1000` 时，才会触发重连机制。

3. **手动关闭传递关闭码和原因**：
   - 在 `close` 方法中调用 `this.ws.close(1000, 'Manual close')`，传递关闭码和原因。

通过这些改进，你可以准确地判断 WebSocket 连接的断开原因，并根据情况决定是否需要重连。