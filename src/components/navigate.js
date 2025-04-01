import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './navigate.css';

function Navigate() {
    const navigate = useNavigate();
    return (
        <div className='navbutton'>
            <button className="start" onClick={() => navigate('/landing')}>Welcome</button>

            <button className="start" onClick={() => navigate('/products')}>Shop</button>
            <button className="start" onClick={() => navigate('/shoppingcart')}>Checkout</button>
        </div>
    );
};

export default Navigate
