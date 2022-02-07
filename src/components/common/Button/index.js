import React from 'react';

import {StyledButton, ButtonLabel} from './styles';

export const Button = ({label, outlined = false, borderColor, ...props}) => {
  return (
    <StyledButton {...{outlined, borderColor}} {...props}>
      {label && <ButtonLabel>{label}</ButtonLabel>}
    </StyledButton>
  );
};