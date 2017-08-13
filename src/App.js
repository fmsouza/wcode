import React from 'react';
import { Editor, Header, Sidebar } from './components';
import './App.css';

export default class App extends React.Component {

    state = { body : { width: 0, height: 0 } };

    updateDimensions() {
        const width = window.innerWidth;
        const height = window.innerHeight - 20;
        this.setState({ body: { width, height } });
    }

    componentWillMount() {
        window.addEventListener('resize', () => this.updateDimensions());
        this.updateDimensions();
        setImmediate(() => {
            this.refs.editor.view({
                name: 'test.js',
                language: 'javascript',
                src: `// place your code here`
            });
            this.refs.editor.view({
                name: 'test2.js',
                language: 'javascript',
                src: `// place your code here 2`
            });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
    }

    render() {
        const { body: { width, height } } = this.state;
        return (
            <div className="App">
                <Header/>
                <div className="body" style={{ width, height }}>
                    <Sidebar />
                    <Editor ref="editor" />
                </div>
            </div>
        );
    }
}