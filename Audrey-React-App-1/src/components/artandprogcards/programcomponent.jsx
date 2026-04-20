function ProgramCard({ progTitle, progSummary, progImg }) {
    return (
        <div className="border p-4 rounded-lg shadow-md h-200 w-200">
            <h2 className="text-2xl font-bold mb-2 p-2">{progTitle}</h2>
            <div className="mt-2 h-100 w-full overflow-hidden border rounded-md">
                <img src={progImg} alt={progTitle} className="h-full w-auto rounded-md" />
            </div>
            <p className="p-2">{progSummary}</p>
        </div>
    );
}

export default ProgramCard;
