import React from "react";
import { Navbar } from "./components";
import { About, Blogs, Footer, Header, Skills, Work } from "./container";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Blogs />
      <Footer />
    </main>
  );
}

export default App;
