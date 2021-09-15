import React from 'react'

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector(".header")
    const details = document.querySelectorAll('.details')
    const uls = document.querySelectorAll("ul")
    
    details.forEach((detail) => {
      detail.classList.toggle("light-theme")
    })
    header.classList.toggle("light-theme")
    uls.forEach((ul) => {
      ul.classList.toggle("light-theme")
    })
    document.body.classList.toggle("light-theme")
  }

  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the ASIA?</h1>
        </div>
        <div>
        <a href="https://countries-asia.herokuapp.com/" ><button><i class="fas fa-redo-alt"></i>  refresh</button></a>
        
        </div>
        <div>
          <button className="btn-moon" onClick={() => changeTheme()}>
            <i className="fas fa-2x fa-moon"></i>
          </button>
        </div>
       
      </header>
    </>
  )
}

export default Header
