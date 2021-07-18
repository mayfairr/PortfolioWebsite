
import React from 'react';

import Circles from '../Home/assets/Circles.svg'
import Me from '../Home/assets/Me.png'

import {Logo} from '../Home/Logo'
import { HeroSection } from './HeroSection';
import {Particle} from './Particle'

export const Landing = () => {
    return (
        <>
        <Particle GridLarge x={1200} y={400} size={25} />
        <Particle Cross x={1100} y={300} size={25} />
        <Particle GridLarge x={100} y={100} size={25} />
        <Particle Cross x={400} y={500} size={25} />
        <HeroSection dataAos='fade-right'/>
        <div data-aos='zoom-in' className='centered'>
        <img src={Circles} draggable={false} className='landing-circles centered'/>
        <div className='current-position-parent'>
        <div className='current-position-container'>
            <span className='current-position-container-text'>Current Position</span>
        </div>
            <div>
                <span className='position-title'>React Native Developer at Acreetr</span>
            </div>
            <br/>
            <div>
                <span className='position-duration'>4 Months</span>
            </div>
        </div>
        <div data-aos='fade-left' className='centered'>
            <img src={Me} draggable={false} className='landing-me centered'/>
        </div>
        </div>
        <Logo/>
       </>
    )
};