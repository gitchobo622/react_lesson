import { useState } from "react";


const Component0202 = () => {

    let [cnt , setCnt ] = useState(0);

    let a = 10;
    const banana = (e) => {
        console.log('안녕');
        console.log(e.target);
    }

    const minusHandler = () => {
        setCnt ( cnt - 1);

    }
    const plusHandler = () => {
        setCnt ( cnt + 1);
        }



    return (
<div className="box">
        <h1>컴포넌트 0202영역입니다.</h1>
        <p>a에 들어있는 값 : {a} </p>
        <p>cnt에 들어있는 값 : {cnt} </p>
        <button onClick={minusHandler}>-</button>
        <button onClick={plusHandler}>+</button>
        <button onClick={banana}>클릭해보세요!</button>
</div>

    );
}

export default Component0202;