import React from 'react';
import {connect} from 'react-redux';

import {selectDirectorySections} from '../../redux/selectors/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => {
        return(
            <div className="directory-menu">
                {sections.map(({id, imageUrl, size, title}) => {
                    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />;
                })}
            </div>
        );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);