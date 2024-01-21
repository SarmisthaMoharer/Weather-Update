import React,{useState} from 'react';
import axios from 'axios'


const Body = () => {

  const[data,setData] = useState({})
  const[location,setLocation] = useState('')


   const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=556e8788daf136208d5d433cbce5828d`

   const searchLocation = (e) => {
    if(e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
   }

  return (
    <div className=' box-border m-0 p-0'>
      <img className='w-full h-full m-0 z-1 absolute object-cover ' src="src/assets/tom-barrett-hgGplX3PFBg-unsplash.jpg" alt="" />
      <div className='w-full h-screen relative bg-black/40 text-white'>
        <div className='max-w-[700px] h-[700px]  m-auto px-1 relative  flex flex-col justify-between'>
          <div>
            <div className='text-center p-4'>
              <h1 className='p-5 bg-transparent/10 border border-solid border-white rounded-xl mb-5 text-white text-2xl hover:scale-90'>WEATHER UPDATE</h1>
              <input className='p-3 text-xl rounded-3xl border border-solid border-white bg-transparent/10 placeholder:text-white' type="text" 
              value={location} 
              onChange={e => setLocation(e.target.value)} 
              onKeyPress={searchLocation} 
              placeholder='Enter Location' />
            </div>
          </div>
          <div className='w-full m-5 '>
              <div className="location">
                <p className='text-4xl italic'>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ?  <h1 className='font-bold text-6xl'>{data.main.temp.toFixed()} °C</h1> : null}
              </div>
              <div className="relative italic my-8" >
                {data.weather ? <p className='text-xl'>{data.weather[0].main}</p> : null}
              </div>
          </div>

          {data.name != undefined &&

              <div className='flex justify-evenly text-center inset-x-0 bottom-0 w-full mb-8 p-1 rounded-md bg-black/40  '>
                <div className="feels">
                  {data.main ?  <h1 className='font-bold text-5xl '>{data.main.feels_like.toFixed()} °C</h1> : null}
                  <p className='text-xl italic'>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main ?  <h1 className='font-bold text-5xl'>{data.main.humidity} %</h1> : null}
                  <p className='text-xl italic'>Humidity</p>
                </div>
                <div className='wind '>
                  {data.wind ?  <h1 className='font-bold text-3xl p-1'>{data.wind.speed.toFixed()} MPH</h1> : null}
                  <p className='text-xl italic'>Wind Speed</p>
                </div>
              </div>
          
                
          }

        </div>   
        
      </div>
      
    </div>
  )
}

export default Body

