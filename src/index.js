import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/app';
// import reportWebVitals from './reportWebVitals';

// Render :
const rootReactElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

const target = document.getElementById('root');
const root = createRoot(target);
root.render(rootReactElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
