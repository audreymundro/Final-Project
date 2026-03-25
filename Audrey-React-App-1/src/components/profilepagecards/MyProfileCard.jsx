function MyProfileCard({myName, myBio, myProfilePic}){

    return(
        <div className="font-serif m-4 border-2 border-gray-500 rounded-lg p-4 flex text-center">
            <img src={myProfilePic} alt="Profile Picture" className="rounded-full w-24 h-24 m-2 size-100" />
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold m-2">{myName}</h3>
                <p className="m-2 text-lg">{myBio}</p>
            </div>
        </div>
    )
}

export default MyProfileCard;