import styled from "@emotion/styled"
const MyH1 = styled.h1`
    margin: 0;
    font-size: 20px;
    color: skyblue;
    `;

const ComponentContent = styled.p`
    margin : 0;
    font-size: 16px;
    ${ props => props.title === "대모험" ? 'font-weight:900;' : 'font-weight:100;'
     }

`;


const Component01 = ()=> {
    return (
        <div className='box' >
            <h1>컴포넌트 영역입니다.</h1>
            <MyH1>내가 만든 h1태그</MyH1>
            <ComponentContent title='대모험'>
                Emotion을 통해 스타일 입혀진 컴포넌트 만들고 해당 컴포넌트 사용하면
                실제 html파일에는 class이름으로 스타일이 적용된 태그가 그려짐
            </ComponentContent>
            <ComponentContent title='홍길동'>
                Emotion을 통해 스타일 입혀진 컴포넌트 만들고 해당 컴포넌트 사용하면
                실제 html파일에는 class이름으로 스타일이 적용된 태그가 그려짐
            </ComponentContent>
        </div>

    );
}

export default Component01;