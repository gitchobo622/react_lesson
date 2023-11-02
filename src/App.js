import { useState } from 'react';
import Component0202 from './pages/02-02state';
import Component01 from './pages/study/01-01basic';
import Component0201 from './pages/study/02-01emotion';

import styled from '@emotion/styled';



const App = () => {
    const [target, setTarget] = useState('01')

    const btn01 = () => {
        setTarget('01')
    }
    
    const btn0201 = () => {
        setTarget('0201')
    }
    
    const btn0202 = () => {
        setTarget('0202')
    }

    return (
        <div className='box'>
            <h1>앱 영역입니다</h1>
            <button onClick={btn01}> 01컴포넌트</button>
            <button onClick={btn0201}>0201컴포넌트</button>
            <button onClick={btn0202}>0202컴포넌트</button>
            {target === '01' ? <Component01/> : 
                target === '0201' ? <Component0201/> : 
                    <Component0202/>}
            
        </div>
    );
}

export default App;
