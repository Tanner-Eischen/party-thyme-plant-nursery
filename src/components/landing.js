import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';
import Navigate from './navigate.js'


function LandingPage() {
    const navigate = useNavigate();
    return(             
      
     <div className='page-center'>         
       <footer>   
            <h2>Welcome to Party Thyme Plant Nursery</h2>
            <h3>*This is my fake ecommerce page* <br></br>
            Visit the products page to get started. It's invite only, though. You know, beacause its a party.</h3>
            <button className="start" onClick={() => navigate('/products')}>Get Started</button>
            </footer>
        
    </div>
        
    )

};

export default LandingPage;