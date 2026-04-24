import CarouselItem from "./carouselcomponent";

function CarouselA ({itemImg1, itemTit1, itemDesc1, itemImg2, itemTit2, itemDesc2, itemImg3, itemTit3, itemDesc3, itemImg4, itemTit4, itemDesc4}) {
    return (
        <div className="carousel h-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={itemImg1}
                    carTitle={itemTit1}
                    carDescription={itemDesc1}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={itemImg2}
                    carTitle={itemTit2}
                    carDescription={itemDesc2}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={itemImg3}
                    carTitle={itemTit3}
                    carDescription={itemDesc3}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full flex">
                <CarouselItem
                    carImage={itemImg4}
                    carTitle={itemTit4}
                    carDescription={itemDesc4}
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