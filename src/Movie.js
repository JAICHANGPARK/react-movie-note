
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <MoviePoster poster = {this.props.poster}/>

                {/* jsx의 경우 명령어를 실행하려면 꼭 괄호를 넣어야함. */}
                <h1>{this.props.title} </h1>
            </div>
        )
    }
}


class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}

export default Movie