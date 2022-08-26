## JSX (JavaScriptXML)란?

React에서 특별하게 만든 코드 구문입니다!

```javascript
function App() {
  return (
    <div>
      <h1>Let's get started!</h1>
    </div>
  );
}

export default App;
// 일반적으로 javascript 안에 html 요소를 넣어서 사용하지 않지만 React의 JSX 기능으로 가능함! 

```

우리가  코드를 작성하면, 이는 브라우저에서 사용하는 코드로 자동적으로 변환이 됩니다. 

개발자로서 작성이 쉽고 브라우저에서는 잘 작동하는 코드

<img src="JSX.assets/제목 없음.png" style="zoom:33%;" /> <img src="JSX.assets/제목 없음-16614469745182.png" style="zoom: 50%;" />

다음과 같이 (오른쪽)개발자가 작성한 코드가 JSX를 통해 브라우저용 코드(왼쪽)로 변환

## 변환 과정

원래 모든 JSX 파일들은 import React from ‘react’  구문이 항상 필요했다.

```jsx
return React.createElemnet(
	'div', 
	{}, 
	React.createElement('h2,{}, 'Let's get started!'),
	React.createElement(Expenses, {items: expenses})
)
```

JSX 코드를 사용하지 않으면 위의 코드처럼 작성을 해야했다. 하지만 JSX 를 통해 html처럼 구성을 하고 위의 코드로 자동적으로 변환이 된다고 볼 수 있음.(아래 코드)

```jsx
return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses expenses = {expenses}/>    
    </div>
  ); 
// JSX를 사용했을 경우
```

따라서 return은 하나의 객체만을 지정해주어야 하기 때문에 항상 래퍼 태그가 필요한 것이다.
