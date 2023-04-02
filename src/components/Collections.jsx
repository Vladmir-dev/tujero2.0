import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Collections = ({items}) => {

   const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  console.log("Collections", items)

  return (
    <div className="w-full">
      <Carousel responsive={responsive}>
        {items.map((item, index) => (
          <div key={index}>
            {console.log(item)}
            <img src={item.url} alt="logos" className="w-[100px] h-[100px]"/>
          </div>
        ))}
      </Carousel>
     </div>
  )
}

export default Collections
