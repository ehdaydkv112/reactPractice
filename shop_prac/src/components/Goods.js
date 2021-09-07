import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Goods = (props) => {

  let history = useHistory();
  const goodsInfo = props.goodsInfo

  return (
      <div className="container">
        <div className="row">
        {
      goodsInfo.map(function(el, i) {
        return (
          <div className="col-md-4" onClick={() => {
            history.push(`/detail/${el.id}`)
          }}>
              <img src={el.img} alt="shoes" width="100%" />
              <h4> {el.title} </h4>
              <p> {el.content } </p>
              <p> {el.price} </p>
          </div>
          )
        })
        }
      </div>
    </div>
    )
}

export default Goods;