import styled from 'styled-components';

export const EditEventDialogContainer = styled.div`
  width: 450px;
  min-height: 450px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 ${props => props.theme.colors.black}50;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const DialogTitle = styled.p`
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
`;

export const DialogForm = styled.div`
  margin-top: 10px;
  padding: 0 20px;
  flex: 1;
`;

export const DialogButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  font-size: 40px;
  line-height: 33px;
  width: 40px;
  height: 40px;
`;