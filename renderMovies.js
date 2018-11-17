function renderMovie(movies) {
    return `
    <div class="text-center mt-5" style = "display: flex; justify-content: space-around; border-radius: 15px; background: #e6e6e6; width: 725px; height: 460px; padding: 20px;">
        <img src= '${movies.poster}'>
        <span style = "background-color: #fff; border-radius: 15px; text-align: left; padding: 10px;">
            <h2 style = "font-weight: bold;">${movies.title}</h2>
            <p style = "font-weight: bold;">${movies.year}</p>
            <h2>IMDB:</h2>
            <h2>${movies.imdbRating}/10</h2>
            <h2>Rotten Tomatoes:</h2>
            <h2>${movies.rottenTomatoesRating*100}%</h2>
        </span>
    </div>
`
}

function renderMovies(movies) {
    return movies.map(renderMovie).join('')
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}