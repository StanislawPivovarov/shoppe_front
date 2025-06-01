import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'DM Sans'
        }
      }}
    >
      <BrowserRouter basename='/shoppe_front/'>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
)
