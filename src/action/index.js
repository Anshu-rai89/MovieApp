

// action types 


export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVORITE='ADD_FAVORITE';
export const REMOVE_FROM_FAVORITE='REMOVE_FROM_FAVORITE';
export const SHOW_FAVORITE='SHOW_FAVORITE';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';


// action creator

export function addMovie(movie)
{
    let obj={type:ADD_MOVIES,
          movie
    }

    return obj;
}

export function addMovieToList(movie)
{
    let obj={type:ADD_MOVIE_TO_LIST ,
        movie
  }

  return obj;
}

export function addFavorite(movie)
{
    let obj={type:ADD_FAVORITE,
        movie
    }

    return obj;
}

export function removeFavorite(movie)
{
    let obj={type:REMOVE_FROM_FAVORITE,
        movie
    }

    return obj;
}

export function showFavorite(val)
{
    let obj={type:SHOW_FAVORITE,
        val
    }

    return obj;
}

export function addSearchResult(movie)
{
    let obj={
        type:ADD_SEARCH_RESULT,
        movie
    }

    return obj;
}

export function handleMovieSearch(movie)
{
      return function(dispatch)
      {
          fetch(`http://www.omdbapi.com/?t=${movie}&apikey=891a9115`)
          .then(response=>response.json())
          .then(movie=>
            {
                dispatch(addSearchResult(movie));
            })
      }
}




