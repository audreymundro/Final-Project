import { useState } from "react";

function Comment({ userName, userComment }) {
    const [description, setDescription] = useState("");
    const [locations, setLocations] = useState([]);

    function handleSubmit (event) {
        event.preventDefault();
        // Handle form submission logic here
        const newLocation = { id: Date.now(), description };
        setLocations([...locations, newLocation]);
        setDescription("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Let us know what you thought!"
                />
                <button className="bg-gray-900 text-white rounded-lg p-2" type="submit">Add Comment</button>
            </form>

                {locations.map((location) => (
                    <div key={location.id}>
                        {location.description}
                    </div>
                ))}
            
        </div>
    );
}

export default Comment;
