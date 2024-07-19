import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { ProductProvider } from './contexts/ProductContext';
import { CartContextProvider } from './contexts/CartContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>
        <ProductProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductProvider>
      </UserProvider>

    </BrowserRouter>

  </React.StrictMode>,
)
