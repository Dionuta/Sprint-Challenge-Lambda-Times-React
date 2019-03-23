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
    
   state ={
     carousel:[]
   }

  componentDidMount(){
   this.setState({carousel: carouselData})
  }
  render() {
    return (
      <CarouselDiv>
        <Carousel
          showStatus={false}
          infiniteLoop
          showThumbs={false} 
         
          >

          <div>
            <img src={this.state.carousel.img1} />

          </div>
          <div>
            <img src={this.state.carousel.img2} />

          </div>
          <div>
            <img src={this.state.carousel.img3} />

          </div>
          <div>
            <img src={this.state.carousel.img4} />

          </div>
        </Carousel>
      </CarouselDiv>
    );
  }
};

export default DemoCarousel