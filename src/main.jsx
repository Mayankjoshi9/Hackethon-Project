
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";


// this store is  used to store the state of the application

const store=configureStore({
//  rootReducer is combine  of all the reducers  
  reducer:rootReducer,
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </Provider>

)
