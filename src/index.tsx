import { ApiProvider } from '@reduxjs/toolkit/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from 'views'

import './index.css'
import { apiSlice } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Home />
    </ApiProvider>
  </React.StrictMode>
)
