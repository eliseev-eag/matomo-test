import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Timeline from 'react-visjs-timeline';
import { eventsSelector, eventTypesSelector } from 'selectors';

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

const TIMELINE_OPTIONS = {
  align: 'center',
  minHeight: '400px',
  maxHeight: '400px',
  type: 'range',
  tooltip: {
    followMouse: true,
    overflowMethod: 'cap',
  },
  snap: null,
  orientation: { axis: 'both' },
  zoomMin: MILLISECONDS_IN_DAY * 5,
};

const EventsTimeline = () => {
  const events = useSelector(eventsSelector);
  const eventTypes = useSelector(eventTypesSelector);

  const items = useMemo(
    () =>
      events.slice(0, 10).map(event => ({
        start: event.startDate,
        end: event.endDate,
        content: event.name,
        duration: event.endDate - event.startDate,
        group: event.type,
        type:
          event.endDate - event.startDate <= MILLISECONDS_IN_DAY
            ? 'point'
            : 'range',
      })),
    [events],
  );

  const groups = useMemo(
    () =>
      eventTypes.map(eventType => ({
        id: eventType.id,
        content: eventType.type,
      })),
    [eventTypes],
  );

  return (
    <div>
      {items && items.length > 0 && (
        <Timeline options={TIMELINE_OPTIONS} items={items} groups={groups} />
      )}
    </div>
  );
};

export default EventsTimeline;
