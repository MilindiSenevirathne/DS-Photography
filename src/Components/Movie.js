function Movie({image}) {
    return(
        <div>
            <h2>{image.title}</h2>
            <img src={image.src} alt=""></img>
        </div>
    )
}

export default Movie;