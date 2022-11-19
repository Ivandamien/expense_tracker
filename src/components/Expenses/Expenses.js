import {React,useState} from 'react'
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expense) =>(
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
           {/* <ExpenseItem
              title={props.items[0].title} 
              amount={props.items[0].amount} 
              date={props.items[0].date}
              />
           <ExpenseItem
              title={props.items[1].title} 
              amount={props.items[1].amount} 
              date={props.items[1].date}
              /> */}
      </Card>
  )

}

export default Expenses
