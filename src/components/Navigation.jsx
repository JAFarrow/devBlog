import React from 'react';
import PostIndexService from '../services/PostIndexService.js';

const jsonService = new PostIndexService();

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = { index: null };
    }

    componentDidMount() {
        jsonService.fetchAndParseLocalJson('/resourceMap.json').then((index) => {
            this.setState( {
                index: index
            } )
        })
    }

    render() {
        return (
            <div className="nav">
                {this.state.index == null ? <p>Waiting..</p>:
                    this.state.index.posts.map((post, i) => {
                        return <p key={i}>{post.title}</p>
                    })}
            </div>
        );
    };
}

export default Navigation;