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
  return (
    <div>
        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {bird && (
            <div className='d-flex 100-vh  align-items-center p-5'>
                <div className='col-md-6 px-5'>
                    <h3 className='mb-3'>{bird.BirdMyanmarName + "  ( " + bird.BirdEnglishName +" ) "}</h3>
                    <p>{bird.Description}</p>
                <button className='btn btn-outline-primary' onClick={btnHandler}>Back</button>

                </div>
                <div className='col-md-6'>
                    <img src={`/${bird.ImagePath}`} className='img-fluid rounded'/>
                </div>
            </div>
        )}
    </div>
  )
}
