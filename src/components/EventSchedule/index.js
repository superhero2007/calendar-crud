import React, {useEffect, useMemo, useState} from 'react';
import moment from 'moment';

import {Calendar} from '../common/Calendar';
import {DatePicker} from '../common/DatePicker';
import {EditEventDialog} from '../EditEventDialog';
import {EventScheduleContainer, CardHeader, CardTitle, CloseButton} from './styles';

import {getEvents, addEvent as addEventService, updateEvent as updateEventService, removeEvent as removeEventService} from '../../apis/event';

export const EventSchedule = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const [showEditEventDialog, setShowEditEventDialog] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState();
  const [selectedEvent, setSelectedEvent] = useState();

  const editingEvent = useMemo(() => {
    if (selectedSlot !== undefined) {
      return {
        ...selectedSlot,
        title: '',
      };
    }
    if (selectedEvent !== undefined) {
      return selectedEvent
    }
  }, [selectedSlot, selectedEvent]);

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    handleShowEditEventDialog();
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    handleShowEditEventDialog();
  };

  const handleShowEditEventDialog = () => {
    setShowEditEventDialog(true);
  };

  const handleCloseEditEventDialog = () => {
    setSelectedSlot(undefined);
    setSelectedEvent(undefined);
    setShowEditEventDialog(false);
  };

  const handleRemoveEvent = async (eventId) => {
    await removeEventService();
    // await fetchEvents();

    // TODO: remove it and it id used for only show visual update
    setEvents(events.filter(({id}) => id !== eventId));
  };

  const handleUpdateEvent = async (updatedEvent) => {
    if (selectedSlot) {
      await addEventService(updatedEvent);

      // TODO: remove it and it id used for only show visual update
      setEvents([...events, {
        ...updatedEvent,
        id: Math.random() * 10000,
      }]);
    } else {
      await updateEventService(updatedEvent);

      // TODO: remove it and it id used for only show visual update
      setEvents(events.map((event) => event?.id === updatedEvent?.id ? updatedEvent : event));
    }
    // await fetchEvents();
  };

  const fetchEvents = async () => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const {data: eventsData = []} = (await getEvents(formattedDate)) || {};
    setEvents(eventsData.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    })));
  };

  useEffect(() => {
    fetchEvents().then();
  }, [date]);

  return (
    <EventScheduleContainer>
      <CardHeader>
        <CardTitle>Schedule an Appointment</CardTitle>
        <DatePicker onChange={setDate} {...{date}} />
      </CardHeader>
      {showEditEventDialog ? (
        <EditEventDialog
          onClose={handleCloseEditEventDialog}
          onRemove={handleRemoveEvent}
          onChange={handleUpdateEvent}
          event={editingEvent}
          {...{events}}
        />
      ) : (
        <Calendar
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          {...{date, events}}
        />
      )}
      <CloseButton>×</CloseButton>
    </EventScheduleContainer>
  );
};