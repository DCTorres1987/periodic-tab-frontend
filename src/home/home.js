// importing in react 
import React from 'react';
import './src/App.css';
// importing componenet from file
import HomeSection from './navbar/homeSection';

// stateless componenet
// used to render presentational component
function Home() {
 return (
     <>
        <HomeSection />
     </>
 );   
}

export default Home;