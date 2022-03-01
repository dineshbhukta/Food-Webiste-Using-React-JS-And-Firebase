import React from 'react';

function Reviews() {
  return <div>
      <section id="testimonial">
  <div class="wrapper testimonial-section">
    <div class="container text-center">
      <div class="text-center pb-4">
        <h2>Testimonial</h2>
      </div>
      <div class="row">
       <div class="col-sm-12 col-lg-10 offset-lg-1">
         <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
           <div class="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
               aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
               aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
               aria-label="Slide 3"></button>
           </div>
           <div class="carousel-inner">
             <div class="carousel-item active">
               <div class="carousel-caption">
                 <img src="images/review/review-1.jpg" />
                 <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                   live the blind texts. "</p>
                 <h5>Johnthan Doe - UX Designer</h5>
               </div>
             </div>
             <div class="carousel-item">
               <div class="carousel-caption">
                 <img src="images/review/review-2.jpg" />
                 <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                   live the blind texts. "</p>
                 <h5>Maccy Doe - Front End</h5>
               </div>
             </div>
             <div class="carousel-item">
               <div class="carousel-caption">
                 <img src="images/review/review-1.jpg" />
                 <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                   live the blind texts. "</p>
                 <h5>Johnthan Doe - UX Designer</h5>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    </div>
  </div>
</section>


{/* <!-- section-6 faq--> */}
<section id="faq">
  <div class="faq wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="text-center pb-4">
           <h2>Frequently Asked Questions</h2>
          </div>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-sm-6 mb-4">
         <h4><span>~</span>Is Foodies Bread really baked fresh each day?</h4>
         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
           blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
         </p>
        </div>
        <div class="col-sm-6 mb-4">
         <h4><span>~</span>Do you bake breads containing animal fats or products?</h4>
         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
           blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
         </p>
        </div>
        <div class="col-sm-6 mb-4">
         <h4><span>~</span>Can I order your products online?</h4>
         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
           blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
         </p>
        </div>
        <div class="col-sm-6 mb-4">
         <h4><span>~</span>When are you opening a shop near me?</h4>
         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
           blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
         </p>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>;
}

export default Reviews;
