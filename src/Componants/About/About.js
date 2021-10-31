import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <div>
           <img className="w-100" style={{height:"300px"}} src="https://www.impactplus.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=1200&name=best-about-us-pages.jpg" alt="" />
           <div className="col-md-6 col-sm-1  my-5 mx-auto">
               <h1>FAQ</h1>
                        <div className="mt-5  ">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Do you allow dogs into the theme park?</Accordion.Header>
                                    <Accordion.Body>
                                    While we don’t allow dogs, other than guide dogs, into the park, we do provide free holding kennels just outside the entrance tills. Kennels are available on a first come first served basis, you can reserve a kennel by calling us on 01834 815170.  You can leave the park to check on your dog as often as you like.  We recommend you bring a bed/blanket, a bowl and some water for your dog. Dogs are left at the owners risk. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Are your rides affected by bad weather?</Accordion.Header>
                                    <Accordion.Body>
                                    We occasionally have to close some of our rides due to high winds, rain, thunder or lightning.  If you are concerned rides may be closed please call 01834 815170 between 9am and 5pm to check.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can I get to you on public transport?</Accordion.Header>
                                    <Accordion.Body>
                                    Unfortunately, Oakwood is not situated on a public bus route although Haverfordwest and Narberth nearby both have train stations. We have an arrangement with a local taxi firm who you can call for a quote.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>I’m bringing my baby.  Where can I change nappies and warm bottles?</Accordion.Header>
                                    <Accordion.Body>
                                    We have bottle warming facilities at The Restaurant and in Neverland.  There are baby changing facilities in the toilets behind the Waterfall ride, Spooky Street toilets and Whistlestop toilets.  The park map displayed around the park have these facilities clearly marked.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                    </div>
        </div>
    );
};

export default About;