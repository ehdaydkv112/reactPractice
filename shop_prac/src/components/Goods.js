import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Goods = (props) => {

  let [재고, 재고변경] = useState([10,11,12]);
  let 재고context = React.createContext();
  
  // 같은 값을 공유하는 범위 생성
  // 같은 값을 공유할 HTML을 범위로 싸매기
  // let 재고 = useContext(재고context); 이런식으로 하면 재고context에잇는거 다 공유됨
  // 다른파일에서 하려면 export 써서 쓰면 됨

  let history = useHistory();
  const goodsInfo = props.goodsInfo

  return (
      <div className="container">

        <재고context.Provider value={재고}>

        <div className="row">
        {
      goodsInfo.map(function(el, i) {
        return (
          <div className="col-md-4" onClick={() => {
            history.push(`/detail/${el.id}`)
          }}>
              <img src={`https://codingapple1.github.io/shop/shoes${el.id + 1}.jpg`} alt="shoes" width="100%" />
              <h4> {el.title} </h4>
              <p> {el.content } </p>
              <p> {el.price} </p>
          </div>
          )
        })
        }
      </div>

      </재고context.Provider>

    </div>
    )
}

export default Goods;