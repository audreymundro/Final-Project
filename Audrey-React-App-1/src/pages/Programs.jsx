import ProgramCard from "../components/artandprogcards/programcomponent";

function Programs() {
    return (
        <div>
            <h1 className="text-4xl font-bold font-serif text-center p-8">Programs</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <ProgramCard progTitle="F1 Academy" progSummary="Description for Program 1" progImg="./images/f1academy1.avif" />
                <ProgramCard progTitle="Women in Motorsport" progSummary="Description for Program 2" progImg="./images/f1academy2.avif" />
                <ProgramCard progTitle="Rising Stars" progSummary="Description for Program 3" progImg="./images/f1photo1.avif" />
            </div>
        </div>
    );
}

export default Programs;