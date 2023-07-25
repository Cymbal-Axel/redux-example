import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from './components/Header'
import { addUser } from './redux/userSlice'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response)=> response.json())
    .then((data)=> dispatch(addUser(data)))
    .catch((error)=> console.log(error))
  }, [])

  return (
  <div className="App">
    <Header />
  </div>)
}

export default App
