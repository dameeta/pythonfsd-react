import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div><h1>Home</h1>
    <Link to="/about">Go to about page</Link>  
    </div>
    
  )
}
