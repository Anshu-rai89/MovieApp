import React from 'react';


import Navbar from './navbar';
import {data} from '../data';
import MovieCard  from './movieCard';
import { addMovie } from "../action/index";

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
  render(){

    console.log('render');
    const {list}=this.props.store.getState();
      return (
        <div className="App">
        <Navbar />
        <div className='main'>
            
            <div className='tabs'>
              <div className='tab'>Movies</div>
              <div className='tab'>Favourite</div>
            </div>

            <div  className='list'>
              
              {list.map((movie,index)=>
                  <MovieCard  movie={movie} key={`movie-${index}`}/>
              )}
            </div>
        </div>
        </div>
      );
     }
}

export default App;
