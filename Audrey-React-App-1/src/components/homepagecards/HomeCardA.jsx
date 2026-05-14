import F1AGrid from "../carousellinkpages/f1academygrid";
import CarouselA from "./carouselA";

function HomeCardA({cardTitle}) {
  return (
      <div className="m-10 font-serif border-2 border-black rounded-lg p-4">
          <h1 className="font-serif py-4 text-xl">{cardTitle}</h1>
          <div className="relative h-100 w-full border-4 border-black rounded-xl">
            <CarouselA
              aImg1={"./images/f1academygrid.avif"}
              aTit1={"The Current Formula Academy Grid 2026"}
              aDesc1={"The F1 Academy includes 18 cars operated by 6 different teams. The drivers race a F4 spec car for 14 races across 7 weekends. 10 drivers are sponsored by the current F1 teams and the remaining drivers are sponsored by outside brands."}
              aLink1={"/Final-Project/f1-academy"}
              aImg2={"./images/hannahschmitz.png"}
              aTit2={"Hannah Schmitz"}
              aDesc2={"Hannah Schmitz is the Head Strategist at Oracle Red Bull Racing. She has been a key figure in some of their most prominent wins of 2025, most notably Max Verstappen's win at the 2025 Qatar Grand Prix."}
              aLink2={"/Final-Project/f1-academy"}
              aImg3={"./images/lauramueller.webp"}
              aTit3={"Laura Mueller"}
              aDesc3={"Laura Mueller is the first female Race Engineer, working with Esteban Ocon on TGR Haas F1 Team."}
              aImg4={"./images/f1academyontrack.avif"}
              aTit4={"F1 Academy 2"}
              aDesc4={"Description for F1 Academy 2"}
            />
          </div>
      </div>
  );
}

export default HomeCardA;
