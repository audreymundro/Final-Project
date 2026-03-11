import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Card1 from "./components/Card1";

function App() {
  return (
    <div>

    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    <br />
    <Card1
      myTitle="About Me"
      mySubtitle="A little bit about myself"
      myName="Group Leader"
      myTitleTwo="Who I am:"
      myBio="Hi! I am 18 years old. I like sports, reading, and traveling. I am passionate about STEM, Formula 1, and soccer. I would like to work in F1 or motorsports later in my life."
      myEmoji="🏎️"
    />
    </div>
  );
}

export default App;

