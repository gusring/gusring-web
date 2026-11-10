import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureGusringApi, startAutoFlush } from './shared/gusring-api';

// 구스링 백엔드 이용 기록: 로컬 서버에 붙일 때만 REACT_APP_GUSRING_API (기본 https://api.gusring.kro.kr)
if (process.env.REACT_APP_GUSRING_API) configureGusringApi({ baseUrl: process.env.REACT_APP_GUSRING_API });
startAutoFlush();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
