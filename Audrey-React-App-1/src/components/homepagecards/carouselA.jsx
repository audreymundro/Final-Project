import CarouselItem from "./carouselcomponent";

function CarouselA ({aImg1, aTit1, aDesc1, aImg2, aTit2, aDesc2, aImg3, aTit3, aDesc3, aImg4, aTit4, aDesc4}) {
    return (
        <div className="carousel h-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={aImg1}
                    carTitle={aTit1}
                    carDescription={aDesc1}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={aImg2}
                    carTitle={aTit2}
                    carDescription={aDesc2}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={aImg3}
                    carTitle={aTit3}
                    carDescription={aDesc3}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full flex">
                <CarouselItem
                    carImage={aImg4}
                    carTitle={aTit4}
                    carDescription={aDesc4}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default CarouselA;