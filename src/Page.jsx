import React from 'react';
import Post from './components/BlogPost';
import Navigation from './components/Navigation';

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

    render() {
        return (
            <div className='main'>
                <Post path={this.state.postPath} />
                <Navigation page={this} />
            </div>
        );
    }
}

export default Page;