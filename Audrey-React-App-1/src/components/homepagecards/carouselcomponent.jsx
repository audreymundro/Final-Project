function CarouselItem({ carImage, carTitle, carDescription, itemLink }) {
    return (
        <div className="flex w-full h-full">
            <img className="object-cover h-full w-150 overflow-hidden" src={carImage} alt={carTitle} />
            <div className="flex flex-col justify-center w-7/12">
                <h2 className="text-2xl font-bold px-4">{carTitle}</h2>
                <p className="text-xl p-4">{carDescription}</p>
                <p><a href={itemLink} className="p-4 text-lg text-blue-500 underline">Read More</a></p>
            </div>
        </div>
    );
}

export default CarouselItem;