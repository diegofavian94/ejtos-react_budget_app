import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import {FcPlus} from 'react-icons/fc'
import {FaMinusCircle} from 'react-icons/fa'
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    
    const decreaseAllocation = (name, event) => {
        console.log(event)
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className="btn" onClick={event=> increaseAllocation(props.name, event)}><FcPlus fontSize={30}/></button></td>
        <td><button className="btn" onClick={event=> decreaseAllocation(props.name)}><FaMinusCircle color='darkRed' fontSize={28}/></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
