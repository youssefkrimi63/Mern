import styled from 'styled-components';

const StyledNavigation=styled.div`
background: ${props => props.$background};
width: ${props => props.width || '100px'};
height: ${props => props.height || '100px'};`;


const SubContentsStyled=styled.div
`background: ${props => props.$background};
width: ${props => props.width || '100px'};
height: ${props => props.height || '100px'};`;

export  { StyledNavigation, SubContentsStyled };

