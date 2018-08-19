import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

const DownloadButton = (props) =>
    <Button download={props.filename}
        href={URL.createObjectURL(new Blob([props.content], { type: 'application/json' }))}>
        <Icon type="download" />
        Export to json
    </Button>

DownloadButton.defaultProps = {
    filename: 'events.json'
}

const connectedButton = connect(state => ({ content: JSON.stringify(state.eventsData) }))(DownloadButton);

export { connectedButton as DownloadButton }