import React, { Component } from 'react';
import { Timeline } from './EventsTimeline';

class DataViewPage extends Component {
    static ROUTE = "view";

    render() {
        return (
            <Timeline />
        );
    }
}

export { DataViewPage };