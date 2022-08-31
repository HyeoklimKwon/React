// import React, { useState } from 'react'; 

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseAmount from './ExpenseAmount'
import Card from '../UI/Card';

function ExpenseItem(props) {
    // const [title, setTitle] =  useState(props.title);
    // useState는 두가지 요소가 들어있는 배열을 항상 반환, 첫 번째 요소는 현재 상태값이고 두 번째 요소는 그것을 업데이트하는 함수입니다.
    console.log('ExpenseItem evaluated by React');
    // 기본적으로 4번 이지만 클릭했을때 한번씩 실행 각각의 state가 독립적으로 실행됨 
    
    // const clickHandler = () => {
    //     setTitle('Updated!')
    //     console.log(title);
    //     // 사실상 바로 바꾸지 않기 때문에 console log에서는 값이 바뀌지 않음
    // }  

    return  (
    <li>
    <Card className='expense-item'>
        <ExpenseDate date = {props.date} ></ExpenseDate>       
        <div className='expense-item__description'>
            <h2>{ props.title }</h2>
            {/* title로 쳐서 이게 잘 안됐었음 기억하자 */}
            <ExpenseAmount amount = {props.amount}/>            
        </div>        
        {/* <button onClick={clickHandler}>Change Title</button> */}
        {/* 만약에 clickHanler()로 두면 클릭했을때 실행이 아니라 JSX가 실행됐으러때, 실행되고 리턴 값을 이미 가지고 있는 상태가 된다.  */}
    </Card>

    </li>   
    );
      
}

export default ExpenseItem