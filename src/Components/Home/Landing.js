
import React from 'react';

import Circles from '../Home/assets/Circles.svg'
import Me from '../Home/assets/Me.png'

import {Logo} from '../Home/Logo'
import { HeroSection } from './HeroSection';

export const Landing = () => {
    return (
        <>
        <HeroSection/>
        <img src={Circles} draggable={false} className='landing-circles centered'/>
        <img src={Me} draggable={false} className='landing-me centered'/>
        <Logo/>
       </>
    )
};