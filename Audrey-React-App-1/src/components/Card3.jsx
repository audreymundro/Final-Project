function Card3(){
    const title="My Dream Job"
    const job="Vehicle Dynamics Engineer"
    const company="Mercedes AMG Formula 1 Team"
    const description="I like solving problems and being able to do that in the sport that I love is the dream."

    return(
        <div className="dream-job-card">
            <h3 style={{fontFamily: 'Georgia'}}>{title}</h3>
            <p style={{ color: 'lightpink'}}>{job} with {company}.</p>
            <p style={{ color: 'lightpink'}}>{description}</p>
        </div>
    )
}

export default Card3;