function Card1({myTitle, mySubtitle, myName, myTitleTwo, myBio, myEmoji}){

    return (
        <div className="m-4">
            <h1 className="font-serif text-xl font-bold m-2">{myTitle}</h1>
            <h2 className="font-sans text-lg m-2">{mySubtitle}</h2>
            <h3 className="font-sans text-md m-2">{myName}</h3>
            <h3 className="font-sans text-md font-bold m-2">{myTitleTwo}</h3>
            <p className="text-red-500 font-sans m-2">{myBio}</p>
            <span className="text-6xl m-2">{myEmoji}</span>
        </div>
    );
}

export default Card1;