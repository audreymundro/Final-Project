import CarouselB from "./carouselB";

function HomeCardB({cardTitle}) {
  return (
      <div className="m-10 font-serif border-2 border-black rounded-lg p-4">
          <h1 className="font-serif py-4 text-xl">{cardTitle}</h1>
          <div className="relative h-150 w-full overflow-hidden border-4 border-black rounded-xl">
              <CarouselB
                myPic1={"./images/f1photo1.avif"}
                myPic2={"./images/f1photo2.jpg"}
                myPic3={"./images/f1photo3.jpg"}
                myPic4={"./images/oscarpiastri.avif"}
              />
          </div>
      </div>
  );
}

export default HomeCardB;