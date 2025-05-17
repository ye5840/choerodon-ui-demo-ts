import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { overwriteDefaultConfig } from 'choerodon-ui/dataset';
import defaults from 'choerodon-ui/lib/configure/default';
import { LocaleProvider } from 'choerodon-ui';
import zh_CN from 'choerodon-ui/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LocaleProvider locale={zh_CN}><App /></LocaleProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
overwriteDefaultConfig(defaults);
reportWebVitals();
