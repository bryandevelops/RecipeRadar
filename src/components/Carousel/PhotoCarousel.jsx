import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

import './PhotoCarousel.css'

export default function PhotoCarousel (props) {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-75 d-block mx-auto'
        itemId={1}
        src='/img-1.jpg'
      />
      <MDBCarouselItem
        className='w-75 d-block mx-auto'
        itemId={2}
        src='/img-2.jpg'
      />
      <MDBCarouselItem
        className='w-75 d-block mx-auto'
        itemId={3}
        src='/img-3.jpg'
      />
    </MDBCarousel>
  );
}