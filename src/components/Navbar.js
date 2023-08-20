import React from 'react'
// import { a } from 'react-router-dom'

function Navbar(props) {

  

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href='#'>TextUtils</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href='/'>Home</a>
              </li>
            </ul>

          </div>

          <div className={`form-check form-switch text-${props.mode==="light"? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox"role="switch" id="flexSwitchCheckDefault"
              onClick={props.toggeleHandler} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>

      </nav>

    </div>
  )
}

export default Navbar