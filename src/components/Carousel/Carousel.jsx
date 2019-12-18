import React from 'react'
import { Gallery, GalleryImage } from 'react-gesture-gallery';


const imageOne = require('./images/1.jpg');
const imageTwo = require('./images/2.jpg');
const imageThree = require('./images/3.jpg')




function Carousel() {

  const [index, setIndex] = React.useState(0);



  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (index === 4) {
  //       setIndex(0);
  //     } else {
  //       setIndex(prev => prev + 1);
  //     }
  //   }, 3000);
  //   return () => clearInterval(timer);
  // }, [index]);


  const images = [
    imageOne,
    imageTwo,
    imageThree
  ];

  return (
    <>
      <Gallery
        style={{
          background: "black",
          height: "100vh",
          width: "100vw"
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="fill" key={image} src={image} alt='image' />
        ))}
      </Gallery>
    </>
  )


}






export default Carousel