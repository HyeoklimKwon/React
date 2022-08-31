import './ExpenseForm.css'
import React, {useState} from 'react'


const ExpenseForm = (props) => {
    // 모든 데이터는 string으로 저장되기때문에 ''로 해야한다.
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] =  useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // }); 

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })        
        // enteredTitle만 추가할 경우 세 개의 state 변수가 세트기 떄문에 나머지 변수 두개의 state값을 잃어버리게 된다. 
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle : event.target.value}
        // })
        // 일반적인 경우에는 위의 코드도 상관없지만 
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');       
    }

    return <form onSubmit={submitHandler}>
        
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" 
                value = {enteredTitle} 
                onChange = {titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min= "0.01" step= "0.01" 
                value = {enteredAmount}
                onChange = {amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min='2019-01-01' max= '2022-12-31' 
                value = {enteredDate}
                onChange = {dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            {/* type을 button으로 둔 것은 submit을 막기 위해 */}
            <button type='submit'>Add Expense</button>
         
        </div>
    </form>
}
export default ExpenseForm