import React from 'react';
import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionItems } from '../../redux/selectors/shop.selectors';
import CollectionPrevew from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionData}) => (
                <CollectionPrevew key={id} {...otherCollectionData} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionItems
})

export default connect(mapStateToProps)(CollectionOverview);