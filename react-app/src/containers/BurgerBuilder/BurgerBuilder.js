import React, {Component} from 'react'

import Aux  from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuiltControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSymmary'

const INGREDIENT_PRICES={
    salad:0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuiler extends Component{

    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice :4,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = ()=> {

        this.setState({purchasing: true})

    }

    purchaseCancelHandler = ()=> {

        this.setState({purchasing: false})

    }

    updatePurchageState(ingredients){
    

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el) => {
                console.log(sum+el)
                return sum+el;
            },0);

            this.setState({purchasable: sum>0});
    }

    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngedients = {
            ...this.state.ingredients
        };
        updatedIngedients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngedients})
        this.updatePurchageState(updatedIngedients);
    }

    removeIngredientHandler=(type)=>{

        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngedients = {
            ...this.state.ingredients
        };
    
        updatedIngedients[type] = updatedCount;
        const priceDeduct = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priceDeduct;
        this.setState({totalPrice: newPrice, ingredients: updatedIngedients})
        this.updatePurchageState(updatedIngedients);
    }

    purchageContinueHandler = () =>{
        alert("You Continue!")
    }
    

    render(){

        const disabledInfo ={
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0;
        }

        return(

            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    <OrderSummary
                        purchaseCancelled = {this.purchaseCancelHandler}
                        purchaseContinued = {this.purchageContinueHandler}
                        price = {this.state.totalPrice}
                        ingredients = {this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable ={this.state.purchasable}   />
            </Aux>

        );
    }
}

export default BurgerBuiler;