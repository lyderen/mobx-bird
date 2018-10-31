import  {observable, action, computed, decorate, configure, runInAction} from 'mobx'
import { get } from 'https';
import { publicDecrypt } from 'crypto';

import BirdStore from './BirdStore';

configure({enforceActions: true})

class CitiesStore {
    

    weatherDataCitiArray = [];
   
    alertMsg = '';

  loadData = async citi => {
   
      const response = await fetch(
        `https://abnormal-weather-api.herokuapp.com/cities/search?city=${citi}`
       )
       const data = await response.json();
    
       // make as try catch
      if(data.error == undefined) this.addData(data);  

      runInAction(() => {

        this.alertMsg = data.error;
      })

  }

  addData = data => {
   let citi = {
      city :data.city,
      forecast:{
        high: data.forecast[0].high,
        low: data.forecast[0].low
      }
    }
   this.weatherDataCitiArray.push(citi);
  }

  get citiesCount () {
    
   return  this.weatherDataCitiArray.length;
  }
   
  get iteamsCouner () {
    return BirdStore.birdsCount + this.citiesCount;
  }
}
decorate(CitiesStore,{
  weatherDataCitiArray: observable,
  alertMsg: observable,
addData: action,
citiesCount: computed
})

const store = new CitiesStore();

export default store;