import CarouselItem from "./carouselcomponent";

function CarouselB ({itemPic1, itemTitle1, itemBio1, itemPic2, itemTitle2, itemBio2, itemPic3, itemTitle3, itemBio3, itemPic4, itemTitle4, itemBio4}) {
    return (
        <div className="carousel h-full rounded-lg">
            <div id="c2-slide1" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={itemPic1}
                    carTitle={itemTitle1}
                    carDescription={itemBio1}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#c2-slide4" className="btn btn-circle">❮</a>
                    <a href="#c2-slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="c2-slide2" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={itemPic2}
                    carTitle={itemTitle2}
                    carDescription={itemBio2}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#c2-slide1" className="btn btn-circle">❮</a>
                    <a href="#c2-slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="c2-slide3" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={itemPic3}
                    carTitle={itemTitle3}
                    carDescription={itemBio3}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#c2-slide2" className="btn btn-circle">❮</a>
                    <a href="#c2-slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="c2-slide4" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={itemPic4}
                    carTitle={itemTitle4}
                    carDescription={itemBio4}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#c2-slide3" className="btn btn-circle">❮</a>
                    <a href="#c2-slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default CarouselB;