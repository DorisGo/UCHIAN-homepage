import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";

const Header = () => {
  // 状态变量
  const [quote, setQuote] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [weather, setWeather] = useState({ description: "", temp: "" });
  const [backgroundImage, setBackgroundImage] = useState("");

  // 随机诗句
  const quotes = [
    "星影落九天，鱼雁舞千弦。但为君沉吟，孤鸿醉尘烟。",
    "明月几时有，把酒问青天。",
    "大江东去，浪淘尽，千古风流人物。",
  ];
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  // 实时时间
  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(moment().format("HH:mm:ss"));
    };
    setInterval(updateClock, 1000);
  }, []);

  // 天气信息
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "YOUR_OPEN_WEATHER_MAP_API_KEY";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };
    fetchWeather();
    setInterval(fetchWeather, 3600000); // 每小时更新一次天气
  }, []);

  // 自动更新壁纸
  const wallpaperUrls = [
    'url("wallpaper1.jpg")',
    'url("wallpaper2.jpg")',
    'url("wallpaper3.jpg")',
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage(
        wallpaperUrls[(Math.random() * wallpaperUrls.length) | 0]
      );
    }, 60000); // 每分钟更新一次壁纸
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${backgroundImage}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="content">
        <div className="logo-container">
          <img src="path/to/your/logo.png" alt="Uchain Logo" />
          <h1>Uchain</h1>
        </div>
        <div className="quote-container">
          <p>"{quote}"</p>
        </div>
        <div className="info-container">
          <div className="quote-box">
            <p>{quote}</p>
            <p>-佚名</p>
          </div>
          <div className="datetime-box">
            <p className="date">
              当前日期: {moment().format("YYYY 年 MM 月 DD 日")}
            </p>
            <p className="time">当前时间: {currentTime}</p>
            <p className="weather">
              天气: {weather.description}, 温度: {weather.temp}°C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
