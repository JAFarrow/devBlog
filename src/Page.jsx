import React from 'react';
import Post from './components/BlogPost';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { post: <Post path="test" /> };
    }

    render() {
        return this.state.post;
    }
}

export default Page;