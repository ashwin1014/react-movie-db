import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Page Does Not Exist!</h1>
            <Link to="/">Click here to go back to home page</Link>
        </div>
    );
};

export default NotFound;