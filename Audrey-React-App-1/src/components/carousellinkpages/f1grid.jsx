import F1DriverCard from "./f1drivercard";

function F1Grid() {
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold font-serif text-center p-8">2026 F1 Grid</h1>
            <div className="flex flex-wrap justify-center gap-20">
                <F1DriverCard driverName="George Russell" driverImage="./images/payton_wescott.jpg" driverTeam="Mercedes" />
                <F1DriverCard driverName="Max Verstappen" driverImage="./images/nina_gademan.jpg" driverTeam="Red Bull Racing" />
                <F1DriverCard driverName="Charles Leclerc" driverImage="./images/emma_felbermayr.jpg" driverTeam="Ferrari"/>
                <F1DriverCard driverName="Oscar Piastri" driverImage="./images/oscarpiastri2.png" driverTeam="McLaren" />
                <F1DriverCard driverName="Alex Albon" driverImage="./images/lisa_billard.jpg" driverTeam="Williams" />
            </div>
        </div>
    );
}

export default F1Grid;