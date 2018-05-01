import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

var destination = document.querySelector("#container");

ReactDom.render(
    <div>
        <p>Hello Todo!</p>
    </div>, destination
);