import React, { Component } from 'react';

import axios from 'axios';

class Patient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      nom:"",
      prenom:"",
      address:"",
      genre:"",
      date_naissance:"",
      email:"",
      tel:"",
      password:""
    
    };
  }



  handelSubmit()
  {
      console.log("state",this.state.nom, this.state.prenom,this.state.genre,this.state.address,this.state.email,this.state.password,this.state.tel,this.state.date_naissance)
      axios.post("http://127.0.0.1:8800/patient/register",{
      nom:this.state.nom,
      prenom:this.state.prenom,
      genre:this.state.genre,
      address:this.state.address,
      email:this.state.email,
      password:this.state.password,
      tel:this.state.tel,
      date_naissance:this.state.date_naissance
      })
.then(res=>{
    console.log("data",res.data);
//     window.location.href="/#/home/listepatient"
 })

  }


  reset()
  {
      this.setState({nom:"",prenom:"",email:"",address:"",genre:"",date_naissance:"",password:"",tel:""})
  }



onchange= (event) => {
    this.setState({nom: event.target.value});
    this.setState({prenom: event.target.value});
    this.setState({address: event.target.value});
    this.setState({genre: event.target.value});
    this.setState({tel: event.target.value});
    this.setState({email: event.target.value});
    this.setState({date_naissance: event.target.value});
    this.setState({password: event.target.value});
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
                <h3><span>inscri vous</span></h3>
           </div>
            
            <div className="wrap-input100 validate-input" data-validate="Name is required">
              <input defaultValue={this.state.nom} 
                      onChange={evenement=>this.setState({nom:evenement.target.value})}
              className="input100" type="text" name="name" placeholder="nom" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true" />
              </span>
            </div>
         
            <div className="wrap-input100 validate-input" data-validate="Name is required">
              <input defaultValue={this.state.prenom} 
                      onChange={evenement=>this.setState({prenom:evenement.target.value})}
              className="input100" type="text" name="name" placeholder="prenom" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true" />
              </span>
            </div>
         
            <div className="wrap-input100 validate-input" data-validate="Name is required">
              <input defaultValue={this.state.tel} 
                      onChange={evenement=>this.setState({tel:evenement.target.value})} 
                      className="input100" type="text" name="name" placeholder="telephone" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-phone" aria-hidden="true" />
              </span>
            </div>
         
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input defaultValue={this.state.email} 
                      onChange={evenement=>this.setState({email:evenement.target.value})}
               className="input100" type="text" name="email" placeholder="Email" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
         
            <div className="wrap-input100 validate-input" data-validate="address">
              <input defaultValue={this.state.address} 
                      onChange={evenement=>this.setState({address:evenement.target.value})}
              className="input100" type="text" name="email" placeholder="Adresse" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-map-marked" aria-hidden="true" />
              </span>
            </div>
         
            
         
            <div className="wrap-input100 validate-input" data-validate="Name is required">
              <input defaultValue={this.state.password} 
                      onChange={evenement=>this.setState({password:evenement.target.value})}
              className="input100" type="password" name="name" placeholder="password" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-key" aria-hidden="true" />
              </span>
            </div>
         

          
            <div className="wrap-input100 validate-input" data-validate="date">
              <input defaultValue={this.state.date_naissance} 
                      onChange={evenement=>this.setState({date_naissance:evenement.target.value})}
               className="input100" type="date" name="date" placeholder="date" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-calendar-week" aria-hidden="true" />
              </span>
            </div>
         

        {/* <div className="wrap-input100 validate-input">
        <input className="input100" type="date" placeholder="BIRTHDATE" name="birthday" />
     
        <span className="focus-input100" />
        <span className="symbol-input100">
                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" aria-hidden="true" />
              </span>
      </div>
            */}

                      
         

            {/* <div className="wrap-input100 validate-input" data-validate="Message is required">
              <textarea className="input100" name="message" placeholder="Message" defaultValue={""} />
              <span className="focus-input100" />
            </div>
          */}




            <div className="wrap-input100 validate-input">
        <label className="label">Gender</label>
        <div className="p-t-10">
          <label className="radio-container m-r-45">Homme
            <input defaultValue={this.state.genre} 
                      onChange={evenement=>this.setState({genre:evenement.target.value})}
             type="radio" defaultChecked="checked" name="Homme" />
            <span className="checkmark" />
          </label>
          <label className="radio-container">Femme
            <input defaultValue={this.state.genre} 
                      onChange={evenement=>this.setState({genre:evenement.target.value})}
             type="radio" name="Homme" />
            <span className="checkmark" />
          </label>
        </div>
      </div>


            <div className="container-contact100-form-btn">
              <button   onClick={this.handelSubmit.bind(this)} type="submit" className="contact100-form-btn">
                Envoyer
              </button>
            </div>
        
        
        
          </form>
       
        </div>
      </div>
    </div>

    //   <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
    //   <div className="wrapper wrapper--w680">
    //     <div className="card card-4">
    //       <div className="card-body">
    //         <h2 className="title">Registration Form</h2>
    //         <form method="POST">
    //           <div className="row row-space">
    //             <div className="col-2">
    //               <div className="input-group">
    //                 <label className="label">first name</label>
    //                 <input className="input--style-4" type="text" name="first_name" />
    //               </div>
    //             </div>
    //             <div className="col-2">
    //               <div className="input-group">
    //                 <label className="label">last name</label>
    //                 <input className="input--style-4" type="text" name="last_name" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row row-space">
    //             <div className="col-2">
    //               <div className="input-group">
    //                 <label className="label">Birthday</label>
    //                 <div className="input-group-icon">
    //                   <input className="input--style-4 js-datepicker" type="text" name="birthday" />
    //                   <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-2">
    //               <div className="input-group">
    //                 <label className="label">Gender</label>
    //                 <div className="p-t-10">
    //                   <label className="radio-container m-r-45">Male
    //                     <input type="radio" defaultChecked="checked" name="gender" />
    //                     <span className="checkmark" />
    //                   </label>
    //                   <label className="radio-container">Female
    //                     <input type="radio" name="gender" />
    //                     <span className="checkmark" />
    //                   </label>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row row-space">
    //             <div className="col-2">
    //               <div className="input-group">
    //                 <label className="label">Email</label>
    //                 <input className="input--style-4" type="email" name="email" />
    //               </div>
    //             </div>
    //             <div className="col-2">
    //               <div className="input-group">
    //                 <label className="label">Phone Number</label>
    //                 <input className="input--style-4" type="text" name="phone" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="input-group">
    //             <label className="label">Subject</label>
    //             <div className="rs-select2 js-select-simple select--no-search">
    //               <select name="subject">
    //                 <option disabled="disabled" selected="selected">Choose option</option>
    //                 <option>Subject 1</option>
    //                 <option>Subject 2</option>
    //                 <option>Subject 3</option>
    //               </select>
    //               <div className="select-dropdown" />
    //             </div>
    //           </div>
    //           <div className="p-t-15">
    //             <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    );
  }
}
 
export default Patient;