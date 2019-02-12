
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster></MoviePoster>
                <h1>Hello this is a moview </h1>
            </div>
        )
    }
}


class MoviePoster extends Component{
    render(){
        return(
            <img src="https://t1.daumcdn.net/cfile/tistory/99256D3359D0C7D02A"/>
        )
    }
}

export default Movie