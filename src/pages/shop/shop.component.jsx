import React from 'react';
import {Route} from 'react-router-dom';
import ColllectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import './shop.style.scss';


const ShopPage = ({match}) => {
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={ColllectionOverview} />
                <Route path={`${match.path}/:category`} component={CollectionPage} />
            </div>
        );
}

export default ShopPage;