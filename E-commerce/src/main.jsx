import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { ProductProvider } from './contexts/ProductContext';
import { CartDropDownProvider } from './contexts/CartDropdownContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>
        <ProductProvider>
          <CartDropDownProvider>
            <App />
          </CartDropDownProvider>
        </ProductProvider>
      </UserProvider>

    </BrowserRouter>

  </React.StrictMode>,
)
