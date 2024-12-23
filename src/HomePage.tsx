import React, { JSX } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(): JSX.Element {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-around" }}>
                    <li><Link to="/signUp">Sign Up</Link></li>
                    <li><Link to="/signIn">Sign In</Link></li>
                </ul>
            </nav>
        </div>
    );
}