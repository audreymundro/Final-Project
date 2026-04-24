import CarouselA from "./carouselA";

function HomeCardA({cardTitle}) {
  return (
      <div className="m-10 font-serif border-2 border-black rounded-lg p-4">
          <h1 className="font-serif py-4 text-xl">{cardTitle}</h1>
          <div className="relative h-100 w-full border-4 border-black rounded-xl">
            <CarouselA
              itemImg1={"./images/f1academy1.avif"}
              itemTit1={"F1 Academy 1"}
              itemDesc1={"Description for F1 Academy 1"}
              itemImg2={"./images/miamigp.avif"}
              itemTit2={"Miami GP"}
              itemDesc2={"Description for Miami GP"}
              itemImg3={"./images/lauramueller.webp"}
              itemTit3={"Laura Mueller"}
              itemDesc3={"Description for Laura Mueller"}
              itemImg4={"./images/f1academy2.avif"}
              itemTit4={"F1 Academy 2"}
              itemDesc4={"Description for F1 Academy 2"}
            />
          </div>
      </div>
  );
}

export default HomeCardA;
