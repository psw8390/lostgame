import { Provider } from '@/components/ui/provider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@fontsource-variable/noto-sans/index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)
