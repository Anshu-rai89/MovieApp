

// action types 


export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVORITE='ADD_FAVORITE';




// action creator

export function addMovie(movie)
{
    let obj={type:ADD_MOVIES,
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