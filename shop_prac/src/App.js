import React, { useState } from 'react';
import { Navbar, Container, Nav, Jumbotron, Button  } from 'react-bootstrap';
import './App.css';
import { Goods, Header, Promotion, GoodsDetail } from './components';
import { Route, Switch } from 'react-router-dom';
import Data from './data';

// src에 넣은 파일은 파일명 변경 + 압축 됨
// public에 넣은 파일은 보존됨

function App() {

  let [shoes, shoesChange] = useState(Data);

  return (
    <div className="App">

      <Header />
      <Switch>
      <Route exact path="/"><Promotion /><Goods goodsInfo={shoes} /></Route>
      <Route path="/detail/:goodsId"> <GoodsDetail goodsDetail={shoes}/> </Route>
      {/* <Route path="/어쩌구" component={???}></Route> */}
      </Switch>
  </div>

  );
}

export default App;
