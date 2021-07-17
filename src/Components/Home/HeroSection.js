import React from 'react'
import ArrowRight from '../Home/assets/ArrowRight.svg'
export const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div>
                <div>
                    <span className='hero-sub-title'>HEY, I’M</span>
                </div>
                <div>
                    <span className='hero-title'>ZEESHAN</span> <br/> <span className='hero-title'>KHAN.</span>
                </div>
                <div style={{marginTop:'2vw'}}>
                <span className='hero-sub-text'>I am an 18 year old, full stack developer with an impressive set of skills.</span>
                </div>

                {/* Button */}
                <div className='hero-button-container' style={{marginTop:'2vw'}} >
                    <span className='hero-button-text'> About me</span>
                    <img src={ArrowRight}/>
                </div>

            </div>
        </div>
    )
}