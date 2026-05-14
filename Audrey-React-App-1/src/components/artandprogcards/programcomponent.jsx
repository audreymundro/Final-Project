import Comment from "../Comment";

function ProgramCard({ progTitle, progSummary, progImg, progLink }) {
    return (
        <div className="border p-4 rounded-lg h-full w-130">
            <h2 className="text-2xl font-bold mb-2 p-3">{progTitle}</h2>
            <div className="mt-2 h-100 w-full overflow-hidden border rounded-md">
                <img className="object-cover h-full w-full rounded-md" src={progImg} alt={progTitle} />
            </div>
            <p className="p-3">{progSummary}</p>
            <a href={progLink} className="p-3 text-blue-500 hover:underline">Read More</a>
            <div className="p-3">
                <Comment />
            </div>
        </div>
    );
}

export default ProgramCard;
