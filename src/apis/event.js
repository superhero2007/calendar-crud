import {ApiServer} from './axios';

async function getEvents(date) {
  try {
    return await ApiServer.get(`/events?date=${date}`);
  } catch (e) {
    console.log('getEvents', e);
  }
}

async function addEvent(event) {
  try {
    return await ApiServer.post('/events', event);
  } catch (e) {
    console.log('addEvent', e);
  }
}

async function updateEvent(event) {
  try {
    return await ApiServer.post('/event', event);
  } catch (e) {
    console.log('updateEvent', e);
  }
}

async function removeEvent(eventId) {
  try {
    return await ApiServer.delete(`/event/${eventId}`);
  } catch (e) {
    console.log('removeEvent', e);
  }
}

export {
  getEvents,
  addEvent,
  updateEvent,
  removeEvent
}