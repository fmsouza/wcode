import React from 'react';
import { inject, observer } from 'mobx-react';
import Editor from './components/editor';
import Header from './components/header';
import Sidebar from './components/sidebar';
import StatusBar from './components/statusBar';
import './App.css';

@inject('view')
@observer
export default class App extends React.Component {

    render() {
        const { view } = this.props;
        return (
            <div className="App">
                <Header />
                <div className="body" style={view}>
                    <Sidebar />
                    <Editor />
                </div>
                <StatusBar />
            </div>
        );
    }
}