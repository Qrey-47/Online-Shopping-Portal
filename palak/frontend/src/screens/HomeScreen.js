import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <div>
            <h1>Welcome to Satva Skin</h1>
            <p>This is the homepage. Since our focus is the product page, we'll navigate from here.</p>
            {/* This is an example link. You would map over your products and generate these links dynamically.
              The product ID '63fba4eb1303837098e495b4' is just a placeholder. 
              You'll need to get a real ID from your database to test.
            */}
            <p>
                Example Product Link (replace ID with a real one from your database): 
                <Link to="/product/68c700a6cfe54b313d994aed"> Go to a Product</Link>
            </p>
        </div>
    );
};

export default HomeScreen;