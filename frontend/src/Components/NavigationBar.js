import React from 'react'

const NavigationBar = () => {
  return (
  <nav class="navbar navbar-expand-lg">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
       alt="main-logo" className="logo" />

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" >
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Learn More
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/">Action</a>
          <a class="dropdown-item" href="/">Another action</a>
          <a class="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavigationBar