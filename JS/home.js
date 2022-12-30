//Taking Reference to attach to the DOM
const recommendedMovieContainerEl = document.querySelector(".recommended_movies_container");
const indianMoviesContainerEl = document.querySelector(".likedIndianMovies_container");
const nowPlayingMoviesContainerEl = document.querySelector(".nowPlayingMovies_container");
const popularMoviesContainerEl = document.querySelector(".popularMovies_container");
const topRatedMoviesContainerEl = document.querySelector(".topRatedMovies_container");
const latestMoviesContainerEl = document.querySelector(".latestMovies_container");
const bollywoodMoviesContainerEl = document.querySelector(".hindiMovies_container");
const trendingMoviesContainerEl = document.querySelector(".trendingMovies_container");

//--------------------------------------------------------------------------------🎅

// variable declaration For the resuseablility while hitting Api End Points
const auth = "57b428c0e112b579eb26e2f43ff08b0f"
const Api_key = "api_key=57b428c0e112b579eb26e2f43ff08b0f"
const Base_Url = "https://api.themoviedb.org/3/"
const img_url = "https://image.tmdb.org/t/p/w500"    //------>  This is the Base URL For Images


const nowPlayingMoviesUrl = Base_Url + "movie/now_playing?" + Api_key + "&language=en-US&page=1";
const popularMoviesUrl = Base_Url + "movie/popular?" + Api_key + "&language=en-US&page=3";
const topRatedMoviesUrl = Base_Url + "movie/top_rated?" + Api_key + "&language=en-US&page=2";
const latestMoviesUrl = Base_Url + "movie/now_playing?" + Api_key + "&language=en-US&page=2";

const trendingMovieNamesUrl = Base_Url + "discover/movie?" + Api_key + "&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=ml|bn|ta";
const recommendedMoviesUrl = Base_Url + "discover/movie?" + Api_key + "&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=hi";
const likedIndianMovies = Base_Url + "discover/movie?" + Api_key + "&sort_by=popularity.desc&page=2&primary_release_year=2022&with_origin_country=IN";
const popularMoviesUrl2 = Base_Url + "discover/movie?" + Api_key + "&sort_by=popularity.desc&page=1&primary_release_year=2021&with_original_language=ml|bn|ta";


async function getMovies(url) {
    const fetchedData = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    })
    const data = await fetchedData.json();
    showMovies(data.results); 
}
getMovies(recommendedMoviesUrl);


function mapMovieLanguage(lang) {

    let movieLangObj = {
        "en": "English",
        "hi": "Hindi",
        "te": "Telegu",
        "ta": "Tamil",
        "ml": "Malayalam",
        "bn": "Bengali"
    }

    return movieLangObj[lang];

}

function createMovieElement(movie) {
    let { title, poster_path, vote_average, popularity, original_language, id } = movie;
    original_language = mapMovieLanguage(original_language);

    const movieEl = document.createElement("div")
    let genres = ["Action/Mystery", "Comedy/Drama/Romance", "Action/Thriller", "Drama/Mystery"]
    let rndm = Math.floor(Math.random() * genres.length)
    let genresOfMovie = genres[rndm]
    movieEl.classList.add("movies")
    movieEl.innerHTML = `
    <div class="parent_movie"> 
    <a href="./HTML/movieExpanded.html?id=${id}"><img src="${img_url + poster_path}" alt="" /></a>
    <div class="like_vote">
    <p><i class="fa-solid fa-thumbs-up"></i> ${Number(popularity / 10).toFixed(1)}k likes</p>
    <p><i class="fa-solid fa-star"></i> ${vote_average}/10</p>
    </div>
  </div>
    <h2>${title}</h2>
   <p>${genresOfMovie}</p>
    `;

    return movieEl;
}



function showMovies(movies) {
  
    movies.forEach((movie) => {
      
      let { title, poster_path, vote_average, overview, popularity, original_language,id, genre_ids } = movie
       original_language = mapMovieLanguage(original_language);

        const movieEl = document.createElement("div")
        let genres = ["Action/Mystery","Comedy/Drama/Romance","Action/Thriller","Drama/Mystery"]
        let rndm = Math.floor(Math.random() *genres.length)
        let genresOfMovie = genres[rndm]
        movieEl.classList.add("movies")
        movieEl.innerHTML = `
                 <div class="parent_movie">
                 <a href="./HTML/movieExpanded.html?id=${id}"><img src="${img_url + poster_path}" alt="" /></a>
                 <div class="like_vote">
                 <p><i class="fa-solid fa-thumbs-up"></i> ${Number(popularity/10).toFixed(1)}k likes</p>
                 <p><i class="fa-solid fa-star"></i> ${vote_average}/10</p>
                 </div>
                 </div>
                 <h2 style="color: white;font-weight: 100;">${title}</h2>
                 <p style="color: white;font-weight: 100;">${original_language}</p>

      `
        recommendedMovieContainerEl.appendChild(movieEl)

    })

}

//-------------------------------------------------------------------------------------------------------------------------------

//Upcoming Movies


const getlikedIndianMovies = async function (url) {

    const fetchedDataOfLikedIndianMovies = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    })
    const data = await fetchedDataOfLikedIndianMovies.json();
    console.log(data.results)
    showLikedIndianMovies(data.results)
}

getlikedIndianMovies(likedIndianMovies)

function showLikedIndianMovies(movies) {
    console.log(movies)

    movies.forEach((movie) => {
        let movieEl = createMovieElement(movie);
        indianMoviesContainerEl.appendChild(movieEl);
    });
}

//-------------------------------------------------------------------------------------------------------------
//Premering Movies 

const getNowPlayingMovies = async function (url) {

    const fetchedDataOfNowPlayingMovies = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    })
    const data = await fetchedDataOfNowPlayingMovies.json();
    console.log(data.results)
    showNowPlayingMovies(data.results)
}
getNowPlayingMovies(nowPlayingMoviesUrl)

function showNowPlayingMovies(movies) {
    console.log(movies)

    movies.forEach((movie) => {
        let movieEl = createMovieElement(movie);
        nowPlayingMoviesContainerEl.appendChild(movieEl);
    });
}


//---------------------------------------------------------------------------------------------------------------------------------

//popular



const getPopularMovies = async function (url) {

    const fetchedDataOfGetPopularMovies = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    })
    const data = await fetchedDataOfGetPopularMovies.json();
    console.log(data.results);
    showPopularMovies(data.results)
}
getPopularMovies(popularMoviesUrl2)

function showPopularMovies(movies) {
    console.log(movies)

    movies.forEach((movie) => {
        let movieEl = createMovieElement(movie);
        popularMoviesContainerEl.appendChild(movieEl);
    });
}

//----------------------------------------------------------------------

//Top Rated

const getTopRatedMovies = async function (url) {

    const fetchedDataOfTopRatedMovies = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    })
    const data = await fetchedDataOfTopRatedMovies.json();
    console.log(data.results);
    showTopRatedMovies(data.results)
}
getTopRatedMovies(topRatedMoviesUrl)

function showTopRatedMovies(movies) {
    console.log(movies)

    movies.forEach((movie) => {
        let movieEl = createMovieElement(movie);
        topRatedMoviesContainerEl.appendChild(movieEl);
    });
}

//-------------------------------------------------------------------------------------------------------------

//Latest Movies


const getLatestMovies = async function (url) {

    const fetchedDataOfLatestMovies = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    })
    const data = await fetchedDataOfLatestMovies.json();
    console.log(data.results);
    showLatestMovies(data.results)
}
getLatestMovies(latestMoviesUrl);
function showLatestMovies(movies) {
    console.log(movies)

    movies.forEach((movie) => {
        let movieEl = createMovieElement(movie);
        latestMoviesContainerEl.appendChild(movieEl);
    });
}
//------------------------------------------------------------------------------------------------------------------------------

//Trending Searches

const getTrendingMovies = async function (url) {

    const fetchedDataOfTrendingMovies = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    })
    const data = await fetchedDataOfTrendingMovies.json();
    console.log(data.results);
    showTrendingMovies(data.results.slice(3, 17));
}
getTrendingMovies(trendingMovieNamesUrl);


function showTrendingMovies(movies) {
    movies.forEach(movie => {
        let { id, title } = movie;
        const trendingMoviesEl = document.createElement("div")
        trendingMoviesEl.classList.add("trending_movies")
        trendingMoviesEl.innerHTML = `
          <a href="./HTML/movieExpanded.html?id=${id}">
              <p>${title}</p>
          </a>
        
        `
        trendingMoviesContainerEl.appendChild(trendingMoviesEl)
    })
}


