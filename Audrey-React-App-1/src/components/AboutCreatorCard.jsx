function AboutCreatorCard({myTitle, mySubtitle, myName, myBio}){

    return (
        <div className="m-4 font-serif border-2 border-gray-500 rounded-lg p-4">
            <h1 className="text-xl font-bold m-2">{myTitle} {myName}</h1>
            <h2 className="text-lg m-2">{mySubtitle}</h2>
            <p className="m-2">{myBio}</p>
        </div>
    );
}

export default AboutCreatorCard;