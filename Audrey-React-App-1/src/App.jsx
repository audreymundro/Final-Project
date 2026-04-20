import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Programs from "./pages/Programs";
//import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import SignupPage from ".pages/SignupPage";
  
function App() {
  return (
      <div className="bg-gray-100 text-black">
        <Header />
        <BrowserRouter basename="/Audrey-React-App-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/programs" element={<Programs />} />
            {/*<Route path="/login" element={<Login />} />
            <Route path="/signuppage" element={<SignupPage />} />*/}
          </Routes>
          
        </BrowserRouter>
        <Footer />
        
      </div>
  );
}

export default App;
