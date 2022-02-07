import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: ${props => props.theme.colors.card};
  border-bottom: 1px solid ${props => props.theme.colors.black};
  font-size: 28px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  padding: 0 0 5px;
  margin-bottom: 50px;
`;