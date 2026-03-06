import Header from "./components/Header";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";

function App() {
  return (
    <div className="app-container m-4">
      <Header />
      <br />
      <main>
        <h2 className="font-serif font-bold text-xl py-4">Welcome to my Website</h2>
        <Card1 />
        <Food />
        <Card2 />
        <Card3 />
     </main>
     <Footer />
    </div>
  );
}

export default App;