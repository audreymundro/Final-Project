import ArticleCard from "../components/artandprogcards/articlecomponent";

function Articles() {
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold font-serif text-center p-8">Articles</h1>
            <div className="flex flex-wrap justify-center gap-10">
                <ArticleCard artTitle="Doriane Pin: First Woman to Drive an F1 Car" artSummary="Description for Article 1" artImg="./images/doriane-pin-mercedes-f1.webp" />
                <ArticleCard artTitle="Hannah Schmitz: The Strategist Behind the Scenes" artSummary="Description for Article 2" artImg="./images/hannahschmitz.png" />
                <ArticleCard artTitle="Laura Mueller: Breaking Barriers in Motorsport" artSummary="Description for Article 3" artImg="./images/lauramueller.webp" />
                <ArticleCard artTitle="Article 4" artSummary="Description for Article 4" artImg="./images/f1garage.jpg" />
                <ArticleCard artTitle="Article 5" artSummary="Description for Article 5" artImg="./images/f1garage.jpg" />
                <ArticleCard artTitle="Article 6" artSummary="Description for Article 6" artImg="./images/f1garage.jpg" />
                <ArticleCard artTitle="Article 7" artSummary="Description for Article 7" artImg="./images/f1garage.jpg" />
                <ArticleCard artTitle="Article 8" artSummary="Description for Article 8" artImg="./images/f1garage.jpg" />
            </div>
        </div>
    );
}

export default Articles;