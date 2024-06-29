import React from 'react';
import Markdown from 'markdown-to-jsx';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contents: '' };
    }

    componentDidMount() {
        const path = revertPath(this.props.path);
        import(`../resources/${path}.js`).then((file) => {
            this.setState({ contents: file.default.toString()});
        })
    };

    render() {
        return (
            <div className='post'>
                    <Markdown children={this.state.contents}/>;
               </div>
        );
    };
};

function revertPath(path) {
    let returnPath = path;
    returnPath.replace(" ", "_");
    returnPath.toLowerCase();
    return returnPath;
};

export default Post;