import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './js/App';
import reportWebVitals from './reportWebVitals';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImageChange from './js/ImageChange';
import ObjectExample from './js/ObjectExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <App />*/}
    <Counter />
    <ToggleButton />
    <IndexExample />
    <ImageChange />
    <ObjectExample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//<React.StrictMode> react 내부s에서 잠재적인 문제가 있는 지 알아내기 위한 도구
