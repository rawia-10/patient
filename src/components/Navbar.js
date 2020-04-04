import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div>
                
            {/* header-start */}
            <header>
              <div className="header-area ">
                <div className="header-top_area">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xl-6 col-md-12 col-lg-8">
                        <div className="short_contact_list">
                          <ul>
                            <li><a href="#"> <i className="fa fa-phone" /> +1 (454) 556-5656</a></li>
                            <li><a href="#"> <i className="fa fa-envelope" />Yourmail@gmail.com</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 col-lg-4">
                        <div className="social_media_links d-none d-lg-block">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sticky-header" className="main-header-area">
                  <div className="container-fluid">
                    <div className="row align-items-center">
                      <div className="col-xl-3 col-lg-3">
                        <div className="logo">
                          <a href="index.html">
                           <Link className='active' exact to='/'> <img src="img/logo.png" alt="" /></Link>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-9">
                        <div className="main-menu">
                          <nav>
                            <ul id="navigation">
                              <li><Link className='active' exact to='/'>Accueil</Link></li>
                              {/* <li><a href="About.html">A propos</a></li> */}
                              <li><Link to='/contact'>contact</Link> </li>
                              {/* <li><Link to='/aide'>Besoin d'aide</Link> </li> */}
                            </ul>
                          </nav>
                          
                          <div className="Appointment">
                            <div className="book_btn d-none d-lg-block">
                              <a data-scroll-nav={1} ><Link to='/praticien'>Praticien</Link></a>
                            </div>
                          </div>

                          <div className="Appointment">
                            <div className="book_btn d-none d-lg-block">
                              <a data-scroll-nav={1} ><Link to='/patient'>Patient</Link></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* header-end */}

            
            </div>
         );
    }
}
 
export default Navbar;