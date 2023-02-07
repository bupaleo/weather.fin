import React from 'react';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import module from './About.module.scss'

function About(props) {
    return (
        <div>
            <Header/>
            <WeatherCard/>
        </div>
    );
}

export default About;