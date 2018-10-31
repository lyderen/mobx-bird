
import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';

class Cities extends Component {
    heandleCiti = e => {
    e.preventDefault();
       const citi = this.citi.value;

       this.props.CitiesStore.loadData(citi);
            this.citi.value = '';      
    }
    render () {
        const {CitiesStore} = this.props;
        return (
            <div className="App">
            
            { <p> u have a {CitiesStore.citiesCount} Cities at the list</p>}
            {<h5>we have a _{CitiesStore.iteamsCouner} iteams </h5>}
            <form onSubmit={e => this.heandleCiti(e)}> 
                <input type='text' placeholder='add Citi' ref={input => this.citi = input }/>
                <button>get citi</button>
                {CitiesStore.alertMsg}
            </form>
                 <ul>
            
                    { CitiesStore.weatherDataCitiArray.map((citi,i) => (
                      <li key={i}> 
                          {citi.city}
                            <ul>
                               <li>
                                   {<p>HIGH - {citi.forecast.high}</p>}
                                   </li>  
                                   <li>
                                   {<p>LOW - {citi.forecast.low}</p>}
                                   </li>
                            </ul>
                      </li>
                     ))} 
                 
                 </ul>
            </div>
        )
    }
}

export default inject("CitiesStore")(observer(Cities));