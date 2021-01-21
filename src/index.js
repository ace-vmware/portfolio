// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sass Imports
import "../src/scss/hero.scss";
import "../src/scss/aboutme.scss";

// CSS Imports
import "../src/css/hero.css"
import "../src/css/aboutme.css"

ReactDOM.render(
<App />, 
document.getElementById('root'));
;