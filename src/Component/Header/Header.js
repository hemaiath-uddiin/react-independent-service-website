import React from 'react';
import { Carousel } from 'react-bootstrap';
import img  from "../../images/banners.jpg"
function Header(props) {
    return (
        <div className='container-fluid wraper'>
            <Carousel fade>
  <Carousel.Item>
    <img 
      className="d-block w-100 h-200 img-fluid"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='title'>Wellcome to Travel Guide Website</h3>
      <p className='des' > we are giving the best tourist package with Reasonable Price</p >
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-200 img-fluid"
      src={img}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 className='title' >Wellcome to Travel Guide Website</h3>
      <p className='des' >we are giving the best tourist package with Reasonable Price</p >
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-200 img-fluid"
      src={img}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className='title'>Wellcome to Travel Guide Website</h3>
      <p className='des' >we are giving the best tourist package with Reasonable Price</p >
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default Header;