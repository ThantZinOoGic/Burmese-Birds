import React from 'react';
import { Link } from 'react-router-dom';


export default function BirdCard({bird}) {
    let img =  `./${bird.ImagePath}`;
    return (
        <div className="col-md-4">
            <div className="card mx-1 my-2">
                <img src={img} className="card-img-top" height={200}/>
                <div className="card-body">
                    <h6 className="card-text">{bird.BirdMyanmarName}</h6>
                    <p className="card-text">{bird.BirdEnglishName}</p>
                    <Link to={`/birds/${bird.id}`} className="btn btn-primary">Detail</Link>
                </div>
            </div>
        </div>
  )
}
