import React from 'react';


import Navbar from './navbar';
import {data} from '../data';
import MovieCard  from './movieCard';
import { addMovie,showFavorite } from "../action/index";

class  App extends React.Component {


  componentDidMount()
  {
    const {store}=this.props;

    console.log('store',store);

    store.subscribe(()=>
    {
      console.log('updated');
      this.forceUpdate();
    });

    store.dispatch(addMovie(data));


    console.log('state',store.getState());


  }

  isMovieFavorite= (movie)=>
  {
    const {movies}=this.props.store.getState();
    const {favourite}=movies;

    const index=favourite.indexOf(movies);

    if(index!=-1)
    {
      return true;
    }

    return false;
  }

  onChangeTab=(val)=>
  {

   this.props.store.dispatch(showFavorite(val));

  }
  render(){

    console.log('render');
    console.log('state',this.props.store.getState());
    const {movies}=this.props.store.getState();
    const {list,showFavorite,favourite}=movies;
    const displayMovies=showFavorite?favourite:list;
      return (
        <div className="App">
        <Navbar />
        <div className='main'>
            
            <div className='tabs'>
              <div className={`tab ${showFavorite?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
              <div className={`tab ${showFavorite?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourite</div>
            </div>

            <div  className='list'>
              
              {
              
             
              displayMovies.map((movie,index)=>
                  <MovieCard
                   movie={movie} 
                   key={`movie-${index}`}
                   dispatch={this.props.store.dispatch}
                   isFavorite={this.isMovieFavorite(movie)}
                   />
              )}
            </div>
        </div>
        </div>
      );
     }
}

export default App;
