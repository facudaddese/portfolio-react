const Skills = () => {
    const skills = [
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    ];
    
    return (
        <>
            <h2>Skills</h2>
            <div className="carrousel-container">
                <div className="carrousel">
                    {[...skills, ...skills].map((skill, index) => (
                        <div key={index} className="skill-item">
                            <img src={skill.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills