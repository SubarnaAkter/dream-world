import React from 'react';
import { Row,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 ">
                    <div className="col">
                        <div className="card h-100 river-rides py-5 ">
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
                <div className="row  my-4">
                    <div className="col">
                        <div className="card adventure">

                            <div className="card-body thumbnail text-white py-5 pt-5">
                                <h1 className="fs-1 fw-bold mt-5 pt-5">We seek adventure <br />
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
                            key={isPackage._id}
                            isPackage={isPackage}
                        ></Package>

                        )
                    }

                </Row>
            </div>

            <div className="card text-center my-5">

                <div className="card-body about-info">
                    <h1 className="card-title text-white mt-5 py-5 fs-1 fw-bold">We have everything <br /> you want and need to make <br /> your experience safe & comfortable!</h1>
                    <p className="card-text text-white pb-5">All the rides are guaranteed to be safe, and our lifeguards are always ready to help in case of any danger or emergency..</p>
                    <Link to="/About" className="btn btn-info fw-bold">More About Us</Link>
                </div>

            </div>


            <div className="row m-5">
                <div className="col-sm-6">
                    <div className="card border-0">
                        <div className="card-body">
                                   <img  className="w-100" src="https://image.freepik.com/free-photo/boys-having-fun-swimming-pool-with-pool-float-water-gun_23-2149025413.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card border-0 mt-5 pt-5 mx-3">
                        <div className="card-body text-start">
                            <h1 className="card-title fs-1 fw-bold">Leave your worries <br /> behind  and chill</h1>
                            <p className="card-text">We provide amazing experiences and create safe adventures for you at the same time. Active and passive leisure alternatives are available.</p>
                            <Link to="/Contact" >
                                <button className="btn-regular"> Contact Us</button>
                               </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;