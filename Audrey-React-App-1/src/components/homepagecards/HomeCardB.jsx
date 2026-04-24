import CarouselB from "./carouselB";

function HomeCardB({cardTitle}) {
  return (
      <div className="m-10 font-serif border-2 border-black rounded-lg p-4">
          <h1 className="font-serif py-4 text-xl">{cardTitle}</h1>
          <div className="relative h-100 w-full border-4 border-black rounded-xl">
              <CarouselB
                itemPic1={"./images/f1photo1.avif"}
                itemTitle1={"F1 News"}
                itemBio1={"Bio for F1 News"}
                itemPic2={"./images/f1photo2.jpg"}
                itemTitle2={"F1 Grid"}
                itemBio2={"Bio for F1 Grid"}
                itemPic3={"./images/f1photo3.jpg"}
                itemTitle3={"Cadillac in the New Regulations"}
                itemBio3={"Bio for Cadillac in the New Regulations"}
                itemPic4={"./images/oscarpiastri.avif"}
                itemTitle4={"Oscar Piastri"}
                itemBio4={"Bio for Oscar Piastri"}
              />
          </div>
      </div>
  );
}

export default HomeCardB;