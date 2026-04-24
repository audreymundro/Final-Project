import ProgramCard from "../components/artandprogcards/programcomponent";

function Programs() {
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold font-serif text-center p-8">Programs</h1>
            <div className="flex flex-wrap justify-center gap-10">
                <ProgramCard progTitle="F1 Academy" progSummary="Description for Program 1" progImg="./images/f1academygrid.avif" />
                <ProgramCard progTitle="Women in Motorsport" progSummary="Description for Program 2" progImg="./images/f1academyontrack.avif" />
                <ProgramCard progTitle="Rising Stars" progSummary="Description for Program 3" progImg="./images/f1photo1.avif" />
                <ProgramCard progTitle="Program 4" progSummary="Description for Program 4" progImg="./images/f1garageferrari.jpg" />
                <ProgramCard progTitle="Program 5" progSummary="Description for Program 5" progImg="./images/f1garageferrari.jpg" />
                <ProgramCard progTitle="Program 6" progSummary="Description for Program 6" progImg="./images/f1garageferrari.jpg" />
                <ProgramCard progTitle="Program 7" progSummary="Description for Program 7" progImg="./images/f1garageferrari.jpg" />
                <ProgramCard progTitle="Program 8" progSummary="Description for Program 8" progImg="./images/f1garageferrari.jpg" />
                
            </div>
        </div>
    );
}

export default Programs;