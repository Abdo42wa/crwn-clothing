import React,{} from 'react'
import collections from '../../data/shope'
import CollectionPreview from '../../components/collection-preview/Collection-Preview.component'

const ShopPage = () => {
    return (
        <div className='shop-page'>

             {
                 collections.map(({id, ...otherCollectionProps}) => (

                    <CollectionPreview key={id} {...otherCollectionProps} />
                 ))
             }
  
                
        </div>
    )
}

export default ShopPage
