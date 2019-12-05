import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flow } from "lodash-es";
import Timeline from "react-visjs-timeline";
import { changeTimelineRange } from "../../ducks";
import { eventsSelector, eventTypesSelector } from "../../selectors";

const TIMELINE_OPTIONS = {
  align: "center",
  minHeight: "400px",
  maxHeight: "400px",
  type: "range",
  tooltip: {
    followMouse: true,
    overflowMethod: "cap"
  },
  snap: null,
  orientation: { axis: "both" },
  zoomMin: 1000 * 60 * 60 * 24 * 5
};

const eventTypesToGroupSelector = flow(eventTypesSelector, eventTypes =>
  eventTypes.map(eventType => ({
    id: eventType.id,
    content: eventType.type
  }))
);

const eventsToTimelineItemsSelector = flow(eventsSelector, events =>
  events.slice(0, 10).map(event => ({
    start: event.startDate,
    end: event.endDate,
    content: event.name,
    duration: event.endDate - event.startDate,
    group: event.type,
    type:
      event.endDate - event.startDate <= 1000 * 60 * 60 * 24 ? "point" : "range"
  }))
);

const EventsTimeline = () => {
  const dispatch = useDispatch();
  const items = useSelector(eventsToTimelineItemsSelector);
  const groups = useSelector(eventTypesToGroupSelector);

  const onRangeChangedHandler = useCallback(
    ({ start, end }) => {
      dispatch(changeTimelineRange({ start, end }));
    },
    [dispatch]
  );

  return (
    <div>
      {items && items.length > 0 && (
        <Timeline
          options={TIMELINE_OPTIONS}
          items={items}
          groups={groups}
          rangechangedHandler={onRangeChangedHandler}
        />
      )}
    </div>
  );
};

export { EventsTimeline as Timeline };
