import React from 'react';
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'


const ExpensesList = props => {  
    // 이렇게도 생성이 가능합니다. 
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    return <ul className='expenses-list'>
        { props.items.map(
        expense =>          
            <ExpenseItem 
            key = {expense.id} 
            // key를 추가하는 이유는 key가 없으면 배열을 다시 다 확인하는 작업을 거쳐야 하기 떄문 key를 사용해서 새로운 객체를 추가한다.
            title = {expense.title} 
            amount = {expense.amount} 
            date = {expense.date}/>  
        )
        }

    </ul>

};

export default ExpensesList 