import ProfileSuggestionCarousel from "./profilesuggestioncarousel";

function ProfileSuggestionCard({suggestionTitle}){
    return(
        <div className="font-serif m-10 border-2 border-gray-500 rounded-lg p-4">
            <h2 className="text-2xl font-bold m-2">{suggestionTitle}</h2>
            <div className="flex">
            <ProfileSuggestionCarousel />
            </div>
        </div>
    )
}

export default ProfileSuggestionCard;