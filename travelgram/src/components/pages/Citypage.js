import React from 'react';
import '../../App.css';
import CitypageItem from '../city/CitypageItem'

export default function Citypage() {

  const lorem ="This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!"


  return (
<>
<div>

{/* <!-- Page Content --> */}
  <div class="container">

    {/* <!-- Heading Row --> */}
    <div class="row align-items-center my-5">
      <div class="col-lg-7">
        {/* Carousel to be added here */}
        <img 
        class="img-fluid rounded mb-4 mb-lg-0" 
        style={{height:"300px",width:"800px"}} 
        src="./images/mumbai.jpg" alt=""/>
      </div>
      {/* <!-- /.col-lg-8 --> */}
      <div class="col-lg-5">
        <h1 class="font-weight-light">CityName</h1>
          <p>{lorem}</p>
        <a class="btn btn-primary" href="#">Call to Action!</a>
      </div>
     
    </div>
    

</div>
{/* <!-- Content Row --> */}
<h1 className='my-4'>To Explore</h1>

    <div className="row">
      <CitypageItem/>
      <CitypageItem/>
      <CitypageItem/>
      <CitypageItem/>

      

    </div>
    {/* <!-- /.row --> */}



</div>
</>
  )
}
