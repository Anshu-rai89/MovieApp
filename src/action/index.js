

// action types 


export const ADD_MOVIES='ADD_MOVIES';



// action creator

export function addMovie(movie)
{
    let obj={type:ADD_MOVIES,
          movie
    }

    return obj;
}