import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component
{ 
  state = {
    isLoading : true,
    movies : []
  };
  getMovies = async () => { // async는 비동기 함수로 기다리라는 의미
    const {data: {data : {movies}}} =  await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading : false}); //movie state에 axios의 movie 삽입
  } //axios는 javascript의 fetch와 같이 크롤링하는 기능(npm i axios)
//await는 async에서 기다리는 것의 주체 => axios가 끝날 때까지 기다리는 것
  componentDidMount()
  {
    this.getMovies();
  }/*componentDidMount는 render후 바로 실행이되는 method이므로 
     쉽게 render후에 state를 조절할 수 있다.*/
  render()
  {
    const {isLoading, movies} = this.state;
      return (
      <section className = "container">
        {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div> 
          ) :(
          <div className = "movies">
           {movies.map(movie =>(
            <Movie
              key={movie.id}
              id = {movie.id} 
              year = {movie.year}
              title = {movie.title}
              summary= {movie.summary} 
              poster= {movie.medium_cover_image}
              genres= {movie.genres}
              />
            ))}</div>
  )}</section>);
}}
export default Home;
