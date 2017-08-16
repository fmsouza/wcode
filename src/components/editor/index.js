import React from 'react';
import { inject, observer } from 'mobx-react';
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
        const height = clientHeight - 32;
        this.setState({ body: { width, height } });
    }

    renderOpenedFileTabs() {
        const { fileBuffer } = this.props;
        return fileBuffer.fileStates.map((file, key) => <FileTab key={key} {...file} />);
    }

    renderEditorView() {
        const { fileBuffer: { activeFile, activeFilePath } } = this.props;
        if (!activeFilePath) return null;
        return (
            <TextEditor
                content={activeFile.content}
                language={activeFile.type.split('/').pop()}
                {...this.state.body}
            />
        );
    }

    render() {
        return (
            <div className="Editor" ref="editor">
                <div className="editorTabs">
                    {this.renderOpenedFileTabs()}
                </div>
                <div className="editorView" style={this.state.body}>
                    {this.renderEditorView()}
                </div>
            </div>
        );
    }
}