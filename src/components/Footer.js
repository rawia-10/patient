import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <footer className="footer">
            <div className="footer_top">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-md-12 col-lg-4 ">
                    <div className="footer_widget">
                      <div className="footer_logo">
                        <a href="#">
                          <img src="img/footer_logo.png" alt="" />
                        </a>
                      </div>
                      <p className="address_text">Vous êtes en difficultés pour prendre un RDV médical? ou vous êtes à la recherche d'un médecin <br></br>

                       Ne vous inquiétez pas tabibi.tn est à votre service gratuitement pour vous aider à trouver un médecin la plus proche de chez vous et de prendre le RDV qui vous convient soit par téléphone soit en ligne depuis notre site web.
                      </p>
{/* 
                      <div className="socail_links">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="ti-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti-twitter-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-dribbble" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    */}
                    </div>
                  </div>
                 
                  <div className="col-xl-6 col-md-12 col-lg-3">
                    <div className="footer_widget">
                      <h3 className="footer_title">
                      Nous suivre sur
                      </h3>
                      <div className="contacts">
                        <p>Facebook<br />
                          Instagram <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
         
         
            <div className="copy-right_text">
              <div className="container">
                <div className="row">
                  <div className="bordered_1px " />
                  <div className="col-xl-12">
                    <p className="copy_right text-center">
                    </p><p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © Tous droits réservés | Ce modèle est fait avec<i className="ti-heart" aria-hidden="true" /> 
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </footer>
         
          {/* footer_end  */}
          </div>
         );
    }
}
 
export default Footer;