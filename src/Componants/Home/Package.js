import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    const {_id,packageName,img,details,fee}=props.isPackage;
   
    return (
        <div>
              <Col>
                <Card className="pb-3 card-style ">
                    <Card.Img variant="top" className="thumb" src={img} />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold">{packageName}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Card.Title className="text-center fw-bold">$ {fee}/person</Card.Title>
                    </Card.Body>

                    <Link to={`/Booking/${_id}`}>
                <button className="btn btn-warning">Book Now </button>
            </Link>
                </Card>
            </Col>
        </div>
    );
};

export default Package;