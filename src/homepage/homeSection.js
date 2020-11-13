import React from 'react';
import { Button } from '../navbar/button';
import './homestyle.css';
import '../App.css';

function Home() {
  
    return (
        <div className='home-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>INTERACTIVE PERIODIC TABLE</h1>
            <p>Let's Learn About Elements</p>
            <div className="home-btns">
                <Button className='btns' 
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                    GET STARTED
                </Button>

            </div>
            
        </div>

    )
}

export default Home