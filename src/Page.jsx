import React from 'react';
import Post from './components/BlogPost';
import Navigation from './components/Navigation';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: <Post path="test" />
        };
    }

    render() {
        return (
            <div className='main'>
                {this.state.post}
                <Navigation />
            </div>
        );
    }
}

export default Page;