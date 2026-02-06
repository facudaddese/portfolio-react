const Proyecto = ({ img, alt, title, descripcion, skill1, skill2, skill3, skill4, url, repo }) => {
    return (
        <div data-aos="fade-down">
            <div className="grid-container__div">
                <img src={img} alt={alt} />
                <div className="grid-container__info">
                    <h3 className="title-proyecto">{title}</h3>
                    <p className="grid-container__p">{descripcion}</p>
                    {
                        skill4 === "BOOTSTRAP" ?
                            <div className="span">
                                <span>{skill1}</span>
                                <span>{skill2}</span>
                                <span>{skill3}</span>
                                <span>{skill4}</span>
                                <a href={url} target="_blank"
                                    rel="noopener noreferrer">
                                    <span>{repo}</span>
                                </a>
                            </div> :
                            skill1 === "HTML" ?
                                <div className="span">
                                    <span>{skill1}</span>
                                    <span>{skill2}</span>
                                    <span>{skill3}</span>
                                    <a href={url} target="_blank"
                                        rel="noopener noreferrer">
                                        <span>{repo}</span>
                                    </a>
                                </div> :
                                <div className="span">
                                    <span>{skill1}</span>
                                    <a href={url} target="_blank"
                                        rel="noopener noreferrer">
                                        <span>{repo}</span>
                                    </a>
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Proyecto