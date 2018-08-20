import React, { Component } from 'react';
import { Row } from 'antd';
import { DownloadButton } from './DownloadButton';
import { EditorTable } from './EditorTable';

class DataEditorPage extends Component {
    static ROUTE = "editor";

    onSelect = record => console.log('clicked row =', record);

    render() {
        return (
            <div>
                <Row>
                    <DownloadButton />
                </Row>
                <Row>
                    <EditorTable onSelect={this.onSelect} />
                </Row>
            </div>
        );
    }
}

export { DataEditorPage };