import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


let alert초기값 = true;

const reducer2 = (state = alert초기값, 액션) => {
    if (액션.type === 'alert닫기') {
      state = false;
      return state;
    } else {
      return state
    }
}




// 모든 컴포넌트가 리덕스 공유하게끔 , 감싸진 애들은 props없이도 state공유 가능

let 초기값 = [
  {id : 55, name : '멋진 신발', quan : 2 },
  {id : 77, name : '예쁜 모자', quan : 3 },
  {id : 99, name : '강한 손톱', quan : 6 }
]

// es6신문법 state = 초기값은
// 파라미터에 값이없으면 초기값을 넣겠다. 하는 문법
const reducer = (state = 초기값, 액션) => {

    if (액션.type === '항목추가') {
      let copy = [...state]
      copy.push(액션.payload);
      return copy;
    }


    if ( 액션.type[0] === '수량증가') {
      let copy = [...state]
      console.log(copy);
      copy[액션.type[1]].quan++; // 이 데이터를 1 더해주세염
      return copy;
    }
    
    if ( 액션.type[0] === '수량감소' ) {

      let copy = [...state]
      console.log(copy);
      copy[액션.type[1]].quan--;
      return copy;
    }

    else {
      return state
    }
}

// let store = createStore(reducer);
let store = createStore(combineReducers({reducer, reducer2})); // 리듀스 다 가지고 오는 것

// store안에있는 state들을 모두 공유해서 쓰는것
// reducer는 수정된 state를 뱉는 함수

// BrowserRouter vs HashRouter Hash는 url에 #기호가 있다. 좀더 안전하게 서버에게 요청하기 위해서. 사이트 주소 뒤에 #이 있는것은 서버로 전달X

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
