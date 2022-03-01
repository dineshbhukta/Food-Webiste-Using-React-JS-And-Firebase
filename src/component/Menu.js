import React from 'react';
import { Link } from 'react-router-dom';


function Menu() { 
  const user = JSON.parse(localStorage.getItem('user-info'));
  console.log(user);

  function signout(){
    localStorage.clear();
    window.location.href="/register"
  }
  return (
      
          <nav className="navbar navbar-expand-lg navigation-wrap navbar-light bg-light shadow">
          <div className="container">
          <a class="navbar-brand" ><img src="images/logo.png" /></a>
          
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarText">
              <span className="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">

                {
                  localStorage.getItem('user-info') ?
                  <>
                    <li className="nav-item">
                    <Link to={`/home`} className="nav-link">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/about`} className="nav-link">ABOUT-US</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/explore`} className="nav-link">EXPLORE-FOODS</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link to={`/contact`} className="nav-link">CONTACT </Link>
                    </li> 
                  </>

                  :

                  <>
                    <li className="nav-item">
                        <Link to={`/register`} className="nav-link">REGISTER</Link>
                    </li> 
                  </>

                }
                 {/* <li><button className="main-btn">1200 345 123</button></li> */}
               
              </ul>
            </div>
          </div>

          <div>
                  {localStorage.getItem('user-info') ?
                         <div class="dropdown">
                         <button class="btn btn-secondary dropdown-toggle me-2 mt-2 px-4 bg-light text-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" >
                          {user && user.username}
                         </button>
                         <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                           <li><a class="dropdown-item " onClick={signout} >Sign Out</a></li>
                         </ul>
                       </div>
                       :
                       null  
                  }
               
                  </div>
        </nav>
      
  );
}

export default Menu;
