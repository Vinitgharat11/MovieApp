const url = "https://moviesverse1.p.rapidapi.com/movies/";
let currentPage = 1
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a4564eda00mshda6272279634f46p10f310jsn501d1234f374",
    "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
  },
};

async function getMoviesData(page) {
  const response = await fetch(`${url}${page}`,options);
  const data = await response.json();
  return data;
}

const container = document.getElementById("Movie");

async function displayMovieImages() {
  const moviesData = await getMoviesData(currentPage);
  container.innerHTML = ''; // 
  moviesData.movies.forEach((movie) => {
    const MovieCard = document.createElement("div");
    MovieCard.classList.add("Movie-card");

    const ImageElement = document.createElement("img");
    ImageElement.src = movie.img;
    ImageElement.alt = movie.id;
    MovieCard.appendChild(ImageElement);

    const linkElement = document.createElement("a");
    linkElement.href = movie.link;
    linkElement.textContent = movie.id;
    MovieCard.appendChild(linkElement);

    container.appendChild(MovieCard);
  });
}


async function nextPage() {
  currentPage++;
  await getMoviesData(currentPage);
  displayMovieImages();
}
displayMovieImages();

