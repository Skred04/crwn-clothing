import React from 'react';

import './collection-preview.scss';

const CollectionPreview = (props) => {
    return <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
            {
                props.items.filter((item, index) => index < 4).map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
};

export default CollectionPreview;