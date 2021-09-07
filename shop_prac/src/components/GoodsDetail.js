import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import styled from 'styled-components';
import "../css/detail.scss";

const GoodsDetail = (props) => {

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
      <박스>
        <제목 className="red">Detail</제목>
      </박스>
      <div className="my-alert-blue">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
        <div className="row">
          <div className="col-md-6"> <img src={goodsDetail[goodsId].img} width="100%" alt="itemDetail"/></div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{goodsDetail[goodsId].title}</h4>
                <p>{goodsDetail[goodsId].content}</p>
                <p>{goodsDetail[goodsId].price}</p>
                <button className="btn btn-danger">주문하기</button>
                <button className="btn btn-primary" onClick={() => {
                  history.goBack();
                }}>뒤로가기</button>
            </div>
        </div>
    </div> 
    )
}

export default GoodsDetail