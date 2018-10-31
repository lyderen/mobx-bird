import React, { Component } from 'react';
import {observer, inject} from 'mobx-react'

import Bireds from './Bireds'
import Cities from './Cities'

class App extends Component {
    render () {
        return (
         <div>

             <Bireds />
             <Cities />
         </div>
        )
    }
}

export default App;