function RaceUpdateCard({ rTitle, rDate, rPlace, rImage, pOne, pTwo, pThree }) {
    return (
        <div className="border-2 border-gray-500 flex rounded-lg p-4 w-120">
            <img className="w-32 h-32 object-cover rounded-lg" src={rImage} alt={rTitle} />
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold m-2">{rTitle}</h2>
                <p className="text-lg">{rDate}</p>
                <p className="text-lg">{rPlace}</p>
                <h3 className="text-lg font-semibold mt-2">Results:</h3>
                <ol>
                    <li>1. {pOne}</li>
                    <li>2. {pTwo}</li>
                    <li>3. {pThree}</li>
                </ol>
            </div>
        </div>
    );
}

export default RaceUpdateCard;
