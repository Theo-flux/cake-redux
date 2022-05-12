import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CakeView from './features/cake/cakeView'
import UserView from './features/user/userView'
import IcecreamView from './features/icecream/icecreamView'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CakeView/>
        <IcecreamView/>
        <UserView/>
      </header>
    </div>
  )
}

export default App
