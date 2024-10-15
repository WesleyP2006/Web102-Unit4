import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App(){
  const url = `https://api.thecatapi.com/v1/images/search?limit=20`;

  const [dogImage, setDogImage] = useState(null);
  const [dogID , setDogID] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogImage = async (url) => {
      try {
        const response = await fetch(url , {headers: {
          'x-api-key': live_d5SE7pmHJimkJYJSFXpNAeiV8nsOYCSa6rhD2OGuUl0mTaKgaSwGAl8MNrFjoLw3
        }});
        const data = await response.json();
        setDogImage(data[0].url);
        setLoading(false);
        setDogID(data.ID)
      } catch (err) {
        setError('Failed to fetch dog image');
        setLoading(false);
      }
    }
    fetchDogImage(url)
    }, []);


  return (
    <>
      <div className='whole-page'>
        <h1>Discover Dogs!!!</h1>
        <h3>Uncover the dogs of the world!!!</h3>

        <img src={dogImage}/>


      </div>
      <div className='side-bar'>

      </div>
    </>
  )
}

export default App
