// import "./App.css";

import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TodoContainer from "./Todo/TodoContainer";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TodoContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
