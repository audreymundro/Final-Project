function AboutInfoCard({myTitle, myDescription,myEmail, myLinkedIn, myInstagram}){
    return(
        <div className="font-serif m-10 border-2 border-gray-500 rounded-lg p-4">
            <h3 className="text-xl font-bold m-2">{myTitle}</h3>
            <p className="text-lg m-2">{myDescription}</p>
            <p className="text-lg m-2">Email: {myEmail}</p>
            <p className="text-lg m-2">LinkedIn: {myLinkedIn}</p>
            <p className="text-lg m-2">Instagram: {myInstagram}</p>
        </div>
    )
}

export default AboutInfoCard;