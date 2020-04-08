import {ADD_MOVIES,ADD_FAVORITE,REMOVE_FROM_FAVORITE}  from '../action/index';

const intialState={
    list:[],
    favourite:[]
}
export default function(state=intialState,action)
{
    
    switch(action.type)
    {
        case ADD_MOVIES:
                return {
                    ...state,
                    list:action.movie
                };
        case ADD_FAVORITE:
                return {
                    ...state,
                    favourite:[action.movie,...state.favourite]
                }
        case REMOVE_FROM_FAVORITE:

        const filteredFavorite=state.favourite.filter(
            movie=>movie.title!=action.movie.title
        );
            return {
                ...state,
                favourite:filteredFavorite
            }
        default:
            return state;
    }

   
}