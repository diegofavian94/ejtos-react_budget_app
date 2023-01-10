import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Departamento</th>
              <th scope="col">Presupuesto asignado</th>
              <th scope="col">Incrementar en 10</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
            <tbody>
            {console.log(expenses)}
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
