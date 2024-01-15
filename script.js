const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show_nav");
});

//function to fetch data from api
const url = "https://moviesverse1.p.rapidapi.com/movies/year/%7Byear%7D/1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a4564eda00mshda6272279634f46p10f310jsn501d1234f374",
      "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
    },
  };


//   async function getdata(){
//     const response = await fetch(url,options);
//     const data = await response.json()
//     console.log(data.movies)
//   }


  
// getdata()

fetch(url ,options).then(res=>res.json()).then(json =>{
    console.log(json.movies)
    const list = document.querySelector(".List")
    list.innerHTML=`${json.movies[1].link}`
    

    const moviesList = json.movies.map(movie => `<li><a href="${movie.link}">${movie.text}</a></li>` )
    list.innerHTML = `<ul>${moviesList.join("")}</ul>`;
})
