function ProgramCard({ progTitle, progSummary, progImg }) {
    return (
        <div className="border p-4 rounded-lg h-170 w-130">
            <h2 className="text-2xl font-bold mb-2 p-2">{progTitle}</h2>
            <div className="mt-2 h-100 w-full overflow-hidden border rounded-md">
                <img className="object-cover h-full w-full rounded-md" src={progImg} alt={progTitle} />
            </div>
            <p className="p-2">{progSummary}</p>
        </div>
    );
}

export default ProgramCard;
