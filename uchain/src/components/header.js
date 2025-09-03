// export default Header;
import React, { useState, useEffect } from "react";
import moment from "moment";

// 可自行替换为任意图片路径
const wallpapers = [
  require("../images/icon/background8.jpg"),
  require("../images/picture-19f2969f.jpg"),
  require("../images/cy-c3c9c271.jpg"),
];

// 今日留言数据
const todayMessages = [
  "今天心情不错！",
  "学习新技能中...",
  "加油！",
  "团队合作真棒！",
  "期待新的挑战！",
  "代码写得很开心",
  "大家一起努力！",
  "创新永无止境",
];

const Header = () => {
  const [quote, setQuote] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const quotes = [
    "星影落九天，鱼雁舞千弦。但为君沉吟，孤鸿醉尘烟。",
    "明月几时有，把酒问青天。",
    "大江东去，浪淘尽，千古风流人物。",
    "云破日出瞳瞳见，风卷残花片片飞。",
  ];

  useEffect(() => {
    const loadRandomQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    };
    loadRandomQuote();
    const quoteIntervalId = setInterval(loadRandomQuote, 7000);
    return () => clearInterval(quoteIntervalId);
  }, []);

  useEffect(() => {
    const updateTime = () => setCurrentTime(moment().format("HH:mm:ss"));
    updateTime();
    const timeIntervalId = setInterval(updateTime, 1000);
    return () => clearInterval(timeIntervalId);
  }, []);

  // 自动换背景
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWallpaperIndex((prev) =>
        prev === wallpapers.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // 自动切换今日留言
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessageIndex((prev) =>
        prev === todayMessages.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(messageTimer);
  }, []);

  return (
    <div
      className="header"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: `url(${wallpapers[currentWallpaperIndex]}) center/cover no-repeat`,
        minHeight: "100vh", // 从420px调整为占满一屏高度
        height: "100vh",
        color: "#fff",
        padding: "28px 24px",
        borderRadius: "14px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* 背景漂浮心情气泡：放在最底层，避免遮挡内容 */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* 生成多组重复气泡 */}
        {[...Array(12)].map((_, i) => {
          const size = 14 + Math.round(Math.random() * 18); // 14-32px 字体
          const duration = 18 + Math.round(Math.random() * 14); // 18-32s
          const delay = Math.round(Math.random() * 18) * -1; // 负延迟，错峰
          const left = Math.round(Math.random() * 90); // 初始横向位置
          const colors = [
            "#ffd6e7",
            "#d6ecff",
            "#e7ffd6",
            "#fff0d6",
            "#e6d6ff",
          ];
          const color = colors[i % colors.length];
          const msg = todayMessages[i % todayMessages.length];
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${left}%`,
                bottom: -60,
                padding: "6px 10px",
                borderRadius: 999,
                background: color,
                color: "#2d3748",
                fontWeight: 700,
                fontSize: size,
                whiteSpace: "nowrap",
                filter: "drop-shadow(0 6px 12px rgba(0,0,0,.15))",
                animation: `rise${i} ${duration}s linear infinite`,
              }}
            >
              {msg}
              <style>{`
                @keyframes rise${i} {
                  0% { transform: translateY(0) translateX(0); opacity: .0; }
                  10% { opacity: .9; }
                  50% { transform: translateY(-50vh) translateX(${
                    (i % 2 === 0 ? 1 : -1) * 30
                  }px); }
                  100% { transform: translateY(-110vh) translateX(${
                    (i % 2 === 0 ? 1 : -1) * 60
                  }px); opacity: .0; }
                }
              `}</style>
            </div>
          );
        })}
      </div>

      {/* 左上角 logo 背景图（可替换） */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          width: 56,
          height: 56,
          borderRadius: 10,
          backgroundImage: `url(${require("../images/logo.png")})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          backdropFilter: "blur(2px)",
          zIndex: 2,
        }}
      />

      {/* 左侧：团队名称与口号 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 8,
          maxWidth: "55%",
          textShadow: "0 2px 6px rgba(0,0,0,0.45)",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: 2 }}>
          UCHAIN
        </div>
        <div style={{ fontSize: 22, fontWeight: 700 }}>码力全开 创想未来！</div>
      </div>

      {/* 右侧：时间 日期 与 名言标签 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 10,
          padding: "10px 12px",
          borderRadius: 12,
          background: "rgba(0,0,0,0.35)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          minWidth: 220,
          zIndex: 3, // 最高，确保不被气泡覆盖
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 800 }}>{currentTime}</div>
        <div style={{ fontSize: 16 }}>
          {moment().format("YYYY 年 MM 月 DD 日 dddd")}
        </div>
        <div
          style={{
            marginTop: 6,
            fontSize: 14,
            padding: "6px 10px",
            borderRadius: 8,
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
            maxWidth: 360,
            textAlign: "right",
          }}
        >
          「{quote}」
        </div>

        {/* 今日留言漂动效果（保留右侧小标签） */}
        <div
          style={{
            marginTop: 12,
            padding: "8px 12px",
            borderRadius: 10,
            background: "rgba(102, 126, 234, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(102, 126, 234, 0.3)",
            maxWidth: 280,
            textAlign: "center",
            animation: "fadeInOut 4s ease-in-out infinite",
          }}
        >
          <div style={{ fontSize: 13, color: "#e2e8f0", marginBottom: 4 }}>
            💬 今日留言
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              transition: "opacity 0.5s ease",
              opacity: 1,
            }}
          >
            {todayMessages[currentMessageIndex]}
          </div>
        </div>
      </div>

      {/* 添加CSS动画 */}
      <style jsx>{`
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.8;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
