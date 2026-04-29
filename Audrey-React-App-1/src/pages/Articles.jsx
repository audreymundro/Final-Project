import ArticleCard from "../components/artandprogcards/articlecomponent";

function Articles() {
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold font-serif text-center p-8">Articles</h1>
            <div className="flex flex-wrap justify-center gap-10">
                <ArticleCard 
                    artTitle="Doriane Pin: First Woman to Drive an F1 Car" 
                    artSummary="Doriane Pin has made history by becoming the first F1 ACADEMY Champion to complete a Formula 1 test, three years since Jessica Hawkins tested an Aston Martin." 
                    artImg="./images/dorianef1test.webp" 
                    artLink="https://www.f1academy.com/Latest/6f7vYgTlYuVaZGSRWMgnMX/pin-completes-landmark-maiden-formula-1-test-with-mercedes" 
                />
                <ArticleCard 
                    artTitle="Hannah Schmitz: The Strategist Behind the Scenes" 
                    artSummary="Hannah Schmitz has been a key figure in the world of Formula 1, known for her strategic thinking and innovative approaches, winning Max Verstappen the 2025 Qatar GP." 
                    artImg="./images/hannahschmitz.png" 
                    artLink="https://www.motorsport.com/f1/news/are-you-sure-you-want-to-pit-how-red-bull-nearly-fell-into-the-same-trap-as-mclaren/10781371/"
                />
                <ArticleCard 
                    artTitle="Laura Mueller: Breaking Barriers in Motorsport" 
                    artSummary="Laura Mueller is the first female race engineer in Formula 1, paving the way for future generations. She works with TGR Haas F1 Driver Esteban Ocon." 
                    artImg="./images/lauramueller.webp" 
                    artLink="https://www.formula1.com/en/latest/article/laura-mueller-becomes-f1s-first-female-race-engineer-as-haas-confirm-key.3gFdz46OphteLHNKnGAIM6"
                />
                <ArticleCard 
                    artTitle="Article 4" 
                    artSummary="Description for Article 4" 
                    artImg="./images/f1garageferrari.jpg" 
                />
                <ArticleCard 
                    artTitle="Article 5" 
                    artSummary="Description for Article 5" 
                    artImg="./images/f1garageferrari.jpg" 
                />
                <ArticleCard 
                    artTitle="Article 6" 
                    artSummary="Description for Article 6" 
                    artImg="./images/f1garageferrari.jpg" 
                />
                <ArticleCard 
                    artTitle="Article 7" 
                    artSummary="Description for Article 7" 
                    artImg="./images/f1garageferrari.jpg" 
                />
                <ArticleCard 
                    artTitle="Article 8" 
                    artSummary="Description for Article 8" 
                    artImg="./images/f1garageferrari.jpg" 
                />
            </div>
        </div>
    );
}

export default Articles;