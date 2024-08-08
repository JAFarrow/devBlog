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

    getDisplayedPage() {
        return this.props.page.getCurrentPost();
    }

    formatNavLink(key, post) {
        return (
            <a className="navLink" key={key} path={post.path} onClick={this.updatePage}>{post.title}</a>
        )
    }

    render() {
        return (
            <div className="nav">
                {this.state.index == null ? <p>Waiting..</p>:
                    this.state.index.posts.map((post, i) => {
                        if (post.path != this.getDisplayedPage()) {
                            return this.formatNavLink(i, post);
                        }
                    })}
            </div>
        );
    };
}

export default Navigation;