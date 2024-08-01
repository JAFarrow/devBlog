import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <h1>My Blog</h1>
            </header>
        );
    };
};

export default Header;