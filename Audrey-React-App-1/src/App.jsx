import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import LoginPage from ".pages/LoginPage";
//import SignupPage from ".pages/SignupPage";
  
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        {/*<Route path="/login" element={<Login />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />*/}
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;

