function ProfileMoreCard({myEducation, mySkills, myExperience}){

    return(
        <div className="font-serif m-4 border-2 border-gray-500 rounded-lg p-4 flex text-center">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-end-4">
                    <h3 className="text-2xl font-bold">Education</h3>
                    <p className="m-2 text-lg">{myEducation}</p>
                </div>
                <div className="col-start-4 col-end-6">
                    <h3 className="text-2xl font-bold">Experience</h3>
                    <p className="m-2 text-lg">{myExperience}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileMoreCard;