import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Card name="Kavya" edu="10 class"/>
      <Card name="Rahul" edu="12 class"/>
      <Card name="Priya" edu="Graduated"/>
    </div>
  )
}

export default App
//rfce is the short form for react functional component export
//first letter always capitalized for component names in react ending with jsx extension