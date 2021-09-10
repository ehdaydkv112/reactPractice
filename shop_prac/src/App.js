import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Jumbotron, Button  } from 'react-bootstrap';
import './App.css';
import { Goods, Header, Promotion, GoodsDetail, Cart } from './components';
import { Route, Switch } from 'react-router-dom';
import Data from './data';
import axios from 'axios';

// src에 넣은 파일은 파일명 변경 + 압축 됨
// public에 넣은 파일은 보존됨
// Ajax
// 1. jQuery설치 후 $.ajax()
// 2. axios설치해서 axios.get()
// 3. 썡자바스크립트 fetch()

// axios.post('서버URL', {id: "codasd", pw: "asfasfasf"});

function App() {

  let [shoes, shoesChange] = useState(Data);

  const addItems = (res) => {
    let newArray = [...shoes];
    for (let i = 0; i < res.length; i++) {
      newArray.push(res[i]);
    }
    console.log(newArray)
    shoesChange(newArray);
  }

  useEffect(() => {
    axios
    .get('https://codingapple1.github.io/shop/data2.json')
    // 스테이트변경([...shoes, ...result.data]) 이렇게 하면 shoes에 data 추가하는거 ...shoes는 괄호벗겨서 넣는거
    .then((res) => {

      // 로딩중 UI 안보이게 처리
      addItems(res.data)
    }) // ajax 성공 코드
    .catch(() => {

    }) // ajax 실패 코드
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/"><Promotion /><Goods goodsInfo={shoes} /></Route>
      <Route path="/detail/:goodsId"> <GoodsDetail goodsDetail={shoes}/> </Route>
      <Route path="/cart"> <Cart/> </Route>
      {/* <Route path="/어쩌구" component={???}></Route> */}
      </Switch>

      {/* <button className="btn btn-primary" onClick={() => {
        // 로딩중 UI 띄움
      }}>더보기</button> */}

  </div>
  );
}

export default App;