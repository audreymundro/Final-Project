import HomeCardA from "../components/homepagecards/HomeCardA";
import HomeCardB from "../components/homepagecards/HomeCardB";
//import LoginPage from "../components/loginpagecards/LoginPage";

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold font-serif text-center p-8">Home Page!</h1>
      <h2 className="text-2xl font-semibold font-serif text-center p-4">View New Information on Motorsports and STEM!</h2>
      <HomeCardA 
      cardTitle="New Formula Academy Articles" 
      />
      <HomeCardB
      cardTitle="New Articles on Formula 1"
      />
      {/*<LoginPage />*/}
    </div>
  );
}

export default Home;
