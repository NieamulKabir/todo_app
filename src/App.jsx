// import "./App.css";

import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
