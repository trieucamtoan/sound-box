import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';//Get more css files for different components
//This index.js is the default javascript file for starting React Application

//injects the javascript code into the "root" element in index.html

ReactDOM.render(
    <App/>, 
    document.getElementById('root'));

// new Promise((resolve, reject) => {
//     return reject(new Error("Error, something hapened"));

//     setTimeout(() => {
//         console.log('First line');
//         resolve('Resolved Message');
//     },2000);
// })
// .then (quote => {
//     console.log(quote);
// })
// .then(() => {
//     console.log('Second line');
//     console.log('Third line');
// })
// .catch(error => console.log("error: ", error));





