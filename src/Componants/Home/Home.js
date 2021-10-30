import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import usePackages from '../../Hooks/usePackages';
import './Home.css'
import Package from './Package';
const Home = () => {
    const [packages] = usePackages();
    return (

        <div>
          
              
           
          
            <div className="banner text-white pt-5 py-5">
                <h1 className="pt-5 py-3">We Have everything for a perfect rest</h1>
                <h5>Thers's Nothing more exciting than spending whole day in our Dream Land park</h5>
            </div>
           
        <div className= "container my-5">
           <div className="row row-cols-1 row-cols-md-3 g-5">
                <div className="col">
                    <div className="card h-100 river-rides py-5">
                    <i className="fas fa-water icon"></i>
                        <div className="card-body mt-5">
                            <h5 className="card-title">River Rides</h5>
                            <p className="card-text  py-3">We offer an excellent range of river cruise packages for any taste</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 water-slide py-5">
                    <i className="fas fa-swimmer icon"></i>
                        <div className="card-body mt-5">
                            <h5 className="card-title">Water Slides</h5>
                            <p className="card-text  py-3">Huge variety of steep and gentle slides for harmless fun or extreme.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 pools py-5">
                    <i className="fas fa-swimming-pool icon"></i>
                        <div className="card-body mt-5">
                            <h5 className="card-title">Pools</h5>
                            <p className="card-text py-3">Swim 50m lanes, gentle widths or enjoy a great happy family day.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-4 my-4">
                <div className="col">
                    <div className="card adventure">
                        
                        <div className="card-body thumb text-white py-5 pt-5">
                            <h1>We seek adventure
                                    where others only
                                    dream</h1>
                        </div>
                    </div>
                </div>
            </div> 
     </div>
          
            <div>
                <h1 className="text-center fw-bold mt-5 pt-5">Our Packages</h1>
                <Row xs={1} md={3} className="g-2 m-5 ">

                    {
                        packages.map(isPackage => <Package
                            key={isPackage.key}
                            isPackage={isPackage}
                        ></Package>

                        )
                    }

                </Row>
            </div>

        </div>
    );
};

export default Home;