import {observable, action, computed, decorate, configure, runInAction} from 'mobx'
import { get } from 'https';
// import { triggerAsyncId } from 'async_hooks';

configure({enforceActions: true})

class BirdStore {
     birds = [];

     addBirds = (bird) => {
         this.birds.push(bird);
     };

     deleteBird = (bird) => {

        this.birds =  this.birds.filter((birdy) => birdy !== bird);
     }

    get birdsCount  ()  {
           return this.birds.length;
    }
}

decorate(BirdStore,{
birds: observable,
addBirds: action,
deleteBird: action,
birdsCount: computed 

})

const store = new BirdStore();
export default store;