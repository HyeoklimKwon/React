import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = props => {
    const chartDataPoints = [
        { label: 'Jan', value : 0 },
        { label: 'Feb', value : 0 },
        { label: 'Mar', value : 0 },
        { label: 'Apr', value : 0 },
        { label: 'May', value : 0 },
        { label: 'Jun', value : 0 },
        { label: 'Jul', value : 0 },
        { label: 'Aug', value : 0 },
        { label: 'Sep', value : 0 },
        { label: 'Oct', value : 0 },
        { label: 'Now', value : 0 },
        { label: 'Dec', value : 0 },

    ];

    for (const expense of props.expenses // expense in props.expenses라고 했더니 오류가 남 props.expenses는 객체가 아닌 배열이기 때문에 of를 써야한다. 
        ) {
        const expenseMonth = expense.date.getMonth() // start 0 => Jan
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints = {chartDataPoints}/>
}

export default ExpensesChart