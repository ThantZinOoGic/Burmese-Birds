import React from 'react';
import useFetch from './useFetch';
import BirdCard from './BirdCard';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Birds() {
    const {datas : birds, error, isPending} = useFetch("https://json-server-for-birds.vercel.app/Tbl_Bird");
  return (
      <div>

<div className='row mt-5'>
  <div class="card col-md-4" data-aos="zoom-in">
    <img src="./bird.png"  width={200}/>
    <hr />
    <div class="card-body">
      <h5 class="card-title">ငှက် (Birds)</h5>
      <p class="card-text"> 
        ငှက် (မျိုးပေါင်း Aves) သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံ နှစ်ဖက်ရှိသော သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။ သို့သော် အားလုံး ပျံသန်းနိုင်စွမ်း မရှိကြပေ။ အချို့ငှက်များသည် အလွန်အပြေးသန်သူများဖြစ်ကြပြီး အချို့ကတော့ အလွန်ရေကူး ကျွမ်းကျင်သူများ ဖြစ်ကြသည်။ ငှက်သည် ကျောရိုးရှိသတ္တဝါဖြစ်ပြီး ဥ,ဥတတ်သော သတ္တဝါအမျိုးအစားလည်း ဖြစ်သည်။ ဥက ပေါက်ဖွားလာသော ကလေးငယ်များကို စောင့်ရှောက်လေ့ ရှိကြသည်။
      </p>
    </div>
  </div>
  <div className='col-md-8'>
    <div className="m-5">
      <div className="row">
        <div className="col-md-3 mb-2" data-aos="zoom-in">
          <div className="card text-center">
            <h2>၈၆၀၀</h2>
            <p>ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း)</p>
          </div>
        </div>
        <div className="col-md-3 mb-2" data-aos="zoom-in">
          <div className="card text-center">
            <h2>၁၆၀၀</h2>
            <p>မျိုးစုပေါင်း</p>
          </div>
        </div>
        <div className="col-md-3 mb-2" data-aos="zoom-in">
          <div className="card text-center">
            <h2>၁၅၅</h2>
            <p>မျိုးရင်းပေါင်း</p>
          </div>
        </div>
        <div className="col-md-3 mb-2" data-aos="zoom-in">
          <div className="card text-center">
            <h2>၂၇</h2>
            <p>မျိုးစဉ်ပေါင်း</p>
          </div>
        </div>
      </div>
    </div>
    <div className='pt-5 px-5'>
      <div className="row">
        <div className="col-6" data-aos="zoom-in">
          <Link to="https://my.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA">
            <div className="card">
              <img src="./feather.png" alt="" style={{ width: "75%" }}/>
              <div className="card-body">
                <h2 className='text-decoration-none'>Wikipedia</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-6" data-aos="zoom-in">
            <div className="card">
              <div className="card m-2">
              <div className="row p-3">
                <div className="col-6">
                  <Link>
                    <img src="./twitter.svg" className="img-fluid" width={50}/>
                  </Link>
                </div>
                <div className="col-6 ">
                  <Link>
                      <img src="./facebook.svg" className="img-fluid" width={50}/>
                  </Link>
                </div>
              </div>
              </div>
              <div className="card-body">
                <h4>Bird In Nature</h4>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

        {/* bird detail  */}
        <div className='row mt-5'>
          <h3 data-aos="zoom-in">ငှက် (Bird)</h3>
          {error && <div>{error}</div>}
          {isPending && <div>Loading ...</div>}
          { birds && birds.map(bird => <BirdCard key={bird.Id} bird={bird}/>)}
        </div>
      </div>
</div>
  )
}
