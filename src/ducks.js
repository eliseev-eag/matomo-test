import { combineReducers } from 'redux';
import { combineActions, createAction, handleActions } from 'redux-actions';
import { orderBy, uniqueId } from 'lodash-es';

const loadEventsRequest = createAction('loadEventsRequest');
const loadEventsSuccess = createAction('loadEventsSuccess');
const loadEventsFailure = createAction('loadEventsFailure');

export const loadEvents = () => async dispatch => {
  dispatch(loadEventsRequest());
  try {
    const eventsData = await import('./events.json');
    dispatch(loadEventsSuccess(eventsData));
  } catch (error) {
    dispatch(loadEventsFailure(error));
  }
};

export const editEvent = createAction('editEvent');
export const deleteEvent = createAction('deleteEvent');
export const addEvent = createAction('addEvent');

export const reducer = combineReducers({
  requestWorking: handleActions(
    {
      [loadEventsRequest]: () => true,
      [combineActions(loadEventsSuccess, loadEventsFailure)]: () => false,
    },
    false,
  ),
  eventTypes: handleActions(
    {
      [loadEventsSuccess]: (state, data) => data.payload.eventTypes,
    },
    [],
  ),
  persons: handleActions(
    {
      [loadEventsSuccess]: (state, data) => data.payload.persons,
    },
    [],
  ),
  toponyms: handleActions(
    {
      [loadEventsSuccess]: (state, data) => data.payload.toponyms,
    },
    [],
  ),
  events: handleActions(
    {
      [loadEventsSuccess]: (state, data) =>
        orderBy(
          data.payload.events.map(event => ({
            ...event,
            startDate: new Date(event.startDate),
            endDate: new Date(event.endDate),
          })),
          event => event.endDate - event.startDate,
          'desc',
        ),
      [editEvent]: (state, data) =>
        state.map(event =>
          event.id === data.payload.id ? data.payload : event,
        ),
      [deleteEvent]: (state, data) =>
        state.filter(event => event.id !== data.payload.id),
      [addEvent]: (state, data) => [
        ...state,
        { ...data.payload, id: uniqueId() },
      ],
    },
    [],
  ),
  errorOccured: handleActions(
    {
      [loadEventsFailure]: () => true,
    },
    false,
  ),
});
