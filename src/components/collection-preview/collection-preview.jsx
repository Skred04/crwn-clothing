import React from 'react';
import CollectionItem from "../collection-item/collection-item";

import './collection-preview.scss';

const CollectionPreview = (props) => {
    return <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
            {
                props.items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
};

export default CollectionPreview;