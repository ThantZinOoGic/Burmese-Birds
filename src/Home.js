import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='row mt-5'>
      <div className='col-md-6' data-aos="zoom-in">
        <img src={"./bird.png"} className='mx-auto' style={{ width : "70%" }}/>
      </div>
      <div className='col-md-6 mt-5 pt-5' data-aos="zoom-in">
        <h3 className='mb-4'>ငှက် (Bird)</h3>
        <p className=''>
          ငှက် (မျိုးပေါင်း Aves) သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံ နှစ်ဖက်ရှိသော သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။ သို့သော် အားလုံး ပျံသန်းနိုင်စွမ်း မရှိကြပေ။ အချို့ငှက်များသည် အလွန်အပြေးသန်သူများဖြစ်ကြပြီး အချို့ကတော့ အလွန်ရေကူး ကျွမ်းကျင်သူများ ဖြစ်ကြသည်။ ငှက်သည် ကျောရိုးရှိသတ္တဝါဖြစ်ပြီး ဥ,ဥတတ်သော သတ္တဝါအမျိုးအစားလည်း ဖြစ်သည်။ ဥက ပေါက်ဖွားလာသော ကလေးငယ်များကို စောင့်ရှောက်လေ့ ရှိကြသည်။
        </p>
        <Link to="/birds" className='btn btn-outline-primary'>See More...</Link>
      </div>
    </div>
  )
}
