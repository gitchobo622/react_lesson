import styled from '@emotion/styled';

const MyButton = styled.button`
    &:hover{
        background-color: yellow;
    }
    & > span{
        color: green;
    }

    background: none;
    cursor: pointer;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid black;
    color: blue;
    ${(props) => {
        return props.variant === 'contained' && `
            color: white;
            background-color: blue;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08);
        `;
    }}

    ${(props) => {
        return props.variant === 'outlined' && `
            border: 2px solid red;
        `;
    }}
`;

const Component0201 = () => {
    return (
        <div className="box">
            <h1>Component0201영역입니다</h1>
            <MyButton variant="text">1번종류</MyButton>
            <MyButton variant="contained">2번<span>종류</span></MyButton>
            <MyButton variant="outlined">3번종류</MyButton>
            <h2 style={{color:'red', border:'1px solid black'}}>인라인 스타일 추가</h2>
                    </div>

    );

}

export default Component0201;