import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
        <h1>To Do List</h1>
    </header>
  )
}

const headerStyle = {
  background: '#000',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;