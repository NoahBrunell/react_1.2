import React from 'react'
import './Layout.css'

interface LayoutProps {
    children : React.ReactNode
}

export default function Layout({children}:LayoutProps) {
  return (
    <div className='body'>
      <header>
        <h1>Used Car Dealership</h1>
        <div>
          <a href="/login"><button>Login</button></a>
          <a href="/register"><button>Sign up</button></a>
        </div>
      </header>
      {children}
    </div>
  )
}
