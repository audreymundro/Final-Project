import CarouselB from "./carouselB";

function HomeCardB({cardTitle}) {
  return (
      <div className="m-10 font-serif border-2 border-black rounded-lg p-4">
          <h1 className="font-serif py-4 text-xl">{cardTitle}</h1>
          <div className="relative h-100 w-full border-4 border-black rounded-xl">
              <CarouselB
                bPic1={"./images/f1photo1.avif"}
                bTitle1={"F1 News"}
                bBio1={"Bio for F1 News"}
                bPic2={"./images/f1grid.jpg"}
                bTitle2={"F1 Grid"}
                bBio2={"Bio for F1 Grid"}
                bPic3={"./images/f1cadillac2026.jpg"}
                bTitle3={"Cadillac in the New Regulations"}
                bBio3={"Bio for Cadillac in the New Regulations"}
                bPic4={"./images/oscarpiastri.avif"}
                bTitle4={"Oscar Piastri"}
                bBio4={"Bio for Oscar Piastri"}
              />
          </div>
      </div>
  );
}

export default HomeCardB;