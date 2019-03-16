
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.string.isRequired,
        synopsis: PropTypes.string.isRequired,

    }

    render() {
        console.log(this.props);
        return (
            <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster poster={this.props.poster} />
                </div>
                <div className="Movie__Columns">
                    <h1>{this.props.title} </h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, index) =>
                            <MovieGenre genre={genre} key={index}/> )}
                    </div>
                    <p className="Movie__Synopsis">
                    {this.props.synopsis}
                    </p>

                </div>


                {/* jsx의 경우 명령어를 실행하려면 꼭 괄호를 넣어야함. */}

            </div>
        )
    }
}

function MovieGenre({ genres }) {
    return (
        <span className="Movie__Genre">{genres}</span>
    )
}

// class MoviePoster extends Component{
//     static propTypes ={
//         poster : PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src={this.props.poster} alt = "Movie Poster"/>
//         )
//     }
// }
function MoviePoster({ poster }) {
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.number.isRequired
}
MovieGenre.propTypes = {
    genres: PropTypes.string.isRequired
}

export default Movie