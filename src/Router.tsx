import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'

export const Router = () => {
  return (
        <BrowserRouter>

          <switch>
            <Routes>
            <Route path='/'  Component={Home}/>
            <Route path='/about'  Component={About}/>
            <Route path='/contact'  Component={Contact}/>
            </Routes>
          </switch>
        </BrowserRouter>

  )
}
