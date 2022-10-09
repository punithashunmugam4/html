const movieHolder=document.querySelector('.movie-holder');
var got=false;

const imageUrl="https://image.tmdb.org/t/p/w1280"
const movieUrl="https://api.themoviedb.org/3/search/movie?api_key=413dc06bbb88f9751ac210a2681d4860&primary_release_year=2022&query="

async function fetchMoviesList(movie){
var {data}=fetch(movieUrl+movie)
.then((response)=>response.json())
.then(display);
}
async function getmovies(){
    let arr=["Liger","Cobra","Sita Ramam","Ponniyin Selvan"];
    for(let i=0;i<arr.length;i++){
   let film=await fetchMoviesList(arr[i]);
   console.log(film);
    }
}
getmovies();

function display(data){
    if(got==false){
        got=true;
    document.getElementById("loader").remove();
    }
    console.log(data);
    data.results.forEach(element => {
        console.log(element);   
        console.log(element.title)
        let list=document.createElement('a');
        list.classList.add("movie-link");
        list.href="/moviename";
        list.innerHTML=`<div class="movie" data-d="${element.title}">
        <div class="movie-img-wrapper">
        <img src="${imageUrl+element.poster_path}">
        </div> 
         <h4>${element.title}</h4>
        </div>`;
        movieHolder.appendChild(list);
    });
   
}

