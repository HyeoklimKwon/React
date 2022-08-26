import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// publibc에 있는 index.html안에 있는 id=root 파일을 가지고 온다. 
root.render(<App />);
// 선택된 div 가 App으로 대체됨 