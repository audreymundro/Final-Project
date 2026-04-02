import ProfileSuggestionCarousel from "./profilesuggestioncarousel";

function ProfileSuggestionCard({suggestionTitle}){

    return(
        <div className="font-serif m-10 border-2 border-gray-500 rounded-lg p-4 flex text-center">
            <h2 className="text-xl font-bold">{suggestionTitle}</h2>
            <ProfileSuggestionCarousel />
        </div>
    )
}

export default ProfileSuggestionCard;