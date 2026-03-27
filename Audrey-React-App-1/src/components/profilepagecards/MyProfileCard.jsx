function MyProfileCard({myName, myBio, myProfilePic, myAge, }){

    return(
        <div className="font-serif m-10 border-2 border-gray-500 rounded-lg p-4 flex text-center">
            <img src={myProfilePic} alt="Profile Picture" className="rounded-full w-35 h-35 m-2" />
            <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold m-2">{myName}</h3>
                    <h2 className="text-xl m-2">{myAge}</h2>
                    <p className="m-2 text-lg">{myBio}</p>
            </div>
        </div>
    )
}

export default MyProfileCard;