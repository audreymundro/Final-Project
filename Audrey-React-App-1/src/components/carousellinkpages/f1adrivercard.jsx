function F1ADriverCard({ driverName, driverImage, driverYear }) {
    return (
        <div className="border-2 border-gray-500 flex rounded-lg p-2 w-170 h-65">
            <img className="w-40 h-40 object-cover rounded-lg p-4" src={driverImage} alt={driverName} />
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold">{driverName}</h2>
                <p className="text-lg">Year: {driverYear}</p>
            </div>
        </div>
    );
}

export default F1ADriverCard;
