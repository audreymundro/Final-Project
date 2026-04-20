function ArticleCard({ artTitle, artSummary, artImg }) {
    return (
        <div className="border p-4 rounded-lg shadow-md h-200 w-200">
            <h2 className="text-2xl font-bold mb-2 p-2">{artTitle}</h2>
            <div className="mt-2 h-100 w-full overflow-hidden border rounded-md">
                <img src={artImg} alt={artTitle} className="h-full w-auto rounded-md" />
            </div>
            <p className="p-2">{artSummary}</p>
        </div>
    );
}

export default ArticleCard;
