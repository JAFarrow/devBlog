import React from 'react';
import PostIndexService from '../services/PostIndexService.js';
import './Navigation.css'

const jsonService = new PostIndexService();

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: null };
    }

    updatePage = (event) => {
        this.props.page.setPost(event.target.getAttribute('path'));
    }

    componentDidMount() {
        jsonService.fetchAndParseLocalJson('/resourceMap.json').then((index) => {
            this.setState( {
                posts: this.sortPostsByDate(index)
            } )
        })
    }

    getDisplayedPage() {
        return this.props.page.getCurrentPost();
    }

    formatNavLink(post, key) {
        return (
            <a className="navLink" key={key} path={post.path} onClick={this.updatePage}>{post.title}</a>
        )
    }

    sortPostsByDate(index) {
        return [...index.posts].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        })
    }

    render() {
        return (
            <div className="nav">
                <h3 id='navHeader'>Posts</h3>
                <hr id='navRule'/>
                {this.state.posts == null ? (
                    <p>Waiting..</p>
                ) : (
                    this.state.posts.map((post, i) => {
                        if (post.path != this.getDisplayedPage()) {
                            return this.formatNavLink(post, i);
                        }
                    })
                )}
            </div>
        );
    };
}

export default Navigation;