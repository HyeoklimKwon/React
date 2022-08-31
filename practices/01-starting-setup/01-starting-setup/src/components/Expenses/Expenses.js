import Card from "../UI/Card";
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter"
import { useState } from 'react'
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');    
    const  onSaveFilterYearHandler = (filterYear) => {
      setFilteredYear(filterYear)
      console.log(filterYear);
      setFilteredYear(filterYear)
    }
    // 보통 제어된 컴포넌트라고 함은 바인딩이 되어있다는 뜻 부모 컴포넌트로부터 값을 받음 로직은 부모 컴포넌트 Expense 컴포넌트는 Expense.filer 
    // dumb, presentational, stateless 컴포넌트는 state를 사용하지 않고 단순히 데이터만 나타내는 컴포넌트를 의미하고 smart, stateful 컴포넌트는 State를 사용하여 값이 동적이게 나타나는 컴포넌트를 의미한다.
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
    })
    

    return (
    <div>
    <Card className="expenses">    
    <ExpenseFilter selected= {filteredYear} onSaveFilterYear = {onSaveFilterYearHandler}/>
      <ExpensesChart expenses = {filteredExpenses} />
      <ExpensesList items = {filteredExpenses}/>
      {/* {filteredExpenses.length === 0 && <p>No expenses found</p>} */}
      {/* {filteredExpenses.length === 0 ? <p>No expenses found</p> : 
      props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear).map(
        expense =>          
            <ExpenseItem 
            key = {expense.id} 
            // key를 추가하는 이유는 key가 없으면 배열을 다시 다 확인하는 작업을 거쳐야 하기 떄문 key를 사용해서 새로운 객체를 추가한다.
            title = {expense.title} 
            amount = {expense.amount} 
            date = {expense.date}/>  
        )
      
    }          */}

      {/* {filteredExpenses.length > 0  &&
      props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear).map(
        expense =>          
            <ExpenseItem 
            key = {expense.id} 
            // key를 추가하는 이유는 key가 없으면 배열을 다시 다 확인하는 작업을 거쳐야 하기 떄문 key를 사용해서 새로운 객체를 추가한다.
            title = {expense.title} 
            amount = {expense.amount} 
            date = {expense.date}/>  
        )
      
    }   */}



    </Card>

    </div>
    );    
}
export default Expenses