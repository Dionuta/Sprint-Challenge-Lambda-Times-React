import React, { Component } from 'react';
import { carouselData } from '../../data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';



// Complete this Carousel 


const CarouselDiv = styled.div`
   max-width: 71%;
   margin-top: 16px;
   
`

class DemoCarousel extends Component {

  render() {
    return (
      <CarouselDiv>
        <Carousel
          showStatus={false}
          infiniteLoop
          showThumbs={false} 
          autoPlay
          >

          <div>
            <img src="assets/carousel/mountains.jpeg" />

          </div>
          <div>
            <img src="./assets/carousel/computer.jpeg" />

          </div>
          <div>
            <img src="./assets/carousel/trees.jpeg" />

          </div>
          <div>
            <img src="./assets/carousel/turntable.jpeg" />

          </div>
        </Carousel>
      </CarouselDiv>
    );
  }
};

export default DemoCarousel