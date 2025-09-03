// export default Header;
import React, { useState, useEffect } from "react";
import moment from "moment"; // 引入 moment.js
import axios from "axios"; // 引入 axios

const wallpapers = [
  "/images/wallpaper1.jpg", // 壁纸图片路径
  "/images/wallpaper2.jpg",
  "/images/wallpaper3.jpg",
  "/images/wallpaper4.jpg",
];

const Header = () => {
  // 状态变量：存储随机诗句
  const [quote, setQuote] = useState("");
  // 状态变量：存储实时时间
  const [currentTime, setCurrentTime] = useState("");
  // 状态变量：存储天气信息
  const [weather, setWeather] = useState({ description: "", temp: "" });
  // 状态变量：存储当前壁纸索引
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);

  // 定义诗句数组
  const quotes = [
    "星影落九天，鱼雁舞千弦。但为君沉吟，孤鸿醉尘烟。",
    "明月几时有，把酒问青天。",
    "大江东去，浪淘尽，千古风流人物。",
    "云破日出瞳瞳见，风卷残花片片飞。",
  ];

  // 初始化随机诗句，并每隔5秒更新一次
  useEffect(() => {
    const loadRandomQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    };

    loadRandomQuote();

    // 定期更新诗句
    const quoteIntervalId = setInterval(() => {
      loadRandomQuote();
    }, 5000);

    // 清除定时器
    return () => clearInterval(quoteIntervalId);
  }, []);

  // 实时更新时间，并每隔1秒更新一次
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(moment().format("HH:mm:ss"));
    };

    updateTime();

    // 定期更新时间
    const timeIntervalId = setInterval(() => {
      updateTime();
    }, 1000);

    // 清除定时器
    return () => clearInterval(timeIntervalId);
  }, []);

  // 获取天气信息，并每隔1小时更新一次
  // const apiKey = "f56530437a87c381ba54a9f601d1889a"; // 替换为你的API密钥
  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     try {

  //       const response = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/weather,
  //         {
  //           params: {
  //             q: "chengdu,cn", // 替换为你想查询的城市
  //             appid: apiKey,
  //             units: "metric", // 使用公制单位（摄氏度）
  //       },
  //     }
  //       );
  //       setWeather(response.data);
  //     } catch (error) {
  //       console.error("获取天气数据时出错:", error);
  //     }
  //   };

  //   fetchWeather();

  //   // 定期更新天气
  //   const weatherIntervalId = setInterval(() => {
  //     fetchWeather();
  //   }, 3600000); // 1小时 = 3600000毫秒

  //   // 清除定时器
  //   return () => clearInterval(weatherIntervalId);
  // }, []);

  // 实现自动更换壁纸
  useEffect(() => {
    const changeWallpaper = () => {
      setCurrentWallpaperIndex((prevIndex) =>
        prevIndex === wallpapers.length - 1 ? 0 : prevIndex + 1
      );
    };

    const wallpaperIntervalId = setInterval(() => {
      changeWallpaper();
    }, 5000); // 每5秒更换一次壁纸

    return () => clearInterval(wallpaperIntervalId);
  }, [wallpapers]);

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: `url(${wallpapers[currentWallpaperIndex]}) center/cover no-repeat`,
        height: "400px",
        color: "white",
        padding: "20px",
      }}
    >
      {/* 左侧区域：logo 和 文字 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "black",
        }}
      >
        <img
          src="../images/logo.png" // 请替换为实际的 logo 地址
          alt="Logo"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
        <h1
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "36px",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Uchain
        </h1>
      </div>

      {/* 中间区域：诗句 */}
      <div
        style={{
          flex: "1",
          textAlign: "center",
          color: "#2c458cff", // 相当于图片中的诗句颜色
        }}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            whiteSpace: "pre-line",
            fontFamily: "serif",
            fontStyle: "italic",
          }}
        >
          "{quote}"
        </p>
        <p
          style={{ fontSize: "16px", fontStyle: "italic", color: "#47edffff" }}
        >
          {/* - 「例如：墨香惊梦」 */}
        </p>
      </div>

      {/* 右侧区域：时间、日期和天气 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          color: "black",
        }}
      >
        {/* 时间 */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {currentTime}
        </div>
        {/* 日期 */}
        <div
          style={{
            fontSize: "18px",
          }}
        >
          {moment().format("YYYY 年 MM 月 DD 日")} {moment().format("dddd")}
        </div>
        {/* 天气 */}
        {/* <div
          style={{
            fontSize: "18px",
          }}
        >
          天气: {weather.description}, 温度: {weather.temp}℃
        </div> */}
      </div>
    </div>
  );
};

export default Header;
