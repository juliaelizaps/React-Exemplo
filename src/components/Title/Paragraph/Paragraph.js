import styled from 'styled-components';

const StyledParagrah = styled.div`
color:black;
font-size: 30px;
text-align: left;
`;

function Paragraph(props) {
    return (<>
        <>
        <StyledParagrah>{props.txt}</StyledParagrah>
        <br/>
        </>
    
    </>);
}

export default Paragraph;