import React from 'react';
import { inject, observer } from 'mobx-react';
import * as Action from 'common/actions';
import FileTab from '../fileTab';
import TextEditor from '../textEditor';
import './styles.css';
import { debounce } from 'lodash';

@inject('fileBuffer')
@observer
export default class Editor extends React.Component {

    state = { body: { width: 0, height: 0 } };
    textEditor = React.createRef();

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', () => this.updateDimensions());
        Action.setEditorViewHandler(this);
    }
    
    componentWillUnmount() {
        Action.setEditorViewHandler(null);
        window.removeEventListener('resize', () => this.updateDimensions());
    }

    updateDimensions =
        debounce(() => {
            const { clientHeight, clientWidth } = this.refs.editor;
            const width = clientWidth;
            const height = clientHeight - 36;
            this.setState({ body: { width, height } });
            if (this.textEditor != null) {
                this.textEditor.updateDimensions();
            }
        }, 100);

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

    setRef = (input) => {
        this.textEditor = input;
        Action.setEditorHandler(input);
    }

    render() {
        return (
            <div className="Editor" ref="editor">
                {this.renderOpenedFileTabs()}
                <div className="editorView">
                    <TextEditor ref={this.setRef} {...this.state} />
                </div>
            </div>
        );
    }
}