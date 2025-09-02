import React from "react";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <h1>欢迎来到我的网站</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
