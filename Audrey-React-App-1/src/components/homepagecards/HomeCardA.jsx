import CarouselA from "./carouselA";

function HomeCardA({cardTitle}) {
  return (
      <div className="m-10 font-serif border-2 border-black rounded-lg p-4">
          <h1 className="font-serif py-4 text-xl">{cardTitle}</h1>
          <div className="relative h-150 w-full overflow-hidden border-4 border-black rounded-xl">
            <CarouselA
              myImg1={"./images/f1academy1.avif"}
              myImg2={"./images/alishapalmoski.jpeg"}
              myImg3={"./images/lauramueller.webp"}
              myImg4={"./images/f1academy2.avif"}
            />
          </div>
      </div>
  );
}

export default HomeCardA;
