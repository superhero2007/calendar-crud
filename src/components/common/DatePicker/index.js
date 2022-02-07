import React from 'react';
import DatePickerComponent from 'react-datepicker';

import {DatePickerWrapper} from './styles';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker = ({date, onChange}) => {
  return (
    <DatePickerWrapper>
      <DatePickerComponent selected={date} {...{onChange}} />
    </DatePickerWrapper>
  );
};