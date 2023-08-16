const API_KEY = "900b2fac87192eb739e029739ecb57f1";
const session_id = "439c0002485e26b21342d358e87f389b34baa7b7";

const base_endpoint = "https://api.themoviedb.org/3";
//Get movies by genre
async function getMoviesGenres() {
    const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
    const response = await fetch(apiURL, {method: "GET"});
    const result = await response.json();
    return await result
    } catch (error) {
    console.log(error)
    }
}
//Get top rated movies
async function getTopRatedMovies() {
    const apiURL = `${base_endpoint}/movie/top_rated?api_key=${API_KEY}`;
    try {
        const response = await fetch(apiURL, {method : "GET"});
        const result = await response.json();
        return await result
    } catch (error){
        console.log("Error: " + error);
    }
}
//Get top rated action movies
async function getTopRatedActionMovies() {
    const apiURL = `${base_endpoint}/discover/movie?api_key=${API_KEY}&with_genres=28`;
    try {
        const response = await fetch(apiURL, {method : "GET"});
        const result = await response.json();
        return await result
    } catch (error){
        console.log("Error: " + error);
    }
}
//Get movies by id
async function getMovieById(movie_id) {
    const apiURL = `${base_endpoint}/find/${movie_id}?external_source=imdb_id&api_key=${API_KEY}`;
    try {
        const response = await fetch(apiURL, {method : "GET"});
        const result = await response.json();
        return await result
    } catch (error){
        console.log("Error: " + error);
    }
}

//Get top rated movies by genre
async function getTopMoviesByGenre (genreId) {
    const apiURL = `${base_endpoint}/discover/movie?with_genres=${genreId}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try {
        const response = await fetch(apiURL, {method : "GET"});
        return await response.json();
    } catch (error) {
        console.log("Error: " + error)
    }
}

//Get movies by year
async function getMoviesByYear (year) {
    const apiURL = `${base_endpoint}/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try{
        const response = await fetch(apiURL, {method: "GET"});
        return await response.json()
    } catch (error) {
        console.log("Error: " + error);
    }
}

