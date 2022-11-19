import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No expenses found</p>
  // if

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList items={ filteredExpenses} />
      
      
    </Card>
  )

}

export default Expenses
