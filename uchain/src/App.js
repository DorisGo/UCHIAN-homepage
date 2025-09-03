import React from "react";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      {/* 关于团队 */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-header">
            <h2 className="section-title">关于我们</h2>
            <p className="section-subtitle">UCHIAN团队 - 创新科技，引领未来</p>
          </div>

          <div className="about-content">
            <div className="about-intro">
              <h3>团队简介</h3>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;“创数据”学生创新团队(UChain)，简称“创数据”团队。源于校级创新实验室(CINS)，于2017年独立管理。团队以人工智能、区块链与软件开发结合为特色，分为WEB前端、WEB后端、区块链、算法四个方向。团队管理以项目驱动，通过真实项目开发培养团队成员解决问题、沟通交流、心理承受等综合能力。
              </p>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;团队每年承担10余项石油勘探开发交叉领域的大数据、人工智能区块链项目。近三年，团队在各级各类大学生竞赛中获得150余项奖励，开发了实验危险器材管理系统、开放实验管理系统等校内多个信息系统。团队成员保送至各个重点高校的学生30余位，近50余位团队优秀毕业生就职于阿里、腾讯、百度、蚂蚁金服、字节跳动、小米、网易等互联网
              大厂。
              &nbsp;&nbsp;&nbsp;&nbsp;团队师生同心、砥砺前行，多年来形成良好的技术氛围和迎难而上
              的团队文化。码力全开，创想未来，“创数据”团队，欢迎你的加入!
            </div>

            {/* <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <h4>创新驱动</h4>
                <p>持续探索前沿技术，推动行业创新发展</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h4>团队协作</h4>
                <p>多元化的专业背景，协同合作创造价值</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <h4>技术卓越</h4>
                <p>深厚的技术功底，追求卓越的解决方案</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <h4>社会影响</h4>
                <p>关注社会需求，创造积极的社会影响</p>
              </div> }
            </div> */}

            <div className="tech-directions">
              <h3>技术方向</h3>
              <div className="tech-grid">
                <div className="tech-card frontend">
                  <div className="tech-icon">🎨</div>
                  <h4>前端开发</h4>
                  <p>
                    精通React、Vue、TypeScript等现代前端技术栈，致力于打造用户友好的交互体验和响应式界面设计。
                  </p>
                  <div className="tech-skills">
                    <span>React</span>
                    <span>Vue</span>
                    <span>TypeScript</span>
                    <span>CSS3</span>
                  </div>
                </div>

                <div className="tech-card backend">
                  <div className="tech-icon">⚙️</div>
                  <h4>后端开发</h4>
                  <p>
                    掌握Node.js、Python、Java等后端技术，构建高性能、可扩展的服务器架构和API服务。
                  </p>
                  <div className="tech-skills">
                    <span>Node.js</span>
                    <span>Python</span>
                    <span>Java</span>
                    <span>MySQL</span>
                  </div>
                </div>

                <div className="tech-card blockchain">
                  <div className="tech-icon">🔗</div>
                  <h4>区块链技术</h4>
                  <p>
                    深入研究智能合约、DeFi、NFT等区块链应用，探索去中心化技术的无限可能。
                  </p>
                  <div className="tech-skills">
                    <span>Solidity</span>
                    <span>Ethereum</span>
                    <span>Web3.js</span>
                    <span>IPFS</span>
                  </div>
                </div>

                <div className="tech-card ai">
                  <div className="tech-icon">🤖</div>
                  <h4>深度学习</h4>
                  <p>
                    运用TensorFlow、PyTorch等框架，开发智能算法和机器学习模型，推动AI技术应用。
                  </p>
                  <div className="tech-skills">
                    <span>TensorFlow</span>
                    <span>PyTorch</span>
                    <span>Python</span>
                    <span>NLP</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-mission">
              <h3>我们的使命</h3>
              <p>
                通过技术创新推动社会进步，构建更加智能、高效、可持续的未来。
                我们相信技术的力量可以改变世界，让每个人都能享受到科技进步带来的便利和福祉。
              </p>
            </div>

            <div className="about-vision">
              <h3>我们的愿景</h3>
              <p>
                成为引领行业发展的创新团队，在区块链、人工智能等领域建立技术标杆，
                培养更多优秀的技术人才，为构建数字化的美好世界贡献力量。
              </p>
            </div>
          </div>
        </div>
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
