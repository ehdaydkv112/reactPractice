import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { Navbar, Container, Nav, Jumbotron, Button  } from 'react-bootstrap';
import CountItem from "./CountItem";
import styled from 'styled-components';
import "../css/detail.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from 'react-redux';

// 컴포넌트는 어떻게 살다 죽는가 Lifecycle
// 컴포넌트
// 등장
// 업데이트 (재렌더링)
// 퇴장

// 원래는 class컴포넌트들만 사용 가능
// useEffect(() => {
      
// });
// 컴포넌트가 mount되었을떄, 컴포넌트가 update될 때 특정 코드를 실행할 수 있음

// useEffect(() => {
//   let 타이머 = setTimeout(() => { detailStart() }, 2000) // 마운트되거나 업뎃되면 실행
//   return function 어쩌구() {} // 현재 컴포넌트가 사라질 때 실행해 줌
// });

// useEffect 훅 여러개 사용하고 싶으면
// 1. useEffect 여러개 써도 됨, 적은 순서대로 실행 됨
// 특정 state가 변경될 떄만 실행하게끔.

// useEffect(() => {
//   let 타이머 = setTimeout(() => { detailStart() }, 2000)

// }, [useEffect가 실행될 조건]);

// UI 만드는 관습
// 상태값을 저장하고 if문 등을 이용해 state가 true일 떄 보여주기


const GoodsDetail = (props) => {



    let [재고, 재고변경] = useState([10,11,12]);

    const [modal, modalChange] = useState(true);
    const [input, inputChange] = useState('');
    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);

    const detailStart = () => {
      modalChange(false)
    }

    console.log(input);
    useEffect(() => {
      let 타이머 = setTimeout(() => { detailStart() }, 2000)
      console.log('3000')
      return ()=>{ clearTimeout(타이머) } // 이 컴포넌트가 사라지면 타이머를 제거하겠다. 버그에 염두
    }, [modal]);
    // modal이라는 state가 변경이 될 때만 실행이 됨
    // 빈배열이면 등장시 한번만 실행하고 끝남

    let goodsDetail = props.goodsDetail;

    let { goodsId } = useParams();
    let history = useHistory();

    // history.goBack()은 뒤로가기
    // history.push('/') 경로 이동 시키기

    let 박스 = styled.div`
      padding : 20px;
    `

    let 제목 = styled.h4`
      font-size: 25px;
      color : ${ props => props.색상}
    `

    return (
    <div className="container">

      {
        modal === true
        ?
        <>
        <박스><제목 className="red">Detail</제목></박스>
        <div className="my-alert-blue">
        <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      </>
        : null

      }

      { input }
      <input onChange={ (e)=> { inputChange(e.target.value)}}></input>

        <div className="row">
          <div className="col-md-6"> <img src={`https://codingapple1.github.io/shop/shoes${goodsDetail[goodsId].id + 1}.jpg`} width="100%" alt="itemDetail"/></div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{goodsDetail[goodsId].title}</h4>
                <p>{goodsDetail[goodsId].content}</p>
                <p>{goodsDetail[goodsId].price} 원</p>

                <CountItem info={재고[goodsDetail[goodsId].id]}/>
                <button className="btn btn-danger"
                onClick={() => {
                  props.dispatch({type : '항목추가', payload : {
                    id : goodsDetail[goodsId].id, name : goodsDetail[goodsId].title, quan : 재고[goodsDetail[goodsId].id]
                  }})
                  history.push('/cart');
                }}
                >주문하기</button>
                <button className="btn btn-primary" onClick={() => {
                  history.goBack();
                }}>뒤로가기</button>
            </div>
        </div>

        <div>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0) }}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>

        

    </div>

    
    )
}


function TabContent(props){

  useEffect( ()=>{
    props.스위치변경(true); //탭내용 컴포넌트가 로드될 때 true
  });

  if (props.누른탭 === 0){
    return <div>내용0</div>
  } else if (props.누른탭 === 1){
    return <div>내용1</div>
  } else if (props.누른탭 === 2){
    return <div>내용2</div>
  }
}

// store데이터들을 props로 바꿔준 것
// redux store 데이터 가져와서 props로 변환해주는 함수, 일종의 props화 시켜주세요 느낌
const state를props화 = (state) => {
  return {
    state : state.reducer
    // state라는 이름의 props로 바꿔주는 것
  }
}

export default connect(state를props화)(GoodsDetail)