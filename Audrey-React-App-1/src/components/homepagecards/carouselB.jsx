function CarouselB ({myPic1, myPic2, myPic3, myPic4}) {
    return (
        <div className="carousel h-full rounded-xl">
            <div id="c2-slide1" className="carousel-item relative w-full">
                <img
                src={myPic1}
                className="h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#c2-slide4" className="btn btn-circle">❮</a>
                    <a href="#c2-slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="c2-slide2" className="carousel-item relative w-full">
                <img
                src={myPic2}
                className="h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#c2-slide1" className="btn btn-circle">❮</a>
                    <a href="#c2-slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="c2-slide3" className="carousel-item relative w-full">
                <img
                src={myPic3}
                className="h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#c2-slide2" className="btn btn-circle">❮</a>
                    <a href="#c2-slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="c2-slide4" className="carousel-item relative w-full">
                <img
                src={myPic4}
                className="h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#c2-slide3" className="btn btn-circle">❮</a>
                    <a href="#c2-slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default CarouselB;