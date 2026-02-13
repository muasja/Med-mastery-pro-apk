import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Target mount container missing from DOM.");
}

const root = ReactDOM.createRoot(rootElement);

// Mount Application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Unified Loader Dismissal Strategy
const dismissLoader = () => {
  const loader = document.getElementById('loading-screen');
  if (loader && loader.style.display !== 'none') {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 450);
  }
};

// 1. Initial attempt on load
window.addEventListener('load', () => {
  setTimeout(dismissLoader, 600);
});

// 2. Safety fallback for slower environments (e.g., low-end Android APK wrappers)
setTimeout(dismissLoader, 3000);