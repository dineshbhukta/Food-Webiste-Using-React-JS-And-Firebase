import React from 'react';
import Reviews from '../component/Reviews';

function Home() {
  return (
      <div>
     <section id="home">
          <div class="container-fluid px-0 top-banner">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-5 col-md-6">
                        <h1>Good food choices are good investments.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
                        </p>
                        </div>

                        <div class="mt-4">
                            <button class="main-btn">Order now <i class="fas fa-shopping-basket ps-3"></i></button>

                            <button class="white-btn ms-lg-4 mt-lg-0 mt-4">Order now <i class="fas fa-angle-right ps-3"></i></button>
                        </div>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- section-2 counter --> */}
      <section id="counter">
          <section class="counter-section">
              <div class="container">
                  <div class="row text-center">
                      <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                          <h2>
                              <span id="count1"></span>1234+
                          </h2>
                          <p>SAVINGS</p>
                      </div>

                      <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h2>
                            <span id="count2"></span>1245+
                            </h2>
                            <p>Photos</p>
                       </div>

                       <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h2>
                                <span id="count3"></span>1345+
                            </h2>
                            <p>Rockets</p>
                        </div>

                        <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h2>
                                <span id="count4"></span>1466+
                            </h2>
                            <p>Globes</p>
                        </div>
                    </div>
              </div>
          </section>
      </section>

      {/* <!-- section-7 book-food--> */}
<section id="book-food">
  <div class="book-food">
    <div class="container book-food-text">
      <div class="row text-center">
        <div class="col-lg-9 col-md-12">
         <h2>Baked fresh daily by bakers with passion.</h2>
        </div>
        <div class="col-lg-3 col-md-12 mt-lg-0 mt-4">
          <button class="main-btn">Learn more</button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- section-8 newslettar--> */}
<section id="newslettar">
  <div class="newslettar wrapper">
    <div class="container">
      <div class="row">
        <div class="sol-sm-12">
          <div class="text-content text-center pb-4">
           <h2>Hurry up! Subscribe our newsletter
             and get 25% Off</h2>
           <p>Limited time offer for this month. No credit card required. </p>
          </div>
          <form class="newsletter">
            <div class="row">
              <div class="col-md-8 col-12">
                <input class="form-control" placeholder="Email Address here" name="email" type="email" />
              </div>
              <div class="col-md-4 col-12">
                <button class="main-btn" type="submit">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


<Reviews/>
</div>
  );
  
}

export default Home;
