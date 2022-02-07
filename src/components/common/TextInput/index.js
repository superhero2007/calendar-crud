import React from 'react';

import {StyledInput} from './styles';

export const TextInput = ({onChange, ...props}) => {
  const handleChangeValue = e => {
    onChange && onChange(e.target.value);
  };

  return (
    <StyledInput type="text" onChange={handleChangeValue} {...props} />
  )
};