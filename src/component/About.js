import React from 'react';

function About() {
  return( <div>
       
       <section id="about">
    <div class="about-section wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12 mb-lg-0 mb-5">
            <div class="card border-0">
              <img src="images/img/img-1.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-5 col-md-12 text-sec">
           <h2>We pride ourselves on making real food from the best ingredients.</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit
             amet leo. Mauris feugiat erat tellus.</p>
             <button class="main-btn mt-4">Learn More</button>
          </div>
        </div>
      </div>
      <div class="container food-type">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
           <h2>We make everything by hand with the best possible ingredients.</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit
             amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries
             Vokalia and Consonantia, there live the blind texts.</p>
           <ul class="list-unstyled py-3">
             <li>Etiam sed dolor ac diam volutpat.</li>
             <li>Erat volutpat aliquet imperdiet.</li>
             <li>purus a odio finibus bibendum.</li>
           </ul> 
           <button class="main-btn mt-4">Learn More</button>
          </div>
          <div class="col-lg-7 col-md-12">
            <div class="card border-0">
              <img src="images/img/img-2.png" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 {/* <!-- section-3 story--> */}
  <section id="story">
    <div class="story-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="text-content">
             <h2>When a man's stomach is full it makes no
               difference whether he is rich or poor.</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
               finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
               <button class="main-btn mt-3">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </div>);
}

export default About;
