import React from 'react';
import Navbar from './navbar';
import {data} from '../data';
import MovieCard  from './movieCard';

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

    store.dispatch(
      {
        type:'ADD_MOVIE',
        movie:data
      }
    );


    console.log('state',store.getState());
  }
  render(){

    console.log('render');
    const movies=this.props.store.getState();
      return (
        <div className="App">
        <Navbar />
        <div className='main'>
            
            <div className='tabs'>
              <div className='tab'>Movies</div>
              <div className='tab'>Favourite</div>
            </div>

            <div  className='list'>
              
              {movies.map((movie,index)=>
                  <MovieCard  movie={movie} key={`movie-${index}`}/>
              )}
            </div>
        </div>
        </div>
      );
     }
}

export default App;
