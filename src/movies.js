// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = function(movies) {
    const directorArray = movies.map(movie => movie.director);
    return directorArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = function(movies) {
    const spielbergDramaMovies = movies.filter((gaston) => gaston.director === 'Steven Spielberg' && gaston.genre.includes("Drama"));
    return spielbergDramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = function(movieArray) {
    if (movieArray.length === 0) return 0;
    const accRating = movieArray.reduce((acc, currentMovieRating) => {
        return (currentMovieRating.rate === undefined ? acc : acc += currentMovieRating.rate);
    }, 0);
    return (Number((accRating/movieArray.length).toFixed(2)));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = function(arr) {
    const dramaMoviesArray = arr.filter((dramaMovie) => dramaMovie.genre.includes('Drama'));
    if (dramaMoviesArray.length === 0) return 0;
    const accDramaRating = dramaMoviesArray.reduce ((acc, currentDramaMovieRating) => {
        return (currentDramaMovieRating.rate === undefined ? acc : acc += currentDramaMovieRating.rate);
    },0);
    return (Number((accDramaRating/dramaMoviesArray.length).toFixed(2)));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = function(arr) {
    const clonedArray = arr.map(movie => movie);
    const clonedArrayAscYear = clonedArray.sort((a, b) => a.year - b.year);
    return clonedArrayAscYear;
};

/* const orderByYear = function(arr) {
    const clonedArray = arr.map(movie => movie);
    const clonedArrayAscYear = clonedArray.sort((a, b) {
    if (a.year === b.year) return 0;
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    }
    return clonedArrayAscYear;
}; */

/* const orderByYear = function(arr) {
    const clonedArray = arr.map(movie => movie);
    const clonedArrayAscYear = clonedArray.sort(function(a, b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        })}; 
    return clonedArrayAscYear;
};*/



// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = function(arr) {
    const titleArray = [];
    for (let i = 0; i < arr.length ; i++) {
      titleArray.push(arr[i].title); 
    }
    const ascTitleArray = titleArray.sort();
    const reducedArray = ascTitleArray.slice(0, 20);
    return reducedArray;
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
