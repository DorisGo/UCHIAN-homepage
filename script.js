// 自动更新壁纸功能
let wallpaperIndex = 1;
const wallpaperUrls = [
  'url("wallpaper1.jpg")',
  'url("wallpaper2.jpg")',
  'url("wallpaper3.jpg")',
  // 可以根据需要添加更多壁纸地址
];

function updateBackground() {
  document.querySelector(".background").style.backgroundImage =
    wallpaperUrls[wallpaperIndex];
  wallpaperIndex = (wallpaperIndex + 1) % wallpaperUrls.length;
}

setInterval(updateBackground, 60000); // 每分钟更新一次壁纸
updateBackground(); // 初始化时更新一次

// 计时功能
function updateClock() {
  const clockElement = document.getElementById("clock");
  const date = new Date();
  clockElement.textContent = date.toLocaleTimeString();
}

setInterval(updateClock, 1000); // 每秒更新一次时间
updateClock(); // 初始化时更新一次时间

// 每日天气功能（这里使用了OpenWeatherMap的API）
async function fetchWeather() {
  try {
    const apiKey = "YOUR_API_KEY"; // 你需要在这里替换为你的OpenWeatherMap API Key
    const city = "Beijing"; // 你可以更改为你想要的城市
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    const weatherElement = document.getElementById("weather");
    weatherElement.textContent = `当前天气: ${data.weather[0].description}, 温度: ${data.main.temp}°C`;
  } catch (error) {
    console.error("获取天气数据时出错:", error);
  }
}

fetchWeather(); // 获取一次天气数据
setInterval(fetchWeather, 3600000); // 每小时更新一次天气数据
