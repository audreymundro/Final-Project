function ProfileExtraCard({otherName, otherAge, otherBio, otherProfilePic}) {
  return (
    <div className="border-2 border-gray-500 flex rounded-lg p-4 w-120">
        <img src={otherProfilePic} alt="Profile Picture" className="object-cover rounded-full w-30 h-30" />
                <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold m-2">{otherName}</h3>
                    <h2 className="text-lg m-2">{otherAge}</h2>
                    <p className="m-2 text-md">{otherBio}</p>
                </div>
            </div>
  );
}

export default ProfileExtraCard;