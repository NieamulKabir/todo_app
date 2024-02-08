// import "./App.css";

import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TodoContainer from "./Todo/TodoContainer";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
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
