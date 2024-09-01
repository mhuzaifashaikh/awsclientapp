import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsExports from "./aws-exports";
import config from './amplifyconfiguration.json';
import { fetchAuthSession } from 'aws-amplify/auth';
import MainRouter from './MainRouter'; // Import the router
import 'semantic-ui-css/semantic.min.css';

Amplify.configure(config);
Amplify.configure(awsExports);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MainRouter /> 
  </React.StrictMode>
);





async function currentSession() {
  try {
    const { tokens } = await fetchAuthSession({ forceRefresh: true });
    console.log(tokens);
  } catch (err) {
    console.log(err);
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
