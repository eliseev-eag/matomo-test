import { createAction, handleActions } from 'redux-actions';
import { orderBy } from 'lodash-es';

const defaultState = {
    requestWorking: false,
    eventsData: {
        events: [],
        eventTypes: [],
        persons: [],
        toponyms: []
    },
    errorOccured: false,
    timeline: {
        start: new Date(100, 0, 0),
        end: new Date()
    }
}

const loadEventsRequest = createAction('loadEventsRequest');
const loadEventsSuccess = createAction('loadEventsSuccess');
const loadEventsFailure = createAction('loadEventsFailure');

export const changeTimelineRange = createAction('changeTimelineRange');

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
    [loadEventsSuccess]: (state, data) => (
        {
            ...state,
            eventsData: {
                ...data.payload,
                events: orderBy(data.payload.events.map(event => ({
                    ...event,
                    startDate: new Date(event.startDate),
                    endDate: new Date(event.endDate),
                })), event => event.endDate - event.startDate, 'desc')
            }
        }),
    [loadEventsFailure]: (state, data) => ({ ...state, requestWorking: false, errorOccured: true }),
    [changeTimelineRange]: (state, { payload: { start, end } }) => ({ ...state, timeline: { start, end } })
}, defaultState);
