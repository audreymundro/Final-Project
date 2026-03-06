function Card2(){
    const title="My Interests"
    const sport="My favorite sport watching and learning about Formula 1."
    const hobby="My favorite hobby is playing soccer."

    return(
        <div className="interests-card">
            <h3 style={{fontFamily: 'Georgia'}}>{title}</h3>
            <p style={{ color: 'lightblue', fontFamily: 'Arial, sans-serif' }}>{sport}</p>
            <p style={{ color: 'lightblue', fontFamily: 'Arial, sans-serif' }}>{hobby}</p>
        </div>
    )

}

export default Card2;