import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Loader } from 'components/Loader/Loader';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <BrowserRouter basename="tweets">
     <Provider store={store}>
     <PersistGate loading={<Loader/>} persistor={persistor}>
          <App/>
    </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
