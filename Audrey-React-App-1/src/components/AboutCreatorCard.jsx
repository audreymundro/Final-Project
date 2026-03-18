import { useState } from "react";

function AboutCreatorCard({myTitle, mySubtitle, myName, myBio, myGithub, addMore}){
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="m-4 font-serif border-2 border-gray-500 rounded-lg p-4">
            <h1 className="text-xl font-bold m-2">{myTitle} {myName}</h1>
            <h2 className="text-lg m-2">{mySubtitle}</h2>
            <p className="m-2">{myBio}</p>

            <button onClick={() => setShowMore(!showMore)} className="mt-4 text-small text-blue-500 hover:text-blue-700 font-semibold">
              {showMore ? "Show Less" : "Show More"}
            </button>

            {showMore && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    {myGithub && ( <p className="m-2">
                        <a href={myGithub} className="text-blue-500 hover:underline">Github Repository</a>
                        </p>
                    )}
                {addMore && (
                    <p className="m-2">More About Me: {addMore}</p>
                )}
                </div>
            )}
        </div>
    );
}

export default AboutCreatorCard;