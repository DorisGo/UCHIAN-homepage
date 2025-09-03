import React from "react";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      {/* 关于我们 */}
      <section id="about" className="section">
        <h2>关于我们</h2>
        <p>这是关于我们页面的内容。</p>
      </section>

      {/* 团队成员 */}
      <section id="team" className="section">
        <h2>团队成员</h2>
        <p>这是团队成员页面的内容。</p>
      </section>

      {/* 项目展示 */}
      <section id="projects" className="section">
        <h2>项目展示</h2>
        <p>这是项目展示页面的内容。</p>
      </section>

      {/* 指导老师 */}
      <section id="teachers" className="section">
        <h2>指导老师</h2>
        <p>这是指导老师页面的内容。</p>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="section">
        <h2>联系我们</h2>
        <p>这是联系我们页面的内容。</p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
