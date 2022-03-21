
import './App.css';
import CollectionCard from './components/CollectionCard'
import Header from './components/Header'
import{useState, useEffect } from 'react'
import axios from 'axios'
import Photolist from './components/Photolist'
import Main from './components/Main'

function App() {
  const [photoListData, setPhotoListData] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x15427b0af5383664b677054b8Beb84DF92f0c422')
      console.log(openseaData.data.assets)
      setPhotoListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {photoListData.length > 0 && (
          <>
          <Main photoListData={photoListData} selectedPhoto={selectedPhoto}/>
      <Photolist
       photoListData={photoListData}
      setSelectedPhoto={setSelectedPhoto} 
      />
      </>
        )}
      </div> 
      
  )
}

export default App
