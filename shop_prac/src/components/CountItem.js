import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CountItem = (props) => {
  console.log(props);
  return (
    <div>재고 : {props.info} 개</div>
    )
}

export default CountItem;