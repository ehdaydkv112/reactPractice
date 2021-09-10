import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Alert } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { dispatch } from 'redux';

// 리덕스 쓰는 이유
// props없이 모든 컴포넌트가 state를 갖다쓰기 가능
// 깊은 하위컴포넌트들도 props 여러번 전송없이 state를 직접 갖다 쓸 수 있음
// 모든 컴포넌트가 직접 데이터 꺼내 쓸 수 있음

// state 데이터 관리 가능
// redux에선 state 데이터의 수정방법을 미리 정의
// 데이터 수정할떈 dispatch

const Cart = (props) => {

let state = useSelector((state) => state.reducer);

let dispatch = useDispatch()
// tr 가로 (행) 만들기
// td/th 세로 (열) 만들기

const [alert, alertChange] = useState();

const Cartlist = state

  return (
    <div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>수량</th>
          </tr>
        </thead>

        <tbody>

        {
      state.map(function(el, i) {
        return (
            <tr key = {i}>
            <td>{ el.id }</td>
            <td>{ el.name }</td>
            <td>{ el.quan }</td>
            <td><button onClick={() => {dispatch({type : ['수량증가', i]}) }}>
              +
            </button>
            
            <button onClick={() => {dispatch({type : ['수량감소', i] }) }}>
              -
            </button>
            
            </td>
          </tr>
          )
        })
    }

        </tbody>
      </Table>

      {
        props.alert열렸니 === true
        ?
        (<Alert variant='primary'>
        <div className="my-alert2">
          <p>지금 사면 깎아드려용</p>
          <button onClick={() => {props.dispatch({type: 'alert닫기'}) }}>닫기</button>
        </div>
        </Alert>)
        : null
      }
    </div>
    )
}

//컴포넌트에서 store에있는 state쓰려면
// 1.function 만들기
// 2. export default connect()()



// store데이터들을 props로 바꿔준 것
// redux store 데이터 가져와서 props로 변환해주는 함수, 일종의 props화 시켜주세요 느낌

// const state를props화 = (state) => {
//   return {
//     state : state.reducer,
//     alert열렸니 : state.reducer2
//     // state라는 이름의 props로 바꿔주는 것
//   }
// }

export default Cart