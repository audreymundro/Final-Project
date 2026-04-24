import { useState } from "react";

function AboutCreatorCard({myTitle, myName, myBio, myGithub, myImg}){
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="m-10 font-serif border-2 border-gray-500 rounded-lg p-4 flex">
            <img className="w-32 h-32 rounded-full" src={myImg} alt="Creator Picture" />
            <div className="flex flex-col justify-center">
                <h1 className="text-xl font-bold m-2">{myTitle}</h1>
                <h2 className="text-lg m-2">{myName} {myBio}</h2>
                <p><a href={myGithub} className="text-lg m-2 text-blue-500 hover:underline">Github Repository</a></p>
            </div>

            {/*<button onClick={() => setShowMore(!showMore)} className="mt-4 text-small text-blue-500 hover:text-blue-700 font-semibold">
              {showMore ? "Show Less" : "Show More"}
            </button>

            {showMore && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    {myGithub && ( <p className="m-2">
                        <a href={myGithub} className="text-blue-500 hover:underline">Github Repository</a>
                        </p>
                    )}
                {addMore && (
                    <p className="m-2">Message from the Author: {mySubtitle} {addMore}</p>
                )}
                </div>
            )}*/}
        </div>
    );
}

export default AboutCreatorCard;