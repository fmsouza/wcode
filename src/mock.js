export default `import React from 'react';
import Editor from './components/editor';
import Header from './components/header';
import Sidebar from './components/sidebar';
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
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
    }

    render() {
        const { body: { width, height } } = this.state;
        return (
            <div className="App">
                <Header />
                <div className="body" style={{ width, height }}>
                    <Sidebar />
                    <Editor ref="editor" />
                </div>
            </div>
        );
    }
}
`;