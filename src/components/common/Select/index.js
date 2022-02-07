import React from 'react';

import {SelectWrapper, StyledSelect, Label} from './styles';

export const Select = ({label, ...props}) => {
  return (
    <SelectWrapper>
      {label && <Label>{label}</Label>}
      <StyledSelect {...props} />
    </SelectWrapper>
  )
};