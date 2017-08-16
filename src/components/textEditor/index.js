import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './styles.css';

export default class TextEditor extends React.Component {

    state = { value: '', language: '' };
    
    options = {
        minimap: false,
        selectOnLineNumbers: true,
        theme: 'vs-dark'
    };

    editorDidMount(editor, monaco) {
        editor.focus();
    }

    loadCode(value, language) {
        this.setState({ value, language });
    }
    
    onChange(value, e) {
        this.setState({ value });
    }

    render() {
        if (!this.state.value && !this.state.language) return null;
        return (
            <div className="TextEditor">
                <MonacoEditor
                    {...this.state}
                    options={this.options}
                    onChange={(newValue, e) => this.props.onChange(newValue, e)}
                    editorDidMount={(editor, monaco) => this.editorDidMount(editor, monaco)}
                />
            </div>
        );
    }
}