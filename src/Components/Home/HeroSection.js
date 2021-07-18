import React from 'react'
import ArrowRight from '../Home/assets/ArrowRight.svg'
export const HeroSection = (props) => {
    React.useEffect(()=>{
        alert('I deployed this page within 3 hours. Sorry about the responsivness, I am really busy and will get to it when I can.\n \nDiscord - mayfairr#2022,\nGithub - https://github.com/mayfairr, \nEmail - zk@mayfairr.com, \nLinkedIn - Press About Me Button');
    }, [])
        return (
        <div className='hero-container' data-aos={props.dataAos}>
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
                <div className='hero-button-container' style={{marginTop:'2vw'}} onMouseDown={()=>{window.location.href=('https://www.linkedin.com/in/mayfairr')}} >
                    <span className='hero-button-text'> About me</span>
                    <img src={ArrowRight}/>
                </div>
            </div>
        </div>
    )
}