import HomeCardA from "../components/homepagecards/HomeCardA";
import HomeCardB from "../components/homepagecards/HomeCardB";
import HomeCardC from "../components/homepagecards/HomeCardC";
import RacesCarouselContainer from "../components/homepagecards/HomeCardDRaces";
import F1ARacesCarouselContainer from "../components/homepagecards/HomeCardEF1ARaces";
import Comment from "../components/Comment";
import ExtraCodePage from "./extracodepage";
//import LoginPage from "../components/loginpagecards/LoginPage";

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold font-serif text-center p-8">Home Page</h1>
      <h2 className="text-2xl font-semibold font-serif text-center p-4">View New Information on Motorsports and STEM!</h2>
      <HomeCardA cardTitle="New: Formula Academy" />
      <HomeCardB cardTitle="New: Formula 1" />
      <HomeCardC cardTitle="New: Science, Technology, Math, and Engineering" />
      <RacesCarouselContainer suggestionTitle="2026 F1 Race Calendar and Updates" />
      <F1ARacesCarouselContainer suggestionTitle="2026 F1 Academy Race Calendar and Updates" />
      {/*<Comment />
      <LoginPage />*/}
    </div>
  );
}

export default Home;
