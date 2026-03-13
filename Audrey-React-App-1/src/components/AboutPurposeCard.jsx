function AboutPurposeCard({myTitle, myReason, myStory}){

    return(
        <div className="font-serif m-4 border-2 border-gray-500 rounded-lg p-4">
            <h3 className="text-xl font-bold m-2">{myTitle}</h3>
            <p className="m-2">{myReason}</p>
            <p className="m-2">{myStory}</p>
        </div>
    )

}

export default AboutPurposeCard;