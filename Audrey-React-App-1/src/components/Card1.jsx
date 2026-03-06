function Card1(){
    const title = "About Me";
    const bio = "Hi! My name is Audrey and I am 18 years old. I like sports, reading, and traveling. I am passionate about STEM, Formula , and soccer. I would like to work in F1 or motorsports later in my life.";
    const emoji = "🏎️";

    return (
        <div className="aboutme-card border-black-950 border-4 rounded-xl p-4ext-center 
        hover:shadow-xl hover:bg-black hover:text-white hover:border-red-500">
            <h3 className="font-serif m-4">{title}</h3>
            <p className="text-red-500 font-sans px-15 py-4">{bio}</p>
            <span className="text-6xl">{emoji}</span>
        </div>
    );
}

export default Card1;