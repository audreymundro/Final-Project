import CarouselA from "./carouselA";

function HomeCardA({cardTitle}) {
  return (
      <div className="m-10 font-serif border-2 border-black rounded-lg p-4">
          <h1 className="font-serif py-4 text-xl">{cardTitle}</h1>
          <div className="relative h-100 w-full border-4 border-black rounded-xl">
            <CarouselA
              aImg1={"./images/f1academygrid.avif"}
              aTit1={"F1 Academy 1"}
              aDesc1={"Description for F1 Academy 1"}
              aImg2={"./images/miamigp.avif"}
              aTit2={"Miami GP"}
              aDesc2={"Description for Miami GP"}
              aImg3={"./images/lauramueller.webp"}
              aTit3={"Laura Mueller"}
              aDesc3={"Description for Laura Mueller"}
              aImg4={"./images/f1academyontrack.avif"}
              aTit4={"F1 Academy 2"}
              aDesc4={"Description for F1 Academy 2"}
            />
          </div>
      </div>
  );
}

export default HomeCardA;
