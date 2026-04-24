function CarouselItem({ carImage, carTitle, carDescription }) {
    return (
        <div className="flex">
            <img className="object-cover h-full w-150 overflow-hidden" src={carImage} alt={carTitle} />
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold m-2">{carTitle}</h2>
                <p className="text-lg m-2">{carDescription}</p>
            </div>
        </div>
    );
}

export default CarouselItem;