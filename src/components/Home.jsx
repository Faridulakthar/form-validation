import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div className="home">
          <Link className="btn btn-back" style={{ textDecoration: 'none' }} to='/'>Go back</Link>
          <h1>Hello world</h1>
      </div>
  )
}

export default Home
