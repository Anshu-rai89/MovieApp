export default function(state=[],action)
{
    if(action.type=='ADD_MOVIE')
    {
        return action.movie;
    }

    return state;
}