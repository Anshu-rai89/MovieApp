import {ADD_MOVIES}  from '../action/index';

const intialState={
    list:[],
    favourite:[]
}
export default function(state=intialState,action)
{
    if(action.type==ADD_MOVIES)
    {
        return {
            ...state,
            list:action.movie
        };
    }

    return state;
}