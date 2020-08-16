import React from 'react';
import {connect} from 'react-redux';
import { selectCollectionCategoryItems} from '../../redux/selectors/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({collection: {items, title}}) => {
    return(
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            
            <div className="items">
            {
                items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionCategoryItems(ownProps.match.params.category)(state)
});

export default connect(mapStateToProps)(CollectionPage);