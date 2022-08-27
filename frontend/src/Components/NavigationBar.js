import React from 'react'

const NavigationBar = () => {
  return (
    <header>
      <span class="image-clickable">
        <a href="index.html">
          <img src="images/logo-dark.png" alt="main-logo" class="logo" />
        </a>
      </span>
      <nav>
        <ul class="nav-links">
          <li><a href="/">Services</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavigationBar