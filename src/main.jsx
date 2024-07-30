import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SWRConfig } from 'swr'
import fetcher from './utils/fetcher.js'

export const SWRConfigValue = {
  fetcher,
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={SWRConfigValue}>
      <App />
    </SWRConfig>
  </React.StrictMode>
)
