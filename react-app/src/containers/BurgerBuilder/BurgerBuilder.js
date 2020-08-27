import React, {Component} from 'react'

import Aux  from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuiler extends Component{
    render(){
        return(

            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>

        );
    }
}

export default BurgerBuiler;