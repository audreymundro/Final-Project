import CarouselItem from "./carouselcomponent";

function CarouselC ({cImg1, cTit1, cDesc1, cImg2, cTit2, cDesc2, cImg3, cTit3, cDesc3, cImg4, cTit4, cDesc4}) {
    return (
        <div className="carousel h-full rounded-lg">
            <div id="cslide1" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={cImg1}
                    carTitle={cTit1}
                    carDescription={cDesc1}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#cslide4" className="btn btn-circle">❮</a>
                    <a href="#cslide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="cslide2" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={cImg2}
                    carTitle={cTit2}
                    carDescription={cDesc2}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#cslide1" className="btn btn-circle">❮</a>
                    <a href="#cslide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="cslide3" className="carousel-item relative w-full">
                <CarouselItem
                    carImage={cImg3}
                    carTitle={cTit3}
                    carDescription={cDesc3}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#cslide2" className="btn btn-circle">❮</a>
                    <a href="#cslide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="cslide4" className="carousel-item relative w-full flex">
                <CarouselItem
                    carImage={cImg4}
                    carTitle={cTit4}
                    carDescription={cDesc4}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#cslide3" className="btn btn-circle">❮</a>
                    <a href="#cslide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default CarouselC;