function ProfileSuggestionCard({otherProfilePic, otherName, otherAge, otherBio}){

    return(
        <div className="font-serif m-10 border-2 border-gray-500 rounded-lg p-4 flex text-center">
            <div className="border-2 border-gray-500 rounded-lg p-4 w-1/4">
                <div className="flex flex-col justify-center">
                    <div className="image-container">
                        <img src={otherProfilePic} alt="Profile Picture" className="rounded-full w-30 h-30" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                    </div>
                    <h3 className="text-xl font-bold m-2">{otherName}</h3>
                    <h2 className="text-lg m-2">{otherAge}</h2>
                    <p className="m-2 text-md">{otherBio}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileSuggestionCard;