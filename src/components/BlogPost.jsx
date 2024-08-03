import React from 'react';
import Markdown from 'markdown-to-jsx';
import "./BlogPost.css"

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contents: '' };
    }

    componentDidMount() {
        this.fetchContents();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.path != this.props.path) {
            this.fetchContents();
        }
    }

    fetchContents() {
        import(`../resources/${this.props.path}`).then((file) => {
            this.setState({ contents: file.default.toString() });
        });
    }

    render() {
        return (
            <div id='postContainer'>
                    <Markdown className="post" children={this.state.contents}/>
            </div>
        );
    };
};

export default Post;