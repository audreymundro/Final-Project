import CarouselItem from "./carouselcomponent";

function CarouselB ({bPic1, bTitle1, bBio1, bLink1, bPic2, bTitle2, bBio2, bLink2, bPic3, bTitle3, bBio3, bLink3, bPic4, bTitle4, bBio4, bLink4}) {
    return (
        <div className="carousel h-full rounded-lg">
            <div id="bslide1" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={bPic1}
                    carTitle={bTitle1}
                    carDescription={bBio1}
                    itemLink={bLink1}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#bslide4" className="btn btn-circle">❮</a>
                    <a href="#bslide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="bslide2" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={bPic2}
                    carTitle={bTitle2}
                    carDescription={bBio2}
                    itemLink={bLink2}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#bslide1" className="btn btn-circle">❮</a>
                    <a href="#bslide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="bslide3" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={bPic3}
                    carTitle={bTitle3}
                    carDescription={bBio3}
                    itemLink={bLink3}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#bslide2" className="btn btn-circle">❮</a>
                    <a href="#bslide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="bslide4" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={bPic4}
                    carTitle={bTitle4}
                    carDescription={bBio4}
                    itemLink={bLink4}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#bslide3" className="btn btn-circle">❮</a>
                    <a href="#bslide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default CarouselB;