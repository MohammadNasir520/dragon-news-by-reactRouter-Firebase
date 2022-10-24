import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>there is our terms and condition </h2>
            <h4>Go to <Link to='/register'>Register</Link></h4>
        </div>
    );
};

export default TermsAndCondition;