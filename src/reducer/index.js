import {ADD_MOVIES,ADD_FAVORITE}  from '../action/index';

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
        default:
            return state;
    }

   
}