import React from 'react';
import Post from './components/BlogPost';
import Navigation from './components/Navigation';
import Header from './components/Header'
import './App.css'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            postPath: 'test.js'
        };
    }

    setPost = (path) => {
        this.setState( {
            postPath: path
        });
    }

    getCurrentPost() {
        return this.state.postPath;
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <main className="main">
                    <Post path={this.state.postPath} />
                    <Navigation page={this} />
                </main>
            </div>
        );
    }
}

export default Page;