import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './styles.css';

export default class TextEditor extends React.Component {

    state = { code: '' };
    
    options = {
        selectOnLineNumbers: true,
        theme: 'vs-dark'
    };
    
    requireConfig = {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
        paths: {
            'vs': 'https://as.alipayobjects.com/g/cicada/monaco-editor-mirror/0.6.1/min/vs'
        }
    };

    componentWillMount() {
        const { content } = this.props;
        this.setState({ code: content });
    }

    editorDidMount(editor, monaco) {
        // console.log('editorDidMount', editor);
        editor.focus();
    }
    
    onChange(code, e) {
        this.setState({ code });
    }

    render() {
        const { language, ...props } = this.props;
        return (
            <div className="TextEditor">
                <MonacoEditor
                    {...props}
                    language={language}
                    value={this.state.code}
                    options={this.options}
                    requireConfig={this.requireConfig}
                    onChange={(newValue, e) => this.onChange(newValue, e)}
                    editorDidMount={(editor, monaco) => this.editorDidMount(editor, monaco)}
                />
            </div>
        );
    }
}