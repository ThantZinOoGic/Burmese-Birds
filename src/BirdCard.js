import React from 'react';
import { Link } from 'react-router-dom';


export default function BirdCard({bird}) {
    let img =  `./${bird.ImagePath}`;
    return (
        <div className="col-md-4" data-aos="zoom-in">
            <div className="card my-2 ">
                <div className="overflow-hidden" height={200}>
                    <img src={img} className="" height={200}  style={{ objectFit : 'cover',
                                                                        width : "100%"}}/>
                </div>
                <div className="card-body">
                    <h6 className="card-text">{bird.BirdMyanmarName}</h6>
                    <p className="card-text">{bird.BirdEnglishName}</p>
                    <Link to={`/birds/${bird.id}`} className="btn btn-primary">Detail</Link>
                </div>
            </div>
        </div>
  )
}
