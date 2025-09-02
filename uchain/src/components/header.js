import React, { useState, useEffect } from "react";
import moment from "moment"; // 引入 moment.js
import axios from "axios"; // 引入 axios

const Header = () => {
  // 状态变量：存储随机诗句
  const [quote, setQuote] = useState("");

  // 状态变量：存储实时时间
  const [currentTime, setCurrentTime] = useState("");

  // 状态变量：存储天气信息
  const [weather, setWeather] = useState({ description: "", temp: "" });

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
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "YOUR_OPEN_WEATHER_MAP_API_KEY"; // 替换为你的API密钥
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("获取天气数据时出错:", error);
      }
    };

    fetchWeather();

    // 定期更新天气
    const weatherIntervalId = setInterval(() => {
      fetchWeather();
    }, 3600000); // 1小时 = 3600000毫秒

    // 清除定时器
    return () => clearInterval(weatherIntervalId);
  }, []);

  return (
    <div className="header">
      <div className="quote-container">
        <p>"{quote}"</p>
      </div>
      <div className="time-container">
        <p>当前时间: {currentTime}</p>
      </div>
      <div className="weather-container">
        <p>
          天气: {weather.description}, 温度: {weather.temp}°C
        </p>
      </div>
    </div>
  );
};

export default Header;
