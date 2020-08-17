import React from 'react';
import {withRouter} from 'react-router-dom';


import './menu-item.style.scss';

const MenuItem = ({title, imageUrl, linkUrl, size, history, match}) => (
    <div 
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className="background-image" style={{
            background: `url(${imageUrl})`
        }} />
        <div className="content">
            <h2 className="title">{title}</h2>
            <span className="subtitle">SHOP NOW!</span>
        </div>
    </div>
);

export default withRouter(MenuItem);