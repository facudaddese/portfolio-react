const Logos = ({logoCv}) => {
    return (
        <>
            <a href="https://www.linkedin.com/in/facundodaddese/" target="_blank"
                className="contacto__link"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                    className="linkedin" /></a>
            <a href="https://github.com/facudaddese?tab=repositories" target="_blank"
                className="contacto__link">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                    className="github" />
            </a>
            <a href="/docs/CV_FacundoDaddese.pdf" target="_blank" rel="noopener noreferrer" className="contacto__link">
                <img src={logoCv} alt="Logo Cv" className='cv' />
            </a>
        </>
    )
}

export default Logos