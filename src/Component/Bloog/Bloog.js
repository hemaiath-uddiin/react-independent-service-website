import React from 'react';
import "./Bloog.css"
const Bloog = () => {
    return (
        <div className='container'>
             <div className="row"> 
                <div className="col-lg-4 d-block d-lg-flex"> 
                  <div className="card"> 
                    <div className="card-header"> 
                      <h4> Difference between authorization and authentication</h4>
                    </div> 
                    <div className="card-body"> 
                       <p> authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to</p> <br /> 
                       <p>Authentication is the first step of a good identity and access management process</p> <br /> 
                       <p> Authorization always takes place after authentication.</p>
                    </div>
                  </div>
                </div> 
                <div className="col-lg-4 d-block d-lg-flex"> 
                  <div className="card"> 
                    <div className="card-header"> 
                      <h4> Difference between authorization and authentication</h4>
                    </div> 
                    <div className="card-body"> 
                       <p> Firebase manages all data real-time in the database. it is store the users data  and other information who are login to the website, such as email, name, so many other information  </p> <br />
                    </div>
                  </div>
                </div> 
                <div className="col-lg-4 d-block d-lg-flex"> 
                  <div className="card"> 
                    <div className="card-header"> 
                      <h4> What other services does firebase provide other than authentication</h4>
                    </div> 
                    <div className="card-body"> 
                       <p> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p> 
                    </div>
                  </div>
                </div> 
             </div>
        </div>
    );
};

export default Bloog;