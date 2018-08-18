import { createAction, handleActions } from 'redux-actions';

const defaultState = {
    requestWorking: false,
    eventsData: {
        events: [],
        eventTypes: [],
        persons: [],
        toponyms: []
    },
    errorOccured: false
}

const loadEventsRequest = createAction('loadEventsRequest');
const loadEventsSuccess = createAction('loadEventsSuccess');
const loadEventsFailure = createAction('loadEventsFailure');

export const loadEvents = () => async dispatch => {
    dispatch(loadEventsRequest());
    try {
        const eventsData = await import('./events.json');
        dispatch(loadEventsSuccess(eventsData));
    }
    catch (error) {
        dispatch(loadEventsFailure(error));
    }
}

export const reducer = handleActions({
    [loadEventsRequest]: (state) => ({ ...state, requestWorking: true }),
    [loadEventsSuccess]: (state, data) => ({ ...state, eventsData: data.payload }),
    [loadEventsFailure]: (state, data) => ({ ...state, requestWorking: false, errorOccured: true })
}, defaultState);
