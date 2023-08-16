const ironMan = "tt1300854";
//Function to set movies by genre on the website
const setMovieGenres = async () => {
    const movieGenresList =  document.getElementById("movieGenresList");
    const data = await getMoviesGenres(); 
    data.genres.forEach(element => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `genre name: ${element.name}, id: ${element.id}`
        );
        li.appendChild(liContent);
        movieGenresList.append(li);
    }); 
}
//Function to set the top 10 rated movies on the website
const setTopRatedMovies = async () => {
    const topRatedMovieList = document.getElementById("topRated");
    const data = await getTopRatedMovies();
    const movies = data.results.splice(0, 10);
    movies.forEach((element)=> {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${element.title}, rating: ${element.vote_average}`
        )
    li.appendChild(liContent);
    topRatedMovieList.append(li);
    })

}
//Function to set my top movie on the site
const setMyTopMovie = async () => {
    const data = await getMovieById(ironMan);
    const movie = data.movie_results[0];
    const myTopMovieList = document.getElementById("myTopMovie");
    myTopMovieList.appendChild(document.createTextNode(movie.title));
}

//Function to list movies by year on the website
const setMoviesByYear = async year => {
    const yearList = document.getElementById("topRatedFromYear");
    yearList.innerHTML = "";
    const data = await getMoviesByYear(year);
    const topTen = data.results.splice(0, 10);
    topTen.forEach((element) => {
        const li = document.createElement("li");
        
        const liContent = document.createTextNode(
            `${element.title}, rating: ${element.vote_average}, vote count: ${element.vote_count}`
        )
    console.log(liContent);
    li.appendChild(liContent);
    yearList.appendChild(li);
    })
}
//Eventlistener

const addMoviesByYearXListener = () => {
    const button = document.getElementById("topRatedFromYearButton");
    button.addEventListener("click", () => {
    const year = document.getElementById("topRatedFromYearInput").value;
    setMoviesByYear(year);
    });
};

// Function to list top rated movies by genre on the website
const setTopRatedMoviesInGenre = async genreId => {
    const topRatedList = document.getElementById("topInGenre");
  topRatedList.innerHTML = "";
  const data = await getTopMoviesByGenre(genreId);
  const topTen = data.results.splice(0, 10);
  topTen.forEach(movie => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
    );
    li.appendChild(liContent);
    topRatedList.append(li);
    });
};
//Event listener for top rated movies by genre
const addTopRatedMoviesInGenreXListener = () => {
    const button = document.getElementById("topInGenreButton");
  button.addEventListener("click", () => {
    const genreId = document.getElementById("topInGenreInput").value;
    console.log(genreId);
    setTopRatedMoviesInGenre(genreId);
});
}

document.addEventListener("DOMContentLoaded", () => {
    setMovieGenres();
    setMyTopMovie();
    setTopRatedMovies();
    addTopRatedMoviesInGenreXListener();
    addMoviesByYearXListener();
  });