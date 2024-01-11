import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import CtxProvider from './Component/Contex/CtxProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<CtxProvider>
<App />
</CtxProvider>
    

);

// 
