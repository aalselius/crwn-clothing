import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true
        }
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-94f6a/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));

        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <CollectionsOverviewWithSpinner
                                isLoading={loading}
                                {...this.props}
                            />
                        }
                    />
                    <Route
                        path=":collectionId"
                        element={
                            <CollectionPageWithSpinner 
                                isLoading={loading} 
                                {...this.props} />
                        }
                    />
                </Routes>
            </div>
        );
    }

};

const mapDispathToProps = dispatch => ({
    updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispathToProps)(ShopPage);