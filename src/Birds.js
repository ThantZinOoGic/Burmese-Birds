import React from 'react';
import useFetch from './useFetch';
import BirdCard from './BirdCard';

export default function Birds() {
    const {datas : birds, error, isPending} = useFetch("https://json-server-for-birds.vercel.app/Tbl_Bird");
  return (
    <div className='row'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            { birds && birds.map(bird => <BirdCard key={bird.Id} bird={bird}/>)}
    </div>
  )
}
