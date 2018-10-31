import React, { Component } from 'react';


import './App.css';

import {observer, inject} from 'mobx-react'

class Bireds extends Component {

  heandleSubmit = (e) => {
   e.preventDefault();

   const bird = this.bird.value;
   this.props.BirdStore.addBirds(bird);
   this.bird.value = '';
  }
  deleteBird = (e)=> {
    e.preventDefault();
    const bird = this.birdDelete.value;

    this.props.BirdStore.deleteBird(bird);
  }
  
  render() {
     const {BirdStore} = this.props

    return (
      <div className="App">
        <p> you have a _{BirdStore.birdsCount}</p>

        <form onSubmit={e => this.heandleSubmit(e)}>
         <input type='text' placeholder='Add birds' ref={input => this.bird = input} />
         <button>Add Bird</button>
        </form>
        {BirdStore.birdsCount > 0 && <form onSubmit={e => this.deleteBird(e)}>
          <input type='text' placeholder='bird delete' ref={input => this.birdDelete = input} />
          <button>Delete</button>

        </form>}
        <ul>
             {BirdStore.birds.map((bird,i) => (
               <li key={i}>
                 {bird}
               </li>
             ))}

        </ul>
        
      </div>
    );
  }
}

export default inject("BirdStore")(observer(Bireds));
