import React from 'react'
import './Cities.css'


function Cities() {
    const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper."
    return (
        <>
        
<div class="container-fluid">
<div class="title-arch">Popular Cities</div>

    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project wow animated animated4 fadeInLeft">
        <div class="project-hover">
        	<h2>Delhi</h2>
            <hr />
            <p>{lorem}</p>
            <a href="#">Explore</a>
        </div>
    </div>
	<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-2 wow animated animated3 fadeInLeft">
    	<div class="project-hover">
        	<h2>Mumbai</h2>
            <hr />
            <p>{lorem}</p>
            <a href="#">Explore</a>
        </div>
    </div>
	<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-3 wow animated animated2 fadeInLeft">
    	<div class="project-hover">
        	<h2>Pune</h2>
            <hr />
            <p>{lorem}</p>
            <a href="#">Explore</a>
        </div>
    </div>
	<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-4 wow animated fadeInLeft">
    	<div class="project-hover">
        	<h2>Banglore</h2>
            <hr />
            <p>{lorem}</p>
            <a href="#">Explore</a>
        </div>
    </div>
    <div class="clearfix"></div>
</div>   
        </>
    )
}

export default Cities
