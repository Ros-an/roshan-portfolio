import React from "react";
import { Navbar } from "./components";
import { Blogs, Footer, Header, Skills, Work } from "./container";
import "./App.scss";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Header />
      {/* <About /> */}
      <Work />
      <Skills />
      <Blogs />
      <Footer />
    </main>
  );
}

export default App;
