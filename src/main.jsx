import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { CategoriesMapProvider } from './contexts/CategoriesMapContext.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>
        <CategoriesMapProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesMapProvider>
      </UserProvider>

    </BrowserRouter>

  </React.StrictMode>,
)
