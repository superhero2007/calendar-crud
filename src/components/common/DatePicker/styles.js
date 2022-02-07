import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  margin-left: 30px;

  & * {
    cursor: pointer;
    border: none;
    outline: none;
  }
    
  & .react-datepicker-wrapper {
    width: max-content;
    
    input {
      width: 100px;
      font-size: 18px;
      line-height: 18px;
      margin-top: 10px;
      padding: 10px 20px 8px;
      background-color: transparent;
      cursor: pointer;
    }
  }
  
  & .react-datepicker-popper {
    z-index: 999;
  }
`;
