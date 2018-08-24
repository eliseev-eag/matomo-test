import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

const DownloadButton = (props) => {
    const content = JSON.stringify({
        events: props.events,
        eventTypes: props.eventTypes,
        toponyms: props.toponyms,
        persons: props.persons
    });

    return (
        <Button download={props.filename}
            href={URL.createObjectURL(new Blob([content], { type: 'application/json' }))}>
            <Icon type="download" />
            Export to json
    </Button>
    );
}

DownloadButton.defaultProps = {
    filename: 'events.json'
}

const connectedButton = connect(state => ({
    events: state.events,
    eventTypes: state.eventTypes,
    toponyms: state.toponyms,
    persons: state.persons
}))(DownloadButton);

export { connectedButton as DownloadButton }