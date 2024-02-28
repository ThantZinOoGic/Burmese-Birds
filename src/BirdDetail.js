import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch';

export default function BirdDetail() {
    const {id} = useParams();
    const {datas : bird, error, isPending } = useFetch(`https://json-server-for-birds.vercel.app/Tbl_Bird/${id}`);
    let navigate = useNavigate();

    const btnHandler = () => {
        navigate("/birds");
    }

    const deleteHandler = () => {
        fetch(`https://json-server-for-birds.vercel.app/Tbl_Bird/${bird.id}`,{
            method : "DELETE",
            }). then(() => 
            {
              navigate('/birds');
            })
    }
        
  return (
    <div>
        {isPending && <div className='vh-100'>Loading ...</div>}
        {error && <div>{error}</div>}
        {bird && (
            <div className='row  mt-5 py-5'>
                <div className='col-md-6 p-5' data-aos="zoom-in">
                    <h3 className='mb-3'>{bird.BirdMyanmarName + "  ( " + bird.BirdEnglishName +" ) "}</h3>
                    <p>{bird.Description}</p>
                <button className='btn btn-outline-primary me-3' onClick={btnHandler}>Back</button>
                <button className="btn btn-outline-danger" onClick={deleteHandler}>Delete</button>
                </div>
                <div className='col-md-6' data-aos="zoom-in">
                    <img src={`/${bird.ImagePath}`} className='img-fluid rounded'/>
                </div>
            </div>
        )}
    </div>
  )
}
