import {combineReducers}  from 'redux';
import {ADD_MOVIES,
        ADD_FAVORITE,
        REMOVE_FROM_FAVORITE,
        SHOW_FAVORITE}  from '../action/index';

const intialMovieState={
    list:[],
    favourite:[],
    showFavorite:false
}
export function movies(state=intialMovieState,action)
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

        case SHOW_FAVORITE:
            return {
                ...state,
                showFavorite:action.val
            } 
        default:
            return state;
    }

   
}

const initialSearchState={
    result:{}
}

export function search(state=initialSearchState,action)
{
     return state;
}

const initialState=
{
    movies:intialMovieState,
    search:initialSearchState
}
/*export default function rootReducer(state=initialState,action)
{
    let obj= {  
       
        movies:movies(initialState.movies,action),
        search:search(initialState.search,action)
        
    }
    return obj;
   
}*/

export default combineReducers({
    movies,
    search
})