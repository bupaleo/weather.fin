import React from 'react';
import module from './WeatherCard.module.scss'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const api = {
    key: '195f6198cdf22a2f90f90eedbe796bcb',
    base: 'https://api.openweathermap.org/data/2.5/',
}

function WeatherCard(props) {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);

    const searchPressed = () => {
        fetch(`${api.base}forecast?q=${search}&appid=${api.key}`)

            .then(res => res.json())
            .then((result) => {
                setWeather(result);
                console.log('Data List Loaded', result);
            })
    }
    const Data = () => {
        
    }
    return (
        <div className={module.seacrh}>
            <div className={module.card}>
                <div className={module.input}>
                    <input
                        type='text' placeholder='Enter city/town...'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={searchPressed}>Search</button>
                </div>
                
                {weather && (
                    <div className={module.main}>
                        <div className={module.cart1}>
                            <div>
                                <h3 className={module.cart1_0}>City:{weather.city.name}</h3>
                                <p className={module.cart1_1}>Temperature: {Math.round(weather.list[0].main.temp-273.15)}°C</p>
                                <p className={module.cart1_2}>Feels like: {Math.round(weather.list[0].main.feels_like-273.15)}°C</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className={module.weather_card}>
                 {weather && (
                    <div className={module.cart2}>                   
                        <div className={module.today}>
                                <h2>WEATHER FOR A DAY:</h2> 
                                <ul>
                                    <li> In the morning: {Math.round(weather.list[0].main.temp-273.15)}°C</li>
                                    <li> In the afternoon: {Math.round(weather.list[2].main.temp-273.15)}°C</li>
                                    <li> In the evening: {Math.round(weather.list[3].main.temp-273.15)}°C</li>
                                </ul>
                        </div>
                    </div>
                )}

                 {weather && (
                    <div className={module.week_kard}>
                        <div className={module.cart2}>
                            <div className={module.week}>

                            <h2>WEATHER FOR A 5 DAY:</h2>
                                <ul>
                                    <li>Tomorrow:{Math.round(weather.list[4].main.temp-273.15)}°C</li>
                                    <li>The day after tomorrow: {Math.round(weather.list[13].main.temp-273.15)}°C</li>
                                    <li>In thee days: {Math.round(weather.list[22].main.temp-273.15)}°C</li>
                                    <li>In four days: {Math.round(weather.list[29].main.temp-273.15)}°C</li>
                                    <li>In five days: {Math.round(weather.list[37].main.temp-273.15)}°C</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;