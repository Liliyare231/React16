
import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Catalog from './components/catalog/catalog'
import CartPage from './components/cartPage/cartPage'
import UserPage from './components/userPage/UserPage'
import CreatePage from './components/CreatePage/CreatePage'
import Modalka from './components/Modalka/Modalka'

import BasketPage from './components/Basket/BasketPage'
import { store } from './app/store'
export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [data, setData] = useState(store.products)

  const addToCart = (id) => {
    setData((prev) => {
      // console.log(prev)

      prev.forEach((item, i) => {
        if (item.id === id) {
          prev[i].cart = true
          return
        }
      })

      return [...prev]
    })
  }

  return <AppContext.Provider value={{ data: data, addToCart }}>{children}</AppContext.Provider>
}

function App(props) {
  return (
    <div className="wrapper">
      <AppProvider>
        <div className="blocks">
          <Header />
          <Routes>
            <Route path='/' element={<Banner />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:id' element={<CartPage />} />
            <Route path='/users' element={<UserPage />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/modalka' element={<Modalka />} />
            <Route path='/basket' element={<BasketPage />} />
          </Routes>
          <Header />
        </div>
      </AppProvider>
    </div>
  )
}

export default App
