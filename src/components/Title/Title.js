import styled from 'styled-components';

const StyledText = styled.div`
    color:blue;
    font-size: 50px;
    text-align: center;
`;

function Title(props) {
    return (<>
        <>
        <StyledText>{props.txt}</StyledText>
        <br/>
        </>
    
    </>);
}
export default Title;