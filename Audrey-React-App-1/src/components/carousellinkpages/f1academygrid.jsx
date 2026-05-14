import F1ADriverCard from "./f1adrivercard";

function F1AGrid() {
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold font-serif text-center p-8">2026 F1 Academy Grid</h1>
            <div className="flex flex-wrap justify-center gap-20">
                <F1ADriverCard driverName="Payton Westcott" driverImage="./images/f1adrivers/paytonwestcott.webp" driverYear="1" />
                <F1ADriverCard driverName="Nina Gademan" driverImage="./images/f1adrivers/ninagademan.avif" driverYear="2" />
                <F1ADriverCard driverName="Emma Felbermayr" driverImage="./images/f1adrivers/emmafelbermayr.jpg" driverYear="2" />
                <F1ADriverCard driverName="Mathilda Paatz" driverImage="./images/f1adrivers/mathildapaatz.jpg" driverYear="1" />
                <F1ADriverCard driverName="Lisa Billard" driverImage="./images/f1adrivers/lisabillard.jpg" driverYear="2" />
            </div>
        </div>
    );
}

export default F1AGrid;
