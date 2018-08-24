import { combineReducers } from 'redux';
import { createAction, handleActions, combineActions } from 'redux-actions';
import { orderBy } from 'lodash-es';

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

export const saveEvent = createAction('saveEvent');

const timelineDefaultState = {
    start: new Date(100, 0, 0),
    end: new Date()
}

export const reducer = combineReducers({
    requestWorking: handleActions({
        [loadEventsRequest]: () => true,
        [combineActions(loadEventsSuccess, loadEventsFailure)]: () => false,
    }, false),
    eventsData: combineReducers({
        eventTypes: handleActions({
            [loadEventsSuccess]: (state, data) => data.payload.eventTypes
        }, []),
        persons: handleActions({
            [loadEventsSuccess]: (state, data) => data.payload.persons
        }, []),
        toponyms: handleActions({
            [loadEventsSuccess]: (state, data) => data.payload.toponyms
        }, []),
        events: handleActions({
            [loadEventsSuccess]: (state, data) => orderBy(data.payload.events.map(event => ({
                ...event,
                startDate: new Date(event.startDate),
                endDate: new Date(event.endDate),
            })), event => event.endDate - event.startDate, 'desc'),
            [saveEvent]: (state, data) =>
                state.map(event => event.id === data.payload.id ? data.payload : event)
        }, []),
    }),
    errorOccured: handleActions({
        [loadEventsFailure]: () => true
    }, false),
    timeline: handleActions({
        [changeTimelineRange]: (state, { payload: { start, end } }) => ({ start, end })
    }, timelineDefaultState)
})
