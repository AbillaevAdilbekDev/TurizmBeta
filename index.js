import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Welcome(){
  return (
    <div className='body'>
      <div className="navbar">
      <div className="logo">
        <a className="lg">
          Turism.qr
        </a>
      </div>
    </div>
    <div className='login'>
      <form action='server.js' method='POST'>
      <input type='text' className='form' placeholder='name ...' />
      <input type='number' className='form' placeholder='age ...' />
      <input type='email' className='form' placeholder='email ...' />
      <input type='submit' className='sub' placeholder='login' />
      </form>
    </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Welcome />
  </React.StrictMode>
);
reportWebVitals();