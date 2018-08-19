import React from 'react';
import { connect } from 'react-redux';

const DownloadButton = (props) =>
    <a download={props.filename}
        href={URL.createObjectURL(new Blob([props.content], { type: 'application/json' }))}>
        Download
    </a>

DownloadButton.defaultProps = {
    filename: 'events.json'
}

export default connect(state => ({ content: JSON.stringify(state.eventsData) }))(DownloadButton);