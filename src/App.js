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

const movieImage = [];

const movies = [
  {

    title: "Matrix",
    poster: "https://t1.daumcdn.net/cfile/tistory/99256D3359D0C7D02A"
  },
  {
    title: "Matrix",
    poster: "https://t1.daumcdn.net/cfile/tistory/99256D3359D0C7D02A"
  },
  {
    title: "Matrix",
    poster: "https://t1.daumcdn.net/cfile/tistory/99256D3359D0C7D02A"
  },

];
// Render  : componentWillMount () => render => compoonentDidMount()
// Update :  compoenent Will ReceiveProps() -> ShouldComponentUpdate() -> CompoenetWillUpdate -> render -> componentDidUpdate 
// State : React 컴포넌트 안에 있는 오브젝트, 컴포넌트 안에 State가 바뀔때 마다, 다시 Render 수행 

class App extends Component {

  state = {
    greeting: "Hello"
  }

  componentWillMount() {
    //api에 작업 요청
    console.log("componentWillMuount")
  }
  
  componentDidMount() {
    //render후 작업 처리 
    setTimeout(() => {
      //State는 직접 변경할 수 없고 setState를 통해 데이터 변경 처리 가능 .
      this.setState({
        greeting : "someting"
      })

    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}

      </div>
    );
  }
}

export default App;
