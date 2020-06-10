import React from 'react';


import './menu-item.style.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div 
    className={`${size} menu-item`}
    >
        <div className="background-image" style={{
            background: `url(${imageUrl})`
        }} />
        <div className="content">
            <h2 className="title">{title}</h2>
            <span class="subtitle">SHOP NOW!</span>
        </div>
    </div>
);

export default MenuItem;