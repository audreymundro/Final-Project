import RaceUpdateCard from "./raceupdatecard";

function F1ARacesCarousel({ }) {
    return (
            <div className="carousel rounded-box">
                <div className="carousel-item p-4">
                    {/* China 1 */}
                    <RaceUpdateCard
                        rTitle="Shanghai Race 1"
                        rDate="13 Mar - 15 Mar"
                        rPlace="Shanghai International Circuit, Shanghai"
                        rImage="./images/shanghairace.jpg"
                        pOne="George Russell"
                        pTwo="Kimi Antonelli"
                        pThree="Charles Leclerc"
                    />
                </div>
                {/* China 2 */}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Shanghai Race 2"
                        rDate="13 Mar - 15 Mar"
                        rPlace="Shanghai International Circuit, Shanghai"
                        rImage="https://via.placeholder.com/150"
                        pOne="Kimi Antonelli"
                        pTwo="George Russell"
                        pThree="Lewis Hamilton"
                    />
                </div>
                {/* Saudi Arabia 1 */}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Jeddah Race 1"
                        rDate="17 Apr - 19 Apr"
                        rPlace="Jeddah Corniche Circuit, Jeddah"
                        rImage="https://via.placeholder.com/150"
                        pOne="Kimi Antonelli"
                        pTwo="Oscar Piastri"
                        pThree="Charles Leclerc"
                    />
                </div>
                {/* Saudi 2 */}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Jeddah Race 2"
                        rDate="17 Apr - 19 Apr"
                        rPlace="Race Location"
                        rImage="./images/miamigp.avif"
                    />
                </div>
                {/*Canada 1*/}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Montreal Race 1"
                        rDate="22 May - 24 May"
                        rPlace="Circuit Gilles Villeneuve, Montreal"
                        rImage="https://via.placeholder.com/150"
                    />
                </div>
                {/* Canada 2 */}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Montreal Race 2"
                        rDate="22 May - 24 May"
                        rPlace="Race Location"
                        rImage="https://via.placeholder.com/150"
                    />
                </div>
                {/* Britain 1*/}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Silverstone Race 1"
                        rDate="Race Date"
                        rPlace="Race Location"
                        rImage="https://via.placeholder.com/150"
                        pOne="Participant One"
                        pTwo="Participant Two"
                        pThree="Participant Three"
                    />
                </div>
                {/* Britain 2 */}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Silverstone Race 2"
                        rDate="Race Date"
                        rPlace="Race Location"
                        rImage="https://via.placeholder.com/150"
                        pOne="Participant One"
                        pTwo="Participant Two"
                        pThree="Participant Three"
                    />
                </div>
                {/* Netherlands Race 1*/}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Zaandvort Race 1"
                        rDate="Race Date"
                        rPlace="Circuit Zandvoort, Zandvoort"
                        rImage="https://via.placeholder.com/150"
                        pOne="Participant One"
                        pTwo="Participant Two"
                        pThree="Participant Three"
                    />
                </div>
                {/* Netherlands Race 2*/}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Zaandvort Race 2"
                        rDate="Race Date"
                        rPlace="Circuit Zandvoort, Zandvoort"
                        rImage="https://via.placeholder.com/150"
                        pOne="Participant One"
                        pTwo="Participant Two"
                        pThree="Participant Three"
                    />
                </div>
                {/*Hungary*/}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Austin Race 1"
                        rDate="Race Date"
                        rPlace="Circuit of the Americas, Austin"
                        rImage="https://via.placeholder.com/150"
                        pOne="Participant One"
                        pTwo="Participant Two"
                        pThree="Participant Three"
                    />
                </div>
                {/* Netherlands */}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Austin Race 2"
                        rDate="26 Aug - 28 Aug"
                        rPlace="Circuit of the Americas, Austin"
                        rImage="https://via.placeholder.com/150"
                    />
                </div>
                {/* USA Race 1 */}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Las Vegas Race 1"
                        rDate="3 Sep - 5 Sep"
                        rPlace="Las Vegas"
                        rImage="https://via.placeholder.com/150"
                    />
                </div>
                {/* USA Race 2 */}
                <div className="carousel-item p-4">
                    <RaceUpdateCard
                        rTitle="Las Vegas Race 2"
                        rDate="10 Sep - 12 Sep"
                        rPlace="Las Vegas"
                        rImage="https://via.placeholder.com/150"
                    />
                </div>
            </div>
    );
}

export default F1ARacesCarousel;
