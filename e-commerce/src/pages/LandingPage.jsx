import React from 'react';
import femaleClothing from './../images/femaleClothing.jpg';
import maleClothing from './../images/maleClothing.jpg';
import kidsClothing from './../images/kidsClothing.jpg';

function LandingPage() {
  return (
    <div>
      <div class='bd-example h-90'>
        <div
          id='carouselExampleCaptions'
          class='carousel slide'
          data-ride='carousel'
        >
          <ol class='carousel-indicators'>
            <li
              data-target='#carouselExampleCaptions'
              data-slide-to='0'
              class='active'
            ></li>
            <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
            <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
          </ol>
          <div class='carousel-inner overflow-hidden'>
            <div class='carousel-item active'>
              <img src={femaleClothing} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={maleClothing} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={kidsClothing} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <a
            class='carousel-control-prev'
            href='#carouselExampleCaptions'
            role='button'
            data-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='sr-only'>Previous</span>
          </a>
          <a
            class='carousel-control-next'
            href='#carouselExampleCaptions'
            role='button'
            data-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='sr-only'>Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
