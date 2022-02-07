import styled from 'styled-components';

export const EventScheduleContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.colors.card};
  border-radius: 28px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CardTitle = styled.h1`
  font-size: 40px;
  line-height: 42px;
  font-weight: 700;
  margin: 60px 0;
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