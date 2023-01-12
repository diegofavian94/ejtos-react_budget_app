import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext)

    const updateCurrency = (value) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: value
        })
    }

    return (
        <div className="alert alert-info">
            <span>
                Currency {currency}
            </span>
            <select className="custom-select bg-info" onChange={(event) => updateCurrency(event.target.value)}>
                <option defaultValue value="$" name="peso">Peso</option>
                <option defaultValue value="£" name="libra">Libra</option>
                <option defaultValue value="€" name="euro">Euro</option>
                <option defaultValue value="₹" name="ruppee">Ruppee</option>
            </select>
        </div>
    )
}

export default Currency