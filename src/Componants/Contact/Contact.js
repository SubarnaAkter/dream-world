import React from 'react';

const Contact = () => {
    return (
        <div>
            <div>
                <img className="w-100 " src="https://img.freepik.com/free-photo/contact-us_36325-2135.jpg?size=626&ext=jpg" alt="" />
            </div>
            <div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.104749223511!2d90.44960271463194!3d23.707953096314178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b77dc18feb93%3A0x25383b8e80227aad!2sSonir%20Akhra%20-%20Mridha%20Bari%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1635690346765!5m2!1sen!2sbd" width="100%" height="350"></iframe>
            </div>
            <div>
                <div >
                    <div className="card-group">

                        <div className="card p-5 river-rides">

                            <i className="fas fa-map-marker-alt icon "></i>

                            <div className="card-body">
                                <h1 className="card-title">Address</h1>
                                <p className="card-text">419/7 Nurpur South Dania,Dhaka-1236</p>
                            </div>



                        </div>
                        <div className="card water-slide p-5">
                            <i className="fas fa-phone-alt icon"></i>
                            <div className="card-body">
                                <h1 className="card-title">Phone</h1>
                                <p className="card-text">01991934452</p>
                                <p className="card-text">01771934452</p>
                            </div>

                        </div>
                        <div className="card pools p-5">
                            <i className="fas fa-envelope-open-text icon"></i>
                            <div className="card-body">
                                <h1 className="card-title">Mail</h1>
                                <p className="card-text">dreamworld1212@gmail.com</p>
                                <p className="card-text">dreamworinfold1212@gmail.com</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="container w-50 my-5"> 
            <h1>Send Message</h1>
            <form className="row g-3">
            <div className="col-md-6">
                   
                   <input type="password" className="form-control" placeholder="Enter Name" id="inputPassword4"/>
               </div>
                <div className="col-md-6">
                 
                    <input type="email" placeholder="Enter Email" className="form-control" id="inputEmail4"/>
                </div>
                
                <div className="col-12">
                  
                    <textarea type="text" className="form-control py-5" id="inputAddress" placeholder="Message"/>
                </div>
                
              
              
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className ="form-check-label text-start fw-bold" htmlFor="gridCheck">
                        I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND STORED.
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-regular">Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Contact;