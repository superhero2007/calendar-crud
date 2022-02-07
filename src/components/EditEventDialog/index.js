import React, {useEffect, useMemo, useState} from 'react';
import moment from 'moment';

import {TextInput} from '../common/TextInput';
import {Select} from '../common/Select';
import {Button} from '../common/Button';
import {EditEventDialogContainer, CloseButton, DialogTitle, DialogForm, DialogButtons} from './styles';
import theme from '../../styles/theme';

import {eventTime, getTimeRangeOptions} from '../../utils/eventTime';
import {beautifyDate} from '../../utils/beautifyDate';

export const EditEventDialog = ({events, event, onClose, onRemove, onChange}) => {
  const [title, setTitle] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const startTimeOptions = useMemo(() => {
    if (endTime?.value && startTime?.value) {
      const availableRange = eventTime(events, startTime?.value, endTime?.value);
      const maxEndTime = moment(endTime?.value).subtract(30, 'm').format('YYYY-MM-DD LT');
      return getTimeRangeOptions(availableRange.start, maxEndTime);
    } else {
      return [];
    }

  }, [events, startTime, endTime]);

  const endTimeOptions = useMemo(() => {
    if (endTime?.value && startTime?.value) {
      const availableRange = eventTime(events, startTime?.value, endTime?.value);
      const minStartTime = moment(startTime?.value).add(30, 'm').format('YYYY-MM-DD LT');
      return getTimeRangeOptions(minStartTime, availableRange.end);
    } else {
      return [];
    }
  }, [events, startTime, endTime]);

  const handleRemoveEvent = () => {
    if (event?.id && onRemove) {
      onRemove(event?.id);
    }
    onClose && onClose();
  };

  const handleUpdateEvent = () => {
    if (onChange) {
      onChange({
        ...event,
        title,
        start: new Date(startTime?.value),
        end: new Date(endTime?.value),
      })
    }
    onClose && onClose();
  };

  useEffect(() => {
    if (event?.title) {
      setTitle(event?.title);
    }
    setStartTime({
      value: beautifyDate(event?.start),
      label: moment(event?.start).format('LT'),
    });
    setEndTime({
      value: beautifyDate(event?.end),
      label: moment(event?.end).format('LT'),
    });
  }, [event]);

  return (
    <EditEventDialogContainer>
      <DialogTitle>Event Details</DialogTitle>
      <CloseButton onClick={onClose}>×</CloseButton>

      <DialogForm>
        <TextInput value={title} onChange={setTitle} />
        <Select label="From" value={startTime} options={startTimeOptions} onChange={setStartTime} />
        <Select label="To" value={endTime} options={endTimeOptions} onChange={setEndTime} />
        <DialogButtons>
          {event?.id !== undefined && (
            <Button label="Delete" borderColor={theme.colors.red} onClick={handleRemoveEvent} outlined />
          )}
          <Button label="Add" onClick={handleUpdateEvent} style={{marginLeft: 'auto'}} />
        </DialogButtons>
      </DialogForm>
    </EditEventDialogContainer>
  )
};