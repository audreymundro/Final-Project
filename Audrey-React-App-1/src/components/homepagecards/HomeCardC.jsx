import CarouselC from "./carouselC";

function HomeCardC({cardTitle}) {
  return (
      <div className="m-10 font-serif border-2 border-black rounded-lg p-4">
          <h1 className="font-serif py-4 text-xl">{cardTitle}</h1>
          <div className="relative h-100 w-full border-4 border-black rounded-xl">
            <CarouselC
              cImg1={"./images/f1academygrid.avif"}
              cTit1={"F1 Academy 1"}
              cDesc1={"Description for F1 Academy 1"}
              cImg2={"./images/miamigp.avif"}
              cTit2={"Miami GP"}
              cDesc2={"Description for Miami GP"}
              cImg3={"./images/lauramueller.webp"}
              cTit3={"Laura Mueller"}
              cDesc3={"Description for Laura Mueller"}
              cImg4={"./images/f1academyontrack.avif"}
              cTit4={"F1 Academy 2"}
              cDesc4={"Description for F1 Academy 2"}
            />
          </div>
      </div>
  );
}

export default HomeCardC;
