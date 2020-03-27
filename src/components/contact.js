import React, { Component } from 'react';
class contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
     
            <div className="bg-contact100" >
            <div className="container-contact100">
              <div className="wrap-contact100">
                <div className="contact100-pic js-tilt" data-tilt>
                  <img src="images/Sans-titre---2.gif" alt="IMG" />
                </div>
                <form className="contact100-form validate-form">

                <div className="section_title text-center mb-55">
                      <h3><span>   Entrer en contact</span></h3>
                 </div>
                  {/* <span className="contact100-form-title">
                  Entrer en contact
                  </span> */}
                  <div className="wrap-input100 validate-input" data-validate="Name is required">
                    <input className="input100" type="text" name="name" placeholder="nom" />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="fa fa-user" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" name="email" placeholder="Email" />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Message is required">
                    <textarea className="input100" name="message" placeholder="Message" defaultValue={""} />
                    <span className="focus-input100" />
                  </div>
                  <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    

        );
    }
}
 
export default contact;