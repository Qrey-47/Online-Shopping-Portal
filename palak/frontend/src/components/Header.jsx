import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Search, User, ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Left Side: Logo */}
        <Link to="/" className="header-brand">
          <div className="header-brand-icon">
            <Leaf size={24} color="#285430" />
          </div>
          <span className="header-brand-text">SATTVA SKIN</span>
        </Link>
        
        {/* Center: Navigation & Search */}
        <div className="header-center">
          <nav className="header-nav">
            <Link to="/shop">Shop</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
          </nav>
        </div>

        {/* Right Side: Actions */}
        <div className="header-actions">
           <div className="header-search">
             <Search size={20} className="header-search-icon" />
             <input type="text" placeholder="Search products..." />
           </div>
          <Link to="/login" className="login-btn">
            <User size={18} />
            Login
          </Link>
          <div className="header-action-icons">
            <button className="icon-btn">
              <ShoppingCart size={24} />
            </button>
            <button className="icon-btn">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;