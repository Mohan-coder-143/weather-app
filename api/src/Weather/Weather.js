import axios from 'axios'
import React, { useState } from 'react'
import '../Weather/Weather.css'
import hum from '../Assests/humidity.png';
import windes from '../Assests/windes.png';
import clur from '../Assests/clear images.jpg';
import cloud from '../Assests/Rain images.jpg';


const Weather = () => {
  //input state
  const[values,setvalues]=useState("")
  //temp state
  const[temp,settemp]=useState()
  //wind state
  const[windspeed,setwindspeed]=useState()
  //city state
  const[city,setcity]=useState()
  //humidity state
  const[humid,sethumid]=useState()
  //wether cond img
  const[weatherimg,setweatherimg]=useState();


    //api key 
    const API_KEY="b5880cf486d18bf3ad8f6ca95afb0c27"

    //input
    const handledata=(e)=>{
      console.log(e.target.value);
      setvalues(e.target.value)
    }

    //get api
    const handlechange=()=>{
      if(values===''){
          alert("Enter city name")
          return
        }
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${values}&units=metric&appid=${API_KEY}`;
        axios.get(url)
        .then((res)=>{
            console.log(">>>>>>>>>>>>",res);
            const conditions=res.data.weather[0].main;
            if(conditions==="Clouds"){
              setweatherimg(cloud)
            }
            else if(conditions==="Clear"){
              setweatherimg(clur)
            }
            settemp(res.data.main.temp)
            setcity(res.data.name)
            setwindspeed(res.data.wind.speed)
            sethumid(res.data.main.humidity)
        })
    }

  return (
    <>
    <div className='weather'>
      <h1>Weather App</h1>
     <div className="input-type">
    <input onChange={handledata}></input>
    <button onClick={handlechange}>search</button>
    </div>
    <div className='data1'>
      <h2 id='tempid'>{temp}C</h2>
      <img src={weatherimg} id='cond'></img>
      <h2 id='cit'>{city}</h2>

    </div>

    <div className="foot">
  <div className="weather-box">
    <img src={hum} alt="humidity" />
    <h3>Humidity</h3>
    <p>{humid}%</p>
  </div>

  <div className="weather-box">
    <img src={windes} alt="wind" />
    <h3>Wind Speed</h3>
    <p>{windspeed} km/h</p>
  </div>
</div>

    </div>
    </>
  )
}

export default Weather