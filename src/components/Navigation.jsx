import React from 'react';
import PostIndexService from '../services/PostIndexService.js';
import './Navigation.css'

const jsonService = new PostIndexService();

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: null };
    }

    updatePage = (event) => {
        this.props.page.setPost(event.target.getAttribute('path'));
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
                        return <a class="navLink" key={i} path={post.path} onClick={this.updatePage}>{post.title}</a>
                    })}
            </div>
        );
    };
}

export default Navigation;