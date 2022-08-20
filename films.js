const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов?', ''),
b = prompt('На сколько оцените его?', ),
a1 = prompt('Один из последних фильмов?', ''),
b1 = prompt('На сколько оцените его?', );

personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[a1] = b1;

console.log(personalMuvieDB);

