import React from 'react';

class MovieCard extends React.Component {
    render () {
        const {movie} = this.props
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}/>
                </div>
                <div className="right">
                    <div className="title">
                    {movie.Title}
                    </div>
                    <div className="plot">
                    {movie.plot}
                    </div>
                    <div className="rating">
                    {movie.imdbRating}
                    </div >
                    <button className="favorite-btn">
                        Favourite
                    </button>
                </div>
            </div>
          )
    }

}

export default MovieCard;
