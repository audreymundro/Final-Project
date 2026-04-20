import ArticleCard from "../components/artandprogcards/articlecomponent";

function Articles() {
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold font-serif text-center p-8">Articles</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <ArticleCard artTitle="Doriane Pin: First Woman to Drive an F1 Car" artSummary="Description for Article 1" artImg="./images/doriane-pin-mercedes-f1.webp" />
                <ArticleCard artTitle="Hannah Schmitz: The Strategist Behind the Scenes" artSummary="Description for Article 2" artImg="./images/hannahschmitz.png" />
                <ArticleCard artTitle="Laura Mueller: Breaking Barriers in Motorsport" artSummary="Description for Article 3" artImg="./images/lauramueller.webp" />
            </div>
        </div>
    );
}

export default Articles;