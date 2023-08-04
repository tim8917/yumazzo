import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './fonts.css';
import './index.css';

const root = document.createElement('div');
root.className = "container";

const styleElement = document.createElement('style');
styleElement.id = 'remove-scroll-style';
styleElement.textContent =
    `
        * {
            box-sizing: border-box;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }
    
        html, body, .container {
          background: transparent !important;
          box-shadow: none !important;
          border: 0 !important;
          outline: 0 !important;
        }
        
        .container {
            min-height: 700px important;
        }
    
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display:none !important;
        }
    `;

document.body.appendChild(styleElement);
document.body.appendChild(root);

const rootDiv = ReactDOM.createRoot(root);

rootDiv.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
