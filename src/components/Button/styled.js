import styled from 'styled-components'

export const StyledButton = styled.button`
  background: ${props => props.primary ? '#353866' : 'white'};
  color: ${props => props.primary ? 'white' : '#353866'};
  font-size: 14px;
  padding: 7px 14px;
  border: 1px solid #353866;
  border-radius: 3.5px
`
