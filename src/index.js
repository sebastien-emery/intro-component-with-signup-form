import { render } from '@testing-library/react';
import React, { StrictMode } from 'react';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

// Render :
const rootReactElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

const target = document.getElementById('root');
render(rootReactElement, target);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
