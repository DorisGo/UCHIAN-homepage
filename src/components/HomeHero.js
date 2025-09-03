import React, { useEffect, useState } from "react";
import "./HomeHero.css";

const HomeHero = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [weatherDesc, setWeatherDesc] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "星影落九天，鱼雁舞千弦。",
    "明月几时有，把酒问青天。",
    "大江东去，浪淘尽，千古风流人物。",
    "行到水穷处，坐看云起时。",
    "道阻且长，行则将至。"
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, "0");
      const d = String(now.getDate()).padStart(2, "0");
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${y}-${m}-${d}-${hh}-${mm}-${ss}`);
    };
    updateTime();
    const t = setInterval(updateTime, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const rotate = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(rotate);
  }, [quotes.length]);

  useEffect(() => {
    // 成都坐标
    const latitude = 30.5728;
    const longitude = 104.0668;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`;
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        const t = data?.current?.temperature_2m;
        const code = data?.current?.weather_code;
        setTemperature(typeof t === "number" ? Math.round(t) : null);
        setWeatherDesc(mapWeatherCode(code));
      })
      .catch(() => { });
    return () => controller.abort();
  }, []);

  const mapWeatherCode = (code) => {
    const map = {
      0: "晴",
      1: "多云",
      2: "多云",
      3: "阴",
      45: "雾",
      48: "雾",
      51: "小雨",
      53: "小雨",
      55: "中雨",
      61: "小雨",
      63: "中雨",
      65: "大雨",
      71: "小雪",
      73: "中雪",
      75: "大雪",
      95: "雷雨"
    };
    return map[code] || "天气";
  };

  return (
    <section className="home-hero">
      <div className="home-hero__overlay" />
      {/* 左上角 Logo 占位：将 src 改为你的图片路径 */}
      <div className="home-hero__brand">
        <img src="../images/tranlogo-48c8bcc0.png" alt="团队Logo" />
      </div>
      <div className="home-hero__content">
        <div className="home-hero__left">
          <h1>UCHAIN</h1>
          <p className="hero-subtitle">创数据团队招新啦！</p>
        </div>
        <div className="home-hero__right">
          <div className="home-hero__infocard">
            <div className="infocard-row">
              <span className="label">时间</span>
              <span className="value">{currentTime}</span>
            </div>
            <div className="infocard-row">
              <span className="label">天气</span>
              <span className="value">{weatherDesc}{typeof temperature === "number" ? ` · ${temperature}°C` : ""}</span>
            </div>
            <div className="infocard-row quote-row">
              <span className="label">名言</span>
              <span className="value quote-text" title={quotes[quoteIndex]}>{quotes[quoteIndex]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

