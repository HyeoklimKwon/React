## 리액트에서 컴포넌트 활용 및 Props 사용

1. 리액트 컴포넌트

​	Vue와 마찬가지로 리액트에서 컴포넌트들을 활용하여 유지 및 보수가 용이하게 코드를 구조적으로 작성한다.

```javascript
# App.js
import Expenses from "./components/Expenses/Expenses";
// 불러올 컴포넌트를 import 해준다.

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  // 해당 컴포넌트에 보내줄 데이터 생성 
  
  return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses expenses = {expenses}/> 
	  // 해당 데이터를 속성 이름에 {}안에 넣어서 보내준다.
    </div>
  );
}

export default App;
```

위와 같이 해당 컴포넌트에 속성 이름값을 지정하고 태그 안에 변수를 넣어서 보내주면 해당 컴포넌트 파일안 함수 ()안에 전체로 감싸서 보내주게 된다. 즉, 해당 데이터를 바로 접근하는 것이 아니라 props,items등 이름을 붙여서 그것의 지정된 속성을 가져올 수 있다. 

```javascript
# Expenses.js

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {   

    return (
     // JSX 문법에서는 class를 className이라고 변환해서 사용해야한다. 왜냐하면 이것은 html이 아니라 사실 html처럼 보이게 해주는 JS구문이기 
     // 때문에 class가 JS에서 예약어로 이미 지정이 되어었기 떄문이다. 
    <Card className="expenses">
       // 위의 컴포넌트의 경우 래퍼 컴포넌트라고 하는데 반복적으로 사용하는 css같은 경우 하나의 컴포넌트를 만들어서 전체를 감싸주는
        // 형태의 컴포넌트로 활용할 수 있다. 이를 위해서는 다른 컴포넌트와 조금 다른 형식으로 작성해야한다. 
      <ExpenseItem 
        title={props.expenses[0].title} 
        amount = {props.expenses[0].amount} 
        date = {props.expenses[0].date}> 
        // 위의 코드처럼 props를 받아서 전 코드에서 expenses에 변수를 담아주었기 때문에 expenses 속성으로 데이터에 접근할 수 있다. 
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

    );    
}
export default Expenses
```

```javascript
#Card.js
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    // 추가적인 class를 받기 위해 설정     
    return <div className= {classes}>{props.children}</div>;
    // props.children 같은 경우 미리 설정해주지 않은 default설정인데 이는 이 사이에 들어갈 공간을 확보해주는 속성이다.
    // 만약 props.children을 설정해주지 않은 경우, 위의 코드에서 래퍼 컴포넌트 안에 있는 구성요소들이 나타나지 않는다.
}

export default Card;
```

