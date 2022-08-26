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
    // 보통 제어된 컴포넌트라고 함은 바인딩이 되어있다는 뜻 부모 컴포넌트로부터 값을 받음 로직은 부모 컴포넌트 Expense 컴포넌트는 Expense.filer 
    // dumb, presentational, stateless 컴포넌트는 state를 사용하지 않고 단순히 데이터만 나타내는 컴포넌트를 의미하고 smart, stateful 컴포넌트는 State를 사용하여 값이 동적이게 나타나는 컴포넌트를 의미한다.
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