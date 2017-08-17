import React from 'react';
import { inject, observer } from 'mobx-react';
import * as Action from 'common/actions';
import FileTab from '../fileTab';
import TextEditor from '../textEditor';
import './styles.css';

@inject('fileBuffer')
@observer
export default class Editor extends React.Component {

    state = { body: { width: 0, height: 0 } };

    componentDidMount() {
        window.addEventListener('resize', () => this.updateDimensions());
        this.updateDimensions();
    }
    
    updateDimensions() {
        const { clientHeight, clientWidth } = this.refs.editor;
        const width = clientWidth;
        const height = clientHeight - 36;
        this.setState({ body: { width, height } });
    }

    onClickTab = (item) => {
        Action.viewCode(item.path);
    }

    renderOpenedFileTabs() {
        const { fileBuffer } = this.props;
        if (fileBuffer.fileStates.length === 0) return null;
        return (
            <div className="editorTabs">
                {fileBuffer.fileStates.map((file, key) => <FileTab key={key} {...file} onClick={this.onClickTab} />)}
            </div>
        );
    }

    render() {
        return (
            <div className="Editor" ref="editor">
                {this.renderOpenedFileTabs()}
                <div className="editorView">
                    <TextEditor ref={Action.setEditorHandler} {...this.state} />
                </div>
            </div>
        );
    }
}