import React, { useState, useEffect } from "react";
import "./MessageBox.css";

const MessageBox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // 模拟获取留言数据
  useEffect(() => {
    // 这里可以调用后端API获取留言
    const fetchMessages = async () => {
      try {
        // const response = await fetch('/api/messages');
        // const data = await response.json();
        // setMessages(data);

        // 临时使用模拟数据
        setMessages([
          {
            id: 1,
            text: "今天心情不错！",
            timestamp: "2024-01-15 14:30",
            author: "匿名用户",
          },
          {
            id: 2,
            text: "学习新技能中...",
            timestamp: "2024-01-15 13:45",
            author: "匿名用户",
          },
          {
            id: 3,
            text: "加油！",
            timestamp: "2024-01-15 12:20",
            author: "匿名用户",
          },
        ]);
      } catch (error) {
        console.error("获取留言失败:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    try {
      // 这里调用后端API提交留言
      // const response = await fetch('/api/messages', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ text: message })
      // });

      // 模拟提交成功
      const newMessage = {
        id: Date.now(),
        text: message,
        timestamp: new Date().toLocaleString("zh-CN"),
        author: "匿名用户",
      };

      setMessages((prev) => [newMessage, ...prev]);
      setMessage("");
      setShowForm(false);

      // 显示成功提示
      alert("留言提交成功！");
    } catch (error) {
      console.error("提交留言失败:", error);
      alert("留言提交失败，请重试");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="message-box">
      {/* 留言按钮 */}
      <button
        className="message-toggle-btn"
        onClick={() => setShowForm(!showForm)}
      >
        💬 留下你的心情
      </button>

      {/* 留言表单 */}
      {showForm && (
        <div className="message-form-overlay">
          <div className="message-form">
            <h3>分享你的心情</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="今天想说什么呢？"
                maxLength={200}
                rows={4}
                required
              />
              <div className="form-actions">
                <span className="char-count">{message.length}/200</span>
                <div className="buttons">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="cancel-btn"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !message.trim()}
                    className="submit-btn"
                  >
                    {isSubmitting ? "提交中..." : "发送"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 留言展示区域 */}
      <div className="messages-display">
        <h4>今日心情墙</h4>
        <div className="messages-list">
          {messages.slice(0, 5).map((msg) => (
            <div key={msg.id} className="message-item">
              <div className="message-text">{msg.text}</div>
              <div className="message-meta">
                <span className="message-author">{msg.author}</span>
                <span className="message-time">{msg.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
        {messages.length > 5 && (
          <div className="more-messages">
            还有 {messages.length - 5} 条留言...
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
