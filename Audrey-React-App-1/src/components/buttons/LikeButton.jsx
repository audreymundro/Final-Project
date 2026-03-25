import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(false);

    const handleLike = () => {
        setLikes(!likes);
    };

    return (
        <button onClick={() => setLikes(likes + 1)}
        className="flex items-center gap-2 bg-gray-200 hover:bg-red-200 px-4 py-2 rounded-full transition-all duration-200">
            <span className="text-xl">❤️</span>
            <span className="font-bold text-gray-700">{likes}</span>
        </button>
    );
}

export default LikeButton;
