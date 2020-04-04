import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            
           
            {/* search_start */}
           
            <div className="reson_area section_padding">
            <div className="section_title text-center mb-55">
                      <h3><span>Vous Cherchez Un Médecin?</span></h3>
            </div>
              <section className="home-section section-hero overlay bg-image" style={{backgroundImage: 'url("img/banner/banner.png")'}} id="home-section">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-12">
                      <div className="mb-5 textform-contro-center">
                        {/* fou9 search */}
                      </div>
                     
                      <form method="post" className="search-jobs-form">
                        <div className="row mb-5">
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <input type="text" className="form-control form-control-lg" placeholder="Nom de professionnel de santé " />
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <select className="form-control form-control-lg" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="--Gouvernorat--">
                              <option>Tunis</option>
                              <option>Sousse</option>
                              <option>sfax</option>
                              <option>Nabeul</option>
                              <option>Kairouan</option>
                              <option>Ariana</option>
                              <option>Ben Arous</option>
                              <option>Manouba</option>
                              <option>Gafsa</option>
                              <option>Bizert</option>
                              <option>Beja</option>
                              <option>Gabes</option>
                              <option>Tozeur</option>
                              <option>Jandouba</option>
                              <option>Kasserine</option>
                              <option>Le Kef</option>
                              <option>Monastir</option>
                              <option>Sidi Bouzid</option>
                              <option>Siliana</option>
                              <option>Kébili</option>
                              <option>Mahdia</option>
                              <option>Zaghoun</option>
                              <option>Médnine</option>
                              <option>Tataouine</option>
                            </select>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <select className="form-control form-control-lg" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="--Spécialité--">
                              <option>généraliste</option>
                              <option>chirurgie</option>
                              <option>dermatologie</option>
                              <option>gynécologie</option>
                              <option>psychiatrie</option>
                              <option>radiologie</option>
                              <option>Médecine d'urgence</option>
                            </select>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <button type="submit" href="rendez-vous.html" className="btn btn-primary btn-lg btn-block text-white btn-search"><span className="icon-search icon mr-2" />Rechercher</button>
                          </div>
                        </div>
                        <div className="row">
                          {/* ta7t search */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* search_end */}
          
            <div className="container" >
    <div className="row"  >
      <div> <img src="./img/doctor2.png" /></div> 
      <div className="col-sm-1  " style={{backgroundColor: '#ffffff'}}> </div>
      <div className="col-xl  " style={{backgroundColor: '#0042da'}}  >
        <h1 style={{color: '#ffffff'}}>Je suis un<br />patient</h1>
        <p style={{color: '#ffffff'}}>Un accès 24/7 sécurisé à vos ordonnances et une relation privilégiée avec vos professionnels de santé.</p>
        {/* <button href type="button" className="btn btn-outline-info btn-rounded waves-effect" style={{color: '#ffffff'}}>📄  Accéder à mon ordonnance</button> <br /> */}
        <button href type="button" className="btn btn-outline-info btn-rounded waves-effect" style={{color: '#ffffff'}}>🕐  Rendez-vous médicaux</button> <br /> <br/>
        <button href type="button" className="btn btn-outline-info btn-rounded waves-effect" style={{color: '#ffffff'}}>❔  Aide pour ma première connexion</button> <br /><br/>
        
        {/* <span class="buble buble1"></span> 
  <span class="buble buble2"></span>
  <span class="buble buble3"></span> */}
      </div>
      <div className="col-sm-1  " style={{backgroundColor: '#ffffff'}}> </div>
      <div className="col-xl  " style={{backgroundColor: '#01cbcc'}}>
        <h1 style={{color: '#ffffff'}}>Je suis un<br />Professionnel</h1>
        <p style={{color: '#ffffff'}}>Dossier patient en ligne, e-prescription, agenda médical et outils de coordination.</p> <br />
        {/* <a href="" class="link-cell"  style="color: #ffffff ">💊  Accéder à une ordonnance</a><br> */}
        <button href type="button" className="btn btn-outline-info btn-rounded waves-effect" style={{color: '#ffffff'}}>💊  Accéder à une ordonnance</button> <br /><br/>
        <button href type="button" className="btn btn-outline-info btn-rounded waves-effect" style={{color: '#ffffff'}}>👨🏽‍⚕️  Nos offres et services</button> <br /><br/>
        {/* <span  class="buble buble4"></span>
  <span class="buble buble5"></span>
  <span class="buble buble6"></span>  */}
      </div>
      <div className="col-sm-1  " style={{backgroundColor: '#ffffff'}}> </div>
      <div className="col-sm"> <img src="./img/doctor.png" /></div>
    </div>
  </div>

 <div>  {/* reson_area_start  */}
            {/* <div className="reson_area section_padding">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section_title text-center mb-55">
                      <h3><span>Reason of Helping</span></h3>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single_reson">
                      <div className="thum">
                        <div className="thum_1">
                          <img src="img/help/1.png" alt="" />
                        </div>
                      </div>
                      <div className="help_content">
                        <h4>Collecting Fund</h4>
                        <p>Lorem ipsum, or lipsum as it is 
                          sometimes known, is dummy 
                          text used in laying out print.</p>
                        <a href="#" className="read_more">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single_reson">
                      <div className="thum">
                        <div className="thum_1">
                          <img src="img/help/2.png" alt="" />
                        </div>
                      </div>
                      <div className="help_content">
                        <h4>Blood Camp</h4>
                        <p>Lorem ipsum, or lipsum as it is 
                          sometimes known, is dummy 
                          text used in laying out print.</p>
                        <a href="#" className="read_more">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single_reson">
                      <div className="thum">
                        <div className="thum_1">
                          <img src="img/help/3.png" alt="" />
                        </div>
                      </div>
                      <div className="help_content">
                        <h4>Friendly Volunteer</h4>
                        <p>Lorem ipsum, or lipsum as it is 
                          sometimes known, is dummy 
                          text used in laying out print.</p>
                        <a href="#" className="read_more">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           */}
            {/* reson_area_end  */}
           
            {/* latest_activites_area_start  */}
            {/* <div className="latest_activites_area">
              <div className=" video_bg_1 video_activite  d-flex align-items-center justify-content-center">
                <a className="popup-video" href="https://www.youtube.com/watch?v=MG3jGHnBVQs">
                  <i className="flaticon-ui" />
                </a>
              </div>
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col-lg-7">
                    <div className="activites_info">
                      <div className="section_title">
                        <h3> <span>Watch Our Latest</span><br />
                          Activities</h3>
                      </div>
                      <p className="para_1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do 
                        eiusmod tempor incididunt  ut labore dolore magna aliqua. 
                        enim minim veniam, quis nostrud exercitation.</p>
                      <p className="para_2">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do 
                        eiusmod tempor incididunt  ut labore dolore magna aliqua. 
                        enim minim veniam, quis nostrud exercitation. tempor 
                        incididunt  ut labore dolore magna aliqua. enim minim 
                        veniam, quis nostrud exercitation.</p>
                      <a href="#" data-scroll-nav={1} className="boxed-btn4">Donate Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        */}
            {/* latest_activites_area_end  */}
        
        </div>      
           
        
            {/* popular_causes_area_start  */}
            {/* <div className="popular_causes_area section_padding">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section_title text-center mb-55">
                      <h3><span>Popular Causes</span></h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="causes_active owl-carousel">
                      <div className="single_cause">
                        <div className="thumb">
                          <img src="img/causes/1.png" alt="" />
                        </div>
                        <div className="causes_content">
                          <div className="custom_progress_bar">
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                <span className="progres_count">
                                  30%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="balance d-flex justify-content-between align-items-center">
                            <span>Raised: $5000.00 </span>
                            <span>Goal: $9000.00 </span>
                          </div>
                          <h4>Help us to Send Food</h4>
                          <p>The passage is attributed to an 
                            unknown typesetter in the century 
                            who is thought</p>
                          <a className="read_more" href="cause_details.html">Read More</a>
                        </div>
                      </div>
                      <div className="single_cause">
                        <div className="thumb">
                          <img src="img/causes/2.png" alt="" />
                        </div>
                        <div className="causes_content">
                          <div className="custom_progress_bar">
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                <span className="progres_count">
                                  30%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="balance d-flex justify-content-between align-items-center">
                            <span>Raised: $5000.00 </span>
                            <span>Goal: $9000.00 </span>
                          </div>
                          <h4>Clothes For Everyone</h4>
                          <p>The passage is attributed to an 
                            unknown typesetter in the century 
                            who is thought</p>
                          <a className="read_more" href="cause_details.html">Read More</a>
                        </div>
                      </div>
                      <div className="single_cause">
                        <div className="thumb">
                          <img src="img/causes/3.png" alt="" />
                        </div>
                        <div className="causes_content">
                          <div className="custom_progress_bar">
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                <span className="progres_count">
                                  30%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="balance d-flex justify-content-between align-items-center">
                            <span>Raised: $5000.00 </span>
                            <span>Goal: $9000.00 </span>
                          </div>
                          <h4>Water For All Children</h4>
                          <p>The passage is attributed to an 
                            unknown typesetter in the century 
                            who is thought</p>
                          <a className="read_more" href="cause_details.html">Read More</a>
                        </div>
                      </div>
                      <div className="single_cause">
                        <div className="thumb">
                          <img src="img/causes/1.png" alt="" />
                        </div>
                        <div className="causes_content">
                          <div className="custom_progress_bar">
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                <span className="progres_count">
                                  30%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="balance d-flex justify-content-between align-items-center">
                            <span>Raised: $5000.00 </span>
                            <span>Goal: $9000.00 </span>
                          </div>
                          <h4>Help us to Send Food</h4>
                          <p>The passage is attributed to an 
                            unknown typesetter in the century 
                            who is thought</p>
                          <a className="read_more" href="cause_details.html">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          */}
            {/* popular_causes_area_end  */}
        
        
        
        
        
        
        
            {/* counter_area_start  */}
            {/* <div className="counter_area">
              <div className="container">
                <div className="counter_bg overlay">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="single_counter d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-calendar" />
                        </div>
                        <div className="events">
                          <h3 className="counter">120</h3>
                          <p>Finished Event</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single_counter d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-heart-beat" />
                        </div>
                        <div className="events">
                          <h3 className="counter">120</h3>
                          <p>Finished Event</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single_counter d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-in-love" />
                        </div>
                        <div className="events">
                          <h3 className="counter">120</h3>
                          <p>Finished Event</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single_counter d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-hug" />
                        </div>
                        <div className="events">
                          <h3 className="counter">120</h3>
                          <p>Finished Event</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            */}
            {/* counter_area_end  */}
         
         
            {/* our_volunteer_area_start  */}
            {/* <div className="our_volunteer_area section_padding">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section_title text-center mb-55">
                      <h3><span>Our Volunteer</span></h3>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single_volenteer">
                      <div className="volenteer_thumb">
                        <img src="img/volenteer/1.png" alt="" />
                      </div>
                      <div className="voolenteer_info d-flex align-items-end">
                        <div className="social_links">
                          <ul>
                            <li>
                              <a href="#"> <i className="fa fa-facebook" /> </a>
                            </li>
                            <li>
                              <a href="#"> <i className="fa fa-pinterest" /> </a>
                            </li>
                            <li>
                              <a href="#"> <i className="fa fa-linkedin" /> </a>
                            </li>
                            <li>
                              <a href="#"> <i className="fa fa-twitter" /> </a>
                            </li>
                          </ul>
                        </div>
                        <div className="info_inner">
                          <h4>Sakil khan</h4>
                          <p>Donner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single_volenteer">
                      <div className="volenteer_thumb">
                        <img src="img/volenteer/2.png" alt="" />
                      </div>
                      <div className="voolenteer_info d-flex align-items-end">
                        <div className="social_links">
                          <ul>
                            <li>
                              <a href="#"> <i className="fa fa-facebook" /> </a>
                            </li>
                            <li>
                              <a href="#"> <i className="fa fa-pinterest" /> </a>
                            </li>
                            <li>
                              <a href="#"> <i className="fa fa-linkedin" /> </a>
                            </li>
                            <li>
                              <a href="#"> <i className="fa fa-twitter" /> </a>
                            </li>
                          </ul>
                        </div>
                        <div className="info_inner">
                          <h4>Emran Ahmed</h4>
                          <p>Volunteer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single_volenteer">
                      <div className="volenteer_thumb">
                        <img src="img/volenteer/3.png" alt="" />
                      </div>
                      <div className="voolenteer_info d-flex align-items-end">
                        <div className="social_links">
                          <ul>
                            <li>
                              <a href="#"> <i className="fa fa-facebook" /> </a>
                            </li>
                            <li>
                              <a href="#"> <i className="fa fa-pinterest" /> </a>
                            </li>
                            <li>
                              <a href="#"> <i className="fa fa-linkedin" /> </a>
                            </li>
                            <li>
                              <a href="#"> <i className="fa fa-twitter" /> </a>
                            </li>
                          </ul>
                        </div>
                        <div className="info_inner">
                          <h4>Sabbir Ahmed</h4>
                          <p>Volunteer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            */}
            {/* our_volunteer_area_end  */}
            {/* news__area_start  */}
            
  
            
         
          </div>
         
         );
    }
}
 
export default Home;