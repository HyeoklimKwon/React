import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter"
import { useState } from 'react'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');    
    const  onSaveFilterYearHandler = (filterYear) => {
      setFilteredYear(filterYear)
      console.log(filterYear);
    }

    return (
    <div>
    <Card className="expenses">    
    <ExpenseFilter selected= {filteredYear} onSaveFilterYear = {onSaveFilterYearHandler}/> 
      <ExpenseItem 
        title={props.expenses[0].title} 
        amount = {props.expenses[0].amount} 
        date = {props.expenses[0].date}>        
      </ExpenseItem>
      <ExpenseItem 
        title={props.expenses[1].title} 
        amount = {props.expenses[1].amount} 
        date = {props.expenses[1].date}>        
      </ExpenseItem>
      <ExpenseItem 
        title={props.expenses[2].title} 
        amount = {props.expenses[2].amount} 
        date = {props.expenses[2].date}>        
      </ExpenseItem>
      <ExpenseItem 
        title={props.expenses[3].title} 
        amount = {props.expenses[3].amount} 
        date = {props.expenses[3].date}>        
      </ExpenseItem>         
    </Card>

    </div>

    );    
}
export default Expenses