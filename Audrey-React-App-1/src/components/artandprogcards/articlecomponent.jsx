import Comment from "../Comment";

function ArticleCard({ artTitle, artSummary, artImg, artLink }) {
    return (
        <div className="border p-4 rounded-lg h-full w-130">
            <h2 className="text-2xl font-bold mb-2 p-3">{artTitle}</h2>
            <div className="mt-2 h-100 w-full overflow-hidden border rounded-md">
                <img className="object-cover h-full w-full rounded-md" src={artImg} alt={artTitle} />
            </div>
            <p className="text-md p-3">{artSummary}</p>
            <a href={artLink} className="p-3 text-blue-500 hover:underline">Read More</a>
            <div className="p-3">
                <Comment />
            </div>
        </div>
    );
}

export default ArticleCard;
