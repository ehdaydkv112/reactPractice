/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['강남역 참치', '강남 우동 맛집', '리액트 독학']);
  let [하트, 하트변경] = useState(0);

  let [modal, modal변경] = useState(false);
  //리액트에서 UI를 만들떄 state 데이터를 이용
  //onoff성 스위치

  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경 ] = useState('');

  function modal바꾸기() {
    modal === true
    ? modal변경(false)
    : modal변경(true)
  }

  // state는 그냥 변경 안됨
  // state 변경함수로 변경해야 재렌더링이 제대로 일어남

  function 글추가(a) {
    let newArray = [...글제목];
    newArray.unshift(a)
    글제목변경(newArray)
  }

  // 리액트 대원칙 : immutable data 직접 수정을 못하게 하기 떄문
  // state이 복사본을 만들어 수정하기
  // deep copy해서 수정하기 [...복사할 것] // array나 object는

  // function 반복된UI() {

  //   const 어레이 = [];
  //   for (let i = 0; i < 3; i++) {

  //     어레이.push(<div>안녕</div>);
  //   }
  //   return 어레이
  // }

  function 하트추가() {
    하트변경(하트 + 1)
  }
  // for반복문 보통 함수 안에서 사용하고 array에 HTML 추가하는 방식

  return (
  <div className="App">
      <div className="black-nav">
      <div className="text">개d발 Blog</div>
      </div>
  {
    글제목.map(function(글, i) {
      // 반복문은 key=가 필요함
      return (
        <div className="list" key={i}>
        <h3 onClick={ () => { 누른제목변경(i) } } > { 글 } <span onClick={하트추가}> ♥ {하트} </span> </h3>
        <p> 2월 17일 발행</p>
        <hr />
        </div>
      )
    })
  }

  {/* 뭔가 입력이 될 때 안의함수가 실행됨 */}
  {/* e.target.value 사용자가 입력한 값을 가지고 옴 */}
  {/* <input onChange={ (e)=> { 입력값변경(e.target.value) } } /> */}

  <div className="publish">
    <input onChange={ (e)=> { 입력값변경(e.target.value) }} />
    <button onClick={ (e) => { 글추가(입력값) }} >저장</button>
  </div>


  <button onClick={ modal바꾸기 }>열고 닫기</button>

  {/* { 반복된UI() } */}

    {
      modal === true
      ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal>
      : null
    }
    
  </div>
  );
}
// 텅빈 Html은 null


// 컴포넌트
function Modal(props) {

  return (
    <>
    <div className="modal">
    <h2> { props.글제목[props.누른제목] } </h2>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
    </>
  )
}

function board() {
  return (
    <>

    </>
  )
}

// 컴포넌트는 대문자로 시작
// return안에 있는건 태그 하나로 묶어야 함
// <> 이건 프레그먼트 문법
// 반복적으로 출현하는 HTML덩어리들은 컴포넌트로 만드는게 좋음
// 자주 변경되는 HTML UI들 컴포넌트로
// 다른페이지 만들 떄도 컴포넌트로

// ui만드는법
// 1. UI와 관련된 중요 정보들을 state로 저장해놓고
// state에 따라서 ui가 수정되게 만들면 된다.

export default App;