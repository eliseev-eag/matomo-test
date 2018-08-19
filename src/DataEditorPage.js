import React, { Component } from 'react';
import { DownloadButton } from './DownloadButton';

class DataEditorPage extends Component {
    static ROUTE = "editor";

    render() {
        return (
            <DownloadButton />
        );
    }
}

export { DataEditorPage };