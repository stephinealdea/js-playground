const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  //const filteredMovies = !filter
  //  ? movies
  //  : movies.filter(movie => movie.info.title.includes(filter));

  let filteredMovies;

  if (!filter) {
    filteredMovies = movies;
  } else {
    filteredMovies = movies.filter((movie) => {
      return movie.info.title.includes(filter);
    });
  }

  // with object destructuring
  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    // desctructure movie and get the title key
    const { info } = movie;

    // destructure the info obj and get the title key but assign a different variable name
    //const { title: movieTitle } = info;

    let { getFormattedTitle } = movie;

    // binding the movie object to insure that it is what the specify target object to reference from the newMovie object 
    getFormattedTitle = getFormattedTitle.bind(movie);

    let text = getFormattedTitle() + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });

  /*filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== 'title') {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });*/
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random(),
    getFormattedTitle: function() {
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);


// side note with spread operators
const person1 = {
  name: 'Steph',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}

// copying the object and override a value
const person2 = {...person1, age: 29}

const person3 = {...person1, hobbies: ['Badminton']}

console.log('person1: ', person1);
console.log('person2: ', person2);
console.log('person2: ', person3);

// side note about "this"


const members = {
  teamName: 'Gsix',
  people: ['Steph', 'Camille'],
  getTeamMembers: function() {
    this.people.forEach((p) => {
      console.log(p + ' - ' + this.teamName);
    });
  }
};

members.getTeamMembers();

