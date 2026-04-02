function ProfileMoreCard({myEducation, mySkills, myExperience}){

    return(
        <div className="font-serif m-10 border-2 border-gray-500 rounded-lg p-4 flex text-center">
            <div className="grid grid-cols-3 gap-10 p-4">
                <div className="border-black border-2 rounded-lg p-4 w-125">
                    <h3 className="text-2xl font-bold">Education</h3>
                    <p className="m-2 text-lg">{myEducation}</p>
                </div>
                <div className="border-black border-2 rounded-lg p-4 w-125">
                    <h3 className="text-2xl font-bold">Experience</h3>
                    <p className="m-2 text-lg">{myExperience}</p>
                </div>
                <div className="border-black border-2 rounded-lg p-4 w-125">
                    <h3 className="text-2xl font-bold">Skills</h3>
                    <p className="m-2 text-lg">{mySkills}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileMoreCard;