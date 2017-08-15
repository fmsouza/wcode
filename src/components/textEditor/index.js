import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './styles.css';

export default class TextEditor extends React.Component {

    state = { code: '' };
    
    options = {
        minimap: false,
        selectOnLineNumbers: true,
        theme: 'vs-dark'
    };

    componentWillMount() {
        const { content } = this.props;
        this.setState({ code: content });
    }

    editorDidMount(editor, monaco) {
        editor.focus();
    }
    
    onChange(code, e) {
        this.setState({ code });
    }

    render() {
        return (
            <div className="TextEditor">
                <MonacoEditor
                    {...this.props}
                    value={this.state.code}
                    options={this.options}
                    onChange={(newValue, e) => this.onChange(newValue, e)}
                    editorDidMount={(editor, monaco) => this.editorDidMount(editor, monaco)}
                />
            </div>
        );
    }
}