import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { initializeApp } from 'firebase/app';
import { firebaseconfig } from './app/config/firebase.config';

initializeApp(firebaseconfig)
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
