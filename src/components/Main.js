import React, {useEffect, useState} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({selectedPhoto, photoListData}) => {
const[activePhoto, setActivePhoto] = useState(photoListData[0])


    useEffect(() => {
        setActivePhoto(photoListData[selectedPhoto])
    }, [photoListData, selectedPhoto])
    

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='photoHighlight'>
                <div className='photoContainer'>
                    <img
                    className='selectedPhoto'
                    src={activePhoto.image_url}
                    alt=''

                    />
       </div>
       </div>

<div className='photoDetails' style={{ color: '#fff'}}>
    <div className='title'>
        {activePhoto.name}
        <span className='itemNumber'>·#{activePhoto.token_id}</span>
        </div>
        <div className='owner'>
            <div className='ownerImageContainer'>
                <img src={activePhoto.owner.profile_img_url} alt='' />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>{activePhoto.owner.address}</div>
                        <div className='ownerHandle'>@SageMedia</div></div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt='' />
                            </div>
                            <div className='ownerLink'>
                                <img src={twitterLogo} alt='' />
                                </div>
                                <div className='ownerLink'>
                                    <img src={moreIcon} alt='' />
                            </div>
                        </div>
                </div>
        </div>
</div>

)
}

export default Main