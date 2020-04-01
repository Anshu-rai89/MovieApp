
// action types 


export const ADD_MOVIES='ADD_MOVIES';



// action creator

export function addMovie(movie)
{
    return 
    {
        type:ADD_MOVIES,
        movie
    }
}