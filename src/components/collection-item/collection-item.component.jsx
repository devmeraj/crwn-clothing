import React from 'react';
import {connect} from 'react-redux';
import { addToCart } from '../../redux/actions';

import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({item, addToCart}) => {
    const {imageUrl, name, price} = item;
    return(
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            
            <CustomButton inverted onClick={() => addToCart(item)}>Add to Cart</CustomButton>

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

        
        </div>
    )
};

export default connect(null, {addToCart})(CollectionItem);