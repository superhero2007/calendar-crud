import React from 'react';
import {momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import {CalendarWrapper, CalendarDate, StyledCalendar} from './styles';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export const Calendar = ({events, date, ...props}) => {
  const localizer = momentLocalizer(moment);

  return (
    <CalendarWrapper>
      <CalendarDate>{moment(date).format('dddd, MMM DD, YYYY')}</CalendarDate>
      <StyledCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        view="day"
        toolbar={false}
        selectable={true}
        onSelecting={() => false}
        formats={{
          timeGutterFormat: "LT"
        }}
        style={{ height: 350, width: 400 }}
        {...{date, events}}
        {...props}
      />
    </CalendarWrapper>
  )
};