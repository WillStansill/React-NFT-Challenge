import React from 'react'
import CollectionCard from './CollectionCard'
import './Photolist.css'

const Photolist = ({ photoListData, setSelectedPhoto }) => {
  return (
  <div className='photoList'>
      {photoListData.reverse().map(photo => (
          <div onClick={() => setSelectedPhoto(photo.token_id)}>
      
          <CollectionCard
          key={photo.token_id}
          id={photo.token_id}
          name={photo.name}
          traits={photo.traits}
          image={photo.image_url}
          />
          
      </div>
      ))}
  </div>
  )
}

export default Photolist