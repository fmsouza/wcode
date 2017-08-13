import React from 'react';
import { FileTab } from '../fileTab';
import { TextEditor } from '../textEditor';
import './styles.css';

export class Editor extends React.Component {

    state = { files: [], selected: null, body: { width: 0, height: 0 } };

    get selectedFile() {
        const { files, selected } = this.state;
        return selected && files[selected];
    }

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

    view(file) {
        const { files } = this.state;
        const selected = files.length;
        files.push(file);
        this.setState({ files, selected });
    }

    renderOpenedFileTabs() {
        const { files } = this.state;
        if (files.length === 0) return null;
        return files.map((file, key) => <FileTab file={file} />);
    }

    renderEditorView() {
        const file = this.selectedFile;
        if (!file) return null;
        return <TextEditor content={file.src} language={file.language} {...this.state.body} />;
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