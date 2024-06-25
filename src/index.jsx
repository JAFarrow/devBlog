import React from 'react';
import ReactDOM from 'react-dom/client';
import post from './resources/test.md'
import Markdown from 'markdown-to-jsx';

let md = post;

ReactDOM.createRoot(document.getElementById('root')).render(
    <Markdown>{md}</Markdown>
)
