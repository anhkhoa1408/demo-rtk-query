import './App.css'

import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './state/store'
import Container from './views/Container'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App" data-testid="app-page">
          <Container />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
