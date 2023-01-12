import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        if(isNaN(cost)) {
            alert("El valor sólo puede ser un número")
            setCost("")
            return
        };        

        if(cost > remaining) {
                alert("El valor no puede exceder los fondos restantes $"+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Departamento</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Elegir...</option>
                        <option value="Marketing" name="marketing"> Mercado</option>
                <option value="Sales" name="sales">Ventas</option>
                <option value="Finance" name="finance">Finanzas</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Asignar</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Añadir</option>
                <option value="Reduce" name="Reduce">Reducir</option>
                  </select>
                    <span style={{ marginLeft: '2rem'}}>{currency}</span>
                    <input
                        required='required'
                        type='text'
                        id='cost'
                        value={cost}
                        style={{size: 10}}
                        onChange={(event) => setCost(event.target.value.replace(/[a-zA-Z]/ig, ""))}
                    >
                        </input>                    
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Guardar
                    </button>
                </div>
                </div>

        </div>
    );
};

export default AllocationForm;
