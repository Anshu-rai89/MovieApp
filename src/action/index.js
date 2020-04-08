

// action types 


export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVORITE='ADD_FAVORITE';
export const REMOVE_FROM_FAVORITE='REMOVE_FROM_FAVORITE';




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

export function removeFavorite(movie)
{
    let obj={type:REMOVE_FROM_FAVORITE,
        movie
    }

    return obj;
}



