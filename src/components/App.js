import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "../App.css";
import HomeHero from "./HomeHero";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <HomeHero />

        {/* 关于我们 */}
        <section id="about" className="section">
          <h2>关于我们</h2>
          <p>我们是 UCHIAN 团队，专注区块链与分布式系统方向。</p>
        </section>

        {/* 团队成员 */}
        <section id="team" className="section">
          <h2>团队成员</h2>
          <p>展示核心成员和分工。</p>
        </section>

        {/* 项目展示 */}
        <section id="projects" className="section">
          <h2>项目展示</h2>
          <p>列出近期项目与成果。</p>
        </section>

        {/* 指导老师 */}
        <section id="teachers" className="section">
          <h2>指导老师</h2>
          <p>介绍指导老师与研究方向。</p>
        </section>

        {/* 联系我们 */}
        <section id="contact" className="section">
          <h2>联系我们</h2>
          <p>邮箱：contact@uchian.example</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;