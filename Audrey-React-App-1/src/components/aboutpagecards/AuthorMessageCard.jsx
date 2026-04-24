function AuthorMessageCard({ authTitle, mySubtitle, addMore }) {
    return (
        <div className="m-10 font-serif border-2 border-gray-500 rounded-lg p-4">
            <h1 className="text-xl font-bold m-2">{authTitle}</h1>
            <h2 className="text-lg m-2"> {mySubtitle} {addMore}</h2>
        </div>
    );
}

export default AuthorMessageCard;
