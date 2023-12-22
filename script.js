const numberOfFilms = +prompt("how many movies have you watched?","");
const personalMovieDB = {
     count : numberOfFilms,
     movies : {

    },
     actors : {

    },
     genres : [ ],
     privat : false 
}
const a = prompt("One of the last seen movies?"," ");
const b = +prompt("how would you rate it?"," ");

const d = prompt("One of the last seen movies?"," ");
const c = +prompt("how would you rate it?"," ");


personalMovieDB.movies[a]=b;
personalMovieDB.movies[d]=c;
