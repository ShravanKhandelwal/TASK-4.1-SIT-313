import React from "react";
import NavBar from "./components/navbar";
import Header from "./components/header";
import Header_text from "./components/header_text";
import Hero_section_1 from "./components/hero_section_1";
import Bottom_navbar from "./components/bottom_navbar";
import Footer from "./components/footer";

// import './App.css'; // You can create this file for styling if needed

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Header_text />
      <Hero_section_1 />
      <Bottom_navbar />
      <Footer />
    </div>
  );
};

export default App;
