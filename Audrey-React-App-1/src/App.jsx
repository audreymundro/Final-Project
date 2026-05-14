import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Programs from "./pages/Programs";
import F1AGrid from "./components/carousellinkpages/f1academygrid";
import F1Regs from "./components/carousellinkpages/2026f1regs";
import F1Grid from "./components/carousellinkpages/f1grid";
import LoginPage from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import SignupPage from ".pages/SignupPage";
  
function App() {
  return (
      <div className="bg-gray-100 text-black">
        <BrowserRouter basename="/Final-Project/">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/f1-academy" element={<F1AGrid />} />
            <Route path="/f1regs" element={<F1Regs />} />
            <Route path="/f1grid" element={<F1Grid />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          
        </BrowserRouter>
        <Footer />
        
      </div>
  );
}

export default App;
