import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import App from './app/layout/App'
import { StoreContext, store } from './app/stores/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreContext.Provider value={store}>
    <App />
    </StoreContext.Provider>,
)
