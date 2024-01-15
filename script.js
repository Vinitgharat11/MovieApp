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


  async function getdata(){
    const response = await fetch(url,options);
    const data = await response.json()
    console.log(data.movies)
  }


  
getdata()

