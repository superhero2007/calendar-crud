import styled, {css} from 'styled-components';

export const StyledButton = styled.div`
  border-radius: 10px;
  height: 40px;
  min-width: 112px;
  background-color: ${props => props.theme.colors.pink};
  box-shadow: 0 2px 4px 0 ${props => props.theme.colors.pink}50;
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  transition: opacity 1s;
  
  &:hover {
    opacity: 0.7;
  }
  
  &, & * {
    cursor: pointer;
  }
  
  ${props => props.outlined && css`
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.borderColor || props.theme.colors.pink};
    color: ${props => props.borderColor || props.theme.colors.pink};
  `}
`;

export const ButtonLabel = styled.label`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
`;