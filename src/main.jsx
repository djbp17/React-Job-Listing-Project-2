import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import JSXBriefCrashCourse from './JSXBriefCrashCourse.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JSXBriefCrashCourse /> */}
    <App />
  </StrictMode>
);
