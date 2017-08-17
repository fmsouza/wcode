import React from 'react';
import MonacoEditor from 'react-monaco-editor'; // Reference: https://github.com/superRaytin/react-monaco-editor
import './styles.css';

export default class TextEditor extends React.Component {

    state = { value: '', language: '', editor: null };

    editor = null;
    
    // Reference: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html
    options = {
        minimap: { enabled: false },
        selectOnLineNumbers: true,
        theme: 'vs-dark'
    };

    get visible() {
        return this.state.value && this.state.language;
    }

    get code() {
        return this.state.value;
    }

    editorDidMount(editor, monaco) {
        editor.focus();
        this.editor = editor;
    }

    loadCode(value, language) {
        const { body } = this.props;
        this.setState({ value, language });
        this.editor.layout(body);
    }

    render() {
        return (
            <div className={`TextEditor ${this.visible && 'visible'}`}>
                <MonacoEditor
                    {...this.state}
                    options={this.options}
                    onChange={(value) => this.setState({ value })}
                    editorDidMount={(editor, monaco) => this.editorDidMount(editor, monaco)}
                />
            </div>
        );
    }
}