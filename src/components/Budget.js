import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
const updateBudget = (value) => {
    if(value<0){
        alert("El presupuesto tiene que ser mayor a 0")
        dispatch({
            type: "SET_BUDGET",
            payload: 0
        })
    }else if(value>20000){
        alert("El presupuesto no puede superar los 20mil")
        dispatch({
            type: "SET_BUDGET",
            payload: 20000
        })
    }else if(value<totalExpenses){
        console.log(value, totalExpenses)
        alert("El presupuesto no puede ser menor a lo gastado")
        dispatch({
            type: "SET_BUDGET",
            payload: totalExpenses
        })
    }else {
        dispatch({
            type: "SET_BUDGET",
            payload: value
        })
    }
    
}

    return (
        <div className='alert alert-secondary'>
            <span>Presupuesto: {currency}
                <input
                type="number"
                style={{size: 10}}
                step="10"
                value={budget}
                onChange={event=>updateBudget(event.target.value)}
                >
                </input>    
            </span>
        </div>
    );
};

export default Budget;
