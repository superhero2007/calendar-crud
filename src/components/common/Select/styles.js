import styled from 'styled-components';
import Select from 'react-select';

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.card};
  border-bottom: 1px solid ${props => props.theme.colors.black};
  margin-bottom: 50px;
  padding: 0 0 5px;
`;

export const StyledSelect = styled(Select)`
  font-size: 24px;
`;

export const Label = styled.label`
  font-size: 28px;
  line-height: 28px;
  font-weight: 500;
`;