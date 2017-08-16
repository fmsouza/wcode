import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './styles.css';

export default class TextEditor extends React.Component {

    state = { value: '', language: '', editor: null };

    editor = null;
    
    options = {
        minimap: false,
        selectOnLineNumbers: true,
        theme: 'vs-dark'
    };

    get visible() {
        return !(this.state.value && this.state.language);
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
    
    onChange(value, e) {
        this.setState({ value }, () => {
            this.props.onChange && this.props.onChange(value, e);
        });
    }

    render() {
        return (
            <div className="TextEditor">
                <MonacoEditor
                    {...this.state}
                    options={this.options}
                    onChange={(newValue, e) => this.onChange(newValue, e)}
                    editorDidMount={(editor, monaco) => this.editorDidMount(editor, monaco)}
                />
            </div>
        );
    }
}