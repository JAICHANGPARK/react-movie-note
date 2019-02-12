import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
];

const movieImage =[];

const movies =[
  {
    
    title :"Matrix",
    poster : "https://t1.daumcdn.net/cfile/tistory/99256D3359D0C7D02A"
  },
  {
    title :"Matrix",
    poster : "https://t1.daumcdn.net/cfile/tistory/99256D3359D0C7D02A"
  },
  {
    title :"Matrix",
    poster : "https://t1.daumcdn.net/cfile/tistory/99256D3359D0C7D02A"
  },

];

class App extends Component {
  render() {
    return (
      <div className="App">
      {movies.map((movie, index) =>{

        return <Movie title={movie.title} poster ={movie.poster} key={index}/>
      })}
     
      </div>
    );
  }
}

export default App;
