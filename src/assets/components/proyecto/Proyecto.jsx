const Proyecto = ({ img, alt, title, descripcion, skill1, skill2, skill3, page, repo }) => {
    return (
        <div className="grid-container__div">
            <img src={img} alt={alt} />
            <div className="grid-container__info">
                <h3 className="title-proyecto">{title}</h3>
                <p className="grid-container__p">{descripcion}</p>
                {
                    skill1 === "HTML" ?
                        <div className="span">
                            <span>{skill1}</span>
                            <span>{skill2}</span>
                            <span>{skill3}</span>
                            <a href={page} target="_blank" rel="noopener noreferrer" className="sitio-web">
                                <span>SITIO WEB</span>
                            </a>
                            <a href={repo} target="_blank"
                                rel="noopener noreferrer" className="repo">
                                <span>REPO</span>
                            </a>
                        </div> :
                        <div className="span">
                            <span>{skill1}</span>
                            {
                                skill2 && <span>{skill2}</span>
                            }
                            <a href={page} target="_blank" rel="noopener noreferrer">
                                <span>SITIO WEB</span>
                            </a>
                            <a href={repo} target="_blank"
                                rel="noopener noreferrer">
                                <span>REPO</span>
                            </a>
                        </div>
                }
            </div>
        </div>
    )
}

export default Proyecto