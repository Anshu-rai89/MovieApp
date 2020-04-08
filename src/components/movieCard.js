import React from 'react';
import {addFavorite}  from '../action/index';


class MovieCard extends React.Component
{

    handleFavoriteClick= () =>
    { 
        const {movie}=this.props;
        this.props.dispatch(addFavorite(movie));
    }
    render()
    {
        const {movie}=this.props;
        return (
            <div className="movie-card">

                <div className='left'>
                   <img alt='movie-poster' src={movie.Poster}  />
                </div>
                <div className='right'>
                                
                    <div className='title'>{movie.title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        <button className='favourite-btn' onClick={this.handleFavoriteClick}>Favourite </button>
                    </div>
                </div>
              
            </div>
          );
    }
  
}

export default MovieCard;