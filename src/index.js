import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDg3xQeiJKVd5_AUhZihXHszxya_YjIENk",
  authDomain: "tablelab-d9e2e.firebaseapp.com",
  databaseURL: "https://tablelab-d9e2e.firebaseio.com",
  projectId: "tablelab-d9e2e",
  storageBucket: "tablelab-d9e2e.appspot.com",
  messagingSenderId: "545960938543"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
