import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {store,persistor} from './components/redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
 
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
  <App />
  <ToastContainer />
</PersistGate>
</Provider>,
)


