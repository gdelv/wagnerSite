import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class ControlledCarousel extends React.Component {
  // const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState(null);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  //   setDirection(e.direction);
  // };


  //Goes inside Carousel as a prop
  // activeIndex={index} direction={direction} onSelect={handleSelect}

  
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  
  
  render() {
    const { index, direction } = this.state;


    return (
      <Carousel 
      activeIndex={index} 
      direction={direction} 
      onSelect={this.handleSelect} 
      >
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/images/Modern-Image30.jpg"
            height='200px'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/images/Modern-Image30.jpg"
            height='200px'
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/images/Modern-Image30.jpg"
            height='200px'
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
    );
  }
}




export default ControlledCarousel