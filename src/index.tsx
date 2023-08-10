import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './fonts.css';
import './index.css';
import './scrollbar.css';
import {universalColors} from "./themes/universal-colors";

const root = document.createElement('div');
root.className = "container";

const styleElement = document.createElement('style');
styleElement.id = 'foundation-style';
styleElement.textContent =
    `
        * {
            box-sizing: border-box;
        }

        body {
          margin: 0;
          overflow-x: hidden;
          color: ${universalColors.white};
        }
    
        html, body, .container {
          background-color: #0D1119 !important;
          box-shadow: none !important;
          border: 6px !important;
          outline: 0 !important;
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
