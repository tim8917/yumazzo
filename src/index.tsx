import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './fonts.css';
import './index.css';
import './scrollbar.css';
import {universalColors} from "./themes/universal-colors";
import {FONT_FAMILY_BAI_JAMJUREE} from "./constants";

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
        
        textarea {
            background-color: ${universalColors.neutral_90};
            color: ${universalColors.white};
            font-family: ${FONT_FAMILY_BAI_JAMJUREE};
            resize: vertical;
            border: 1px solid #5B6178;
            border-radius: 6px;
            padding: 8px 11px;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            min-height: 58px;
        }
        
        textarea:focus {
            outline: 0;
            border: 1px solid #663CDD !important;
            box-shadow: 0 0 0 4px #B89FFF;
        }
        
        textarea::placeholder {
          color: ${universalColors.neutral_60};
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
